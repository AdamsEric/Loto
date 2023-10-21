import { useState, useEffect } from 'react'
import { Modal, Form, Row, Col } from 'react-bootstrap'
import { toNumber, isNaN, uniq, chunk } from 'lodash'

import { Button, InputNumber } from 'src/components/ui'

import { IAposta } from 'src/models'

interface IDefinirApostaProps {
  aposta: IAposta,
  aoConfirmar(Aposta: IAposta): void
}

const DefinirAposta = (props: IDefinirApostaProps) => {
  const [aposta, setAposta] = useState<IAposta>(props.aposta || {
    numeros: [
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', ''
    ]
  })
  const [exibir, setExibir] = useState<boolean>(false)
  const [keyFormulario, setKeyFormulario] = useState(1000)

  const matrizIndices = chunk(Array.from({ length: 50 }, (_, index) => index), 6)


  const limparNumeros = () => {
    setAposta({
      numeros: [
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', ''
      ]
    })
    setKeyFormulario(keyFormulario + 1)
  }

  const confirmarDados = () => {
    if (aposta.numeros.filter((num: string) => isNaN(num) || num.length === 0 || num.length > 3).length > 0) {
      alert('Existe número inválido ou não informado. Verifique os números informados.')
      return
    }

    if (uniq(aposta.numeros).length < 50) {
      alert('Existe número repetido. Verifique os números informados.')
      return
    }

    props.aoConfirmar(aposta)
    setExibir(false)
  }

  useEffect(() => {
    if (exibir) {
      if (props.aposta.numeros[0] !== '') {
        setAposta(props.aposta)
      }
    }
  }, [exibir, props.aposta])

  const renderizarCampoNumero = (indice: number) => {
    return (
      <InputNumber
        id={`aposta-numero-${indice + 1}`}
        previousId={`aposta-numero-${indice}`}
        name={`numero-${indice + 1}`}
        defaultValue={aposta?.numeros[indice]}
        onChange={(valor: string) => {
          if (valor.length === 2) {
            const proximoCampo = `aposta-numero-${indice + 1 + 1}`
            const campo = document.getElementById(proximoCampo)

            if (campo) {
              campo.focus()
            }
          }

          let novaAposta = aposta
          
          if (novaAposta && valor) {
            let novoValor = toNumber(valor).toString()
            if (novoValor.length < 2) {
              valor = `0${novoValor}`
            }
          }

          aposta.numeros[indice] = valor
          setAposta(novaAposta)
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
        Definir aposta
      </Button>

      <Modal show={exibir} onHide={() => setExibir(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Definir aposta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form key={keyFormulario}>
            <Row>
              <Col sm={12}>
                <label>
                  <h6>Números</h6>
                </label>
              </Col>
            </Row>

            {matrizIndices.map((indices, indexList) => (
                <Row key={indexList}>
                  {indices.map(indice => (
                    <Col
                      key={indice} 
                      xs={2}
                    >
                      {renderizarCampoNumero(indice)}
                    </Col>
                  ))}
                </Row>
              ))}

            <Row>
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
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default DefinirAposta
