import { Row, Col, Alert } from 'react-bootstrap'
import { NumberArea } from 'src/components/ui'
import { intersection } from 'lodash'

interface IConferenciaProps {
  numerosSorteio: Array<string>
  numerosAposta: Array<string>,
}

const Conferencia = (props: IConferenciaProps) => {
  const numerosValidos = () => {
    return props.numerosSorteio.filter((a: string) => a === '').length === 0 &&
      props.numerosAposta.filter((a: string) => a === '').length === 0
  }

  const quantidadeAcertos = () => {
    return intersection(props.numerosSorteio, props.numerosAposta).length
  }

  const acerto = (numero: string) => {
    return props.numerosSorteio.includes(numero)
  }

  return (
    <Row className='text-center'>
      { !numerosValidos() ? (
        <Alert className={'my-2 py-2'} variant={'primary'}>
          Após definir os números do sorteio e da aposta, os resultados serão apresentados.
        </Alert>
      ) : (
        <>
          <Col sm={12} lg={6}>
            <div className='mb-3'>Números</div>
            { props.numerosAposta.map((num: string, index: number) => {
                return (
                  <>
                    <NumberArea invalid={!acerto(num)} key={`${index}-${num}`} number={num}/>
                    { index % 10 === 9 ? <br /> : null }
                  </>
                )})
            }
          </Col>
          <Col>
            <div className='mb-3'>Quantidade de acertos</div>
            <div style={{ fontSize: 42, lineHeight: '1.5rem' }}>{ quantidadeAcertos() }</div>
          </Col>
        </>
      ) }
    </Row>
  )
}

export default Conferencia