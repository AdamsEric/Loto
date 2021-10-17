import { useState } from 'react';
import { Modal, Form, Row, Col } from 'react-bootstrap';
import { toNumber, isNaN } from 'lodash';

import { Button, Input, InputNumber } from 'src/components/ui';

import { ISorteio } from 'src/models';

interface IDefinirSorteioProps {
  sorteio: ISorteio;

  aoConfirmar(sorteio: ISorteio): void;
}

const DefinirSorteio = (props: IDefinirSorteioProps) => {
  const [sorteio, setSorteio] = useState<ISorteio>(props.sorteio || {
    concurso: undefined,
    numeros: [
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', ''
    ]
  });
  const [exibir, setExibir] = useState<boolean>(false);

  const confirmarDados = () => {
    if (isNaN(sorteio?.concurso) || ((sorteio?.concurso || 0) < 1000)) {
      alert('O número do concurso informado é inválido')
      return
    }

    if (sorteio.numeros.filter((num: string) => isNaN(num) || num.length === 0 || num.length > 3).length > 0) {
      alert('Existe número inválido. Verifique.')
      console.log(sorteio.numeros)
      return
    }

    props.aoConfirmar(sorteio)
    setExibir(false)
  }

  const renderizarCampoNumero = (indice: number) => {
    return (
      <InputNumber
        name={`numero-${indice + 1}`}
        defaultValue={sorteio?.numeros[indice]}
        onChange={(valor: string) => {
          let novoSorteio = sorteio;

          if (novoSorteio && valor) {
            let novoValor = toNumber(valor).toString()
            if (novoValor.length < 2) {
              novoValor = `0${novoValor}`
            }

            novoSorteio.numeros[indice] = novoValor;
            setSorteio(novoSorteio);
          }
        }}
      />
    );
  };

  return (
    <>
      <Button
        size={'sm'}
        variant={'primary'}
        onClick={() => setExibir(true)}>
        Definir sorteio
      </Button>

      <Modal show={exibir} size={'lg'} onHide={() => setExibir(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Definir sorteio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col sm={4} md={3}>
                <Input
                  label={'Concurso'}
                  name='concurso'
                  defaultValue={sorteio?.concurso}
                  onChange={(value: string) =>
                    setSorteio({
                      ...sorteio,
                      concurso: toNumber(value),
                    })
                  }
                />
              </Col>
            </Row>

            <Row>
              <Col sm={12}>
                <label>
                  <h6>Números</h6>
                </label>
              </Col>
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
  );
};

export default DefinirSorteio;
