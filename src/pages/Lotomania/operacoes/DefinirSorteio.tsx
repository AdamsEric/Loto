import { useState, useEffect } from 'react'
import { Modal, Form, Row, Col, Alert } from 'react-bootstrap'
import { toNumber, isNaN, uniq } from 'lodash'
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

import { Button, Input, InputNumber } from 'src/components/ui'

import { ISorteio } from 'src/models'

import { consultarConcursoLotomania } from 'src/services/apiConcurso'

interface IDefinirSorteioProps {
  sorteio: ISorteio,
  aoConfirmar(sorteio: ISorteio): void
}

const DefinirSorteio = (props: IDefinirSorteioProps) => {
  const [sorteio, setSorteio] = useState<ISorteio>(props.sorteio || {
    concurso: undefined,
    numeros: [
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', ''
    ]
  })
  const [exibir, setExibir] = useState<boolean>(false)
  const [keyFormulario, setKeyFormulario] = useState(1000)
  const [consultandoConcurso, setConsultandoConcurso] = useState<boolean>(false)
  const [concursoInvalido, setConcursoInvalido] = useState<boolean>(false)

  const limparNumeros = () => {
    setSorteio({
      concurso: sorteio.concurso,
      numeros: [
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', ''
      ]
    })
    setKeyFormulario(keyFormulario + 1)
  }

  const confirmarDados = () => {
    if (isNaN(sorteio?.concurso) || ((sorteio?.concurso || 0) < 1000)) {
      alert('O número do concurso informado é inválido')
      return
    }

    if (sorteio.numeros.filter((num: string) => isNaN(num) || num.length === 0 || num.length > 3).length > 0) {
      alert('Existe número inválido ou não informado. Verifique os números informados.')
      return
    }

    if (uniq(sorteio.numeros).length < 20) {
      alert('Existe número repetido. Verifique os números informados.')
      return
    }

    props.aoConfirmar(sorteio)
    setExibir(false)
  }

  useEffect(() => {
    if (exibir) {
      if (props.sorteio.concurso) {
        setSorteio(props.sorteio)
      }
    }
  }, [exibir, props.sorteio])

  useEffect(() => {
    setConcursoInvalido(false)
  }, [exibir, sorteio.concurso])

  const consultarConcurso = async () => {
    if (!sorteio.concurso) {
      return
    }

    try {
      setConcursoInvalido(false)
      setConsultandoConcurso(true)
      const resultado = await consultarConcursoLotomania(sorteio.concurso)
      setSorteio({
        concurso: resultado.numero,
        numeros: resultado.listaDezenas
      })
    } catch (err: any) {
      setConcursoInvalido(true)
      setSorteio({
        concurso: sorteio.concurso,
        numeros: []
      })
    }
    finally {
      setConsultandoConcurso(false)
      setKeyFormulario(keyFormulario + 1)
    }
  }

  const renderizarCampoNumero = (indice: number) => {
    return (
      <InputNumber
        id={`sorteio-numero-${indice + 1}`}
        previousId={`sorteio-numero-${indice}`}
        name={`numero-${indice + 1}`}
        defaultValue={sorteio?.numeros[indice]}
        onChange={(valor: string) => {
          if (valor.length === 2) {
            const proximoCampo = `sorteio-numero-${indice + 1 + 1}`
            const campo = document.getElementById(proximoCampo)

            if (campo) {
              campo.focus()
            }
          }

          let novoSorteio = sorteio
          
          if (novoSorteio && valor) {
            let novoValor = toNumber(valor).toString()
            if (novoValor.length < 2) {
              valor = `0${novoValor}`
            }
          }

          novoSorteio.numeros[indice] = valor
          setSorteio(novoSorteio)
        }}
      />
    )
  }

  return (
    <>
      <Button
        size={'sm'}
        variant={'primary'}
        onClick={() => setExibir(true)}>
        Definir sorteio
      </Button>

      <Modal show={exibir} onHide={() => setExibir(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Definir sorteio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form key={keyFormulario}>
            <BlockUi tag='div' blocking={consultandoConcurso}>
              <Row>
                <Col xs={4} sm={4} md={3}>
                  <Input
                    label={'Concurso'}
                    name='concurso'
                    defaultValue={sorteio?.concurso}
                    maxLength={4}
                    onChange={(value: string) =>
                      setSorteio({
                        ...sorteio,
                        concurso: toNumber(value),
                      })
                    }
                  />
                </Col>
                <Col xs={8} sm={8} md={9} className='d-flex mb-2 align-items-end' >
                  <Button
                    disabled={!sorteio.concurso}
                    onClick={() => consultarConcurso()}>
                    Consultar concurso
                  </Button>
                </Col>
              </Row>

              {concursoInvalido && (
                <Row>
                  <Col sm={12}>
                    <Alert className='my-2 py-2' variant='danger'>
                      O concurso digitado não foi encontrado.
                    </Alert>
                  </Col>
                </Row>
              )}

              <Row>
                <Col sm={12}>
                  <label>
                    <h6>Números</h6>
                  </label>
                </Col>
              </Row>

              {/* Linha 1 */}
              <Row>
                <Col xs={{ span: 2, offset: 1 }}>{renderizarCampoNumero(0)}</Col>
                <Col xs={2}>{renderizarCampoNumero(1)}</Col>
                <Col xs={2}>{renderizarCampoNumero(2)}</Col>
                <Col xs={2}>{renderizarCampoNumero(3)}</Col>
                <Col xs={2}>{renderizarCampoNumero(4)}</Col>
              </Row>

              {/* Linha 2 */}
              <Row>
                <Col xs={{ span: 2, offset: 1 }}>{renderizarCampoNumero(5)}</Col>
                <Col xs={2}>{renderizarCampoNumero(6)}</Col>
                <Col xs={2}>{renderizarCampoNumero(7)}</Col>
                <Col xs={2}>{renderizarCampoNumero(8)}</Col>
                <Col xs={2}>{renderizarCampoNumero(9)}</Col>
              </Row>

              {/* Linha 3 */}
              <Row>
                
                <Col xs={{ span: 2, offset: 1 }}>{renderizarCampoNumero(10)}</Col>
                <Col xs={2}>{renderizarCampoNumero(11)}</Col>
                <Col xs={2}>{renderizarCampoNumero(12)}</Col>
                <Col xs={2}>{renderizarCampoNumero(13)}</Col>
                <Col xs={2}>{renderizarCampoNumero(14)}</Col>
              </Row>

              {/* Linha 4 */}
              <Row>
                <Col xs={{ span: 2, offset: 1 }}>{renderizarCampoNumero(15)}</Col>
                <Col xs={2}>{renderizarCampoNumero(16)}</Col>
                <Col xs={2}>{renderizarCampoNumero(17)}</Col>
                <Col xs={2}>{renderizarCampoNumero(18)}</Col>
                <Col xs={2}>{renderizarCampoNumero(19)}</Col>
              </Row>

              <Row className='mt-1'>
                <Col sm={12} className='d-flex justify-content-between'>
                  <Button
                    variant={'secondary'}
                    onClick={() => limparNumeros()}
                  >
                    Limpar números
                  </Button>
                  <Button
                    variant={'primary'}
                    onClick={() => confirmarDados()}
                  >
                    Confirmar
                  </Button>
                </Col>
              </Row>
            </BlockUi>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default DefinirSorteio;
