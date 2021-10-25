import { useState, useEffect } from 'react'
import { Modal, Form, Row, Col } from 'react-bootstrap'
import { toNumber, isNaN, uniq } from 'lodash'

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
      setAposta(props.aposta)
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

            {/* Linha 1 */}
            <Row>
              <Col sm={12} md={2}>{renderizarCampoNumero(0)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(1)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(2)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(3)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(4)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(5)}</Col>
            </Row>

            {/* Linha 2 */}
            <Row>
              <Col sm={12} md={2}>{renderizarCampoNumero(6)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(7)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(8)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(9)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(10)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(11)}</Col>
            </Row>

            {/* Linha 3 */}
            <Row>
              <Col sm={12} md={2}>{renderizarCampoNumero(12)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(13)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(14)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(15)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(16)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(17)}</Col>
            </Row>

            {/* Linha 4 */}
            <Row>
              <Col sm={12} md={2}>{renderizarCampoNumero(18)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(19)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(20)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(21)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(22)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(23)}</Col>
            </Row>

            {/* Linha 5 */}
            <Row>
              <Col sm={12} md={2}>{renderizarCampoNumero(24)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(25)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(26)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(27)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(28)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(29)}</Col>
            </Row>

            {/* Linha 6 */}
            <Row>
              <Col sm={12} md={2}>{renderizarCampoNumero(30)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(31)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(32)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(33)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(34)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(35)}</Col>
            </Row>

            {/* Linha 7 */}
            <Row>
              <Col sm={12} md={2}>{renderizarCampoNumero(36)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(37)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(38)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(39)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(40)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(41)}</Col>
            </Row>

            {/* Linha 8 */}
            <Row>
              <Col sm={12} md={2}>{renderizarCampoNumero(42)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(43)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(44)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(45)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(46)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(47)}</Col>
            </Row>

            {/* Linha 9 */}
            <Row>
              <Col sm={12} md={2}>{renderizarCampoNumero(48)}</Col>
              <Col sm={12} md={2}>{renderizarCampoNumero(49)}</Col>
            </Row>

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
