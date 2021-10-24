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
        name={`numero-${indice + 1}`}
        defaultValue={aposta?.numeros[indice]}
        onChange={(valor: string) => {
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

      <Modal show={exibir} size={'lg'} onHide={() => setExibir(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Definir aposta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col sm={12}>
                <label>
                  <h6>Números</h6>
                </label>
              </Col>

              {/* Linha 1 */}
              <Col sm={12} md={{ span: 2, offset: 1 }} lg={{ span: 1, offset: 1 }}>{renderizarCampoNumero(0)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(1)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(2)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(3)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(4)}</Col>
              <Col sm={12} md={{ span: 2, offset: 1 }} lg={{ span: 1, offset: 0 }}>{renderizarCampoNumero(5)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(6)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(7)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(8)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(9)}</Col>

              {/* Linha 2 */}
              <Col sm={12} md={{ span: 2, offset: 1 }} lg={{ span:1, offset: 1 }}>{renderizarCampoNumero(10)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(11)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(12)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(13)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(14)}</Col>
              <Col sm={12} md={{ span: 2, offset: 1 }} lg={{ span: 1, offset: 0 }}>{renderizarCampoNumero(15)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(16)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(17)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(18)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(19)}</Col>

              {/* Linha 3 */}
              <Col sm={12} md={{ span: 2, offset: 1 }} lg={{ span:1, offset: 1 }}>{renderizarCampoNumero(20)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(21)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(22)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(23)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(24)}</Col>
              <Col sm={12} md={{ span: 2, offset: 1 }} lg={{ span: 1, offset: 0 }}>{renderizarCampoNumero(25)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(26)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(27)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(28)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(29)}</Col>

              {/* Linha 4 */}
              <Col sm={12} md={{ span: 2, offset: 1 }} lg={{ span:1, offset: 1 }}>{renderizarCampoNumero(30)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(31)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(32)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(33)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(34)}</Col>
              <Col sm={12} md={{ span: 2, offset: 1 }} lg={{ span: 1, offset: 0 }}>{renderizarCampoNumero(35)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(36)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(37)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(38)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(39)}</Col>

              {/* Linha 5 */}
              <Col sm={12} md={{ span: 2, offset: 1 }} lg={{ span:1, offset: 1 }}>{renderizarCampoNumero(40)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(41)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(42)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(43)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(44)}</Col>
              <Col sm={12} md={{ span: 2, offset: 1 }} lg={{ span: 1, offset: 0 }}>{renderizarCampoNumero(45)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(46)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(47)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(48)}</Col>
              <Col sm={12} md={2} lg={1}>{renderizarCampoNumero(49)}</Col>
            </Row>

            <Row>
              <Col sm={12} className='d-flex justify-content-end'>
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
