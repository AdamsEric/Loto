import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { CardArea, NumberArea } from 'src/components/ui'

import { ISorteio, IAposta } from 'src/models'

import { DefinirSorteio } from './operacoes'

const Lotomania = () => {
  const [sorteio, setSorteio] = useState<ISorteio>({
    concurso: undefined,
    numeros: [
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', ''
    ]
  })
  const [chaveSorteio, setChaveSorteio] = useState<number>(1000)
  const [aposta, setAposta] = useState<IAposta>({})
  const [chaveAposta, setChaveAposta] = useState<number>(2000)

  return (
    <div>
      <CardArea>
        <Row>
          <Col sm={{ span: 6, offset: 3 }} className='text-center'>
            <h5>Dados do sorteio</h5>
          </Col>
          <Col sm={3} className='d-flex justify-content-end'>
            <DefinirSorteio
              sorteio={sorteio}
              aoConfirmar={(s: ISorteio) => {
                setSorteio(s)
                setChaveSorteio(chaveSorteio + 1)
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12} className='mb-2'>
            Concurso: {sorteio.concurso || 'Não definido'}
          </Col>
          <Col sm={12} className='mb-2' key={chaveSorteio}>
            <div>Números sorteados:</div>
            <div className='text-center'>
              {
                !sorteio.concurso
                ? 'Não definidos'
                : sorteio.numeros.map((num: string, index: number) => (
                  <NumberArea key={`${index}-${num}`} number={num}/>)
                )
              }
            </div>
          </Col>
        </Row>
      </CardArea>

      <CardArea>
        <Col sm={12} className='text-center'>
          <h5>Dados da aposta</h5>
        </Col>
        <Col sm={12} className='mb-2'>
          Data/hora:
        </Col>
        <Col sm={12} className='mb-2'>
          Números:
        </Col>
      </CardArea>

      <CardArea>
        <Col sm={12} className='text-center'>
          <h5>Conferência</h5>
        </Col>
        <Col sm={12} className='mb-2'>
          Números acertados:
        </Col>
      </CardArea>
    </div>
  )
}

export default Lotomania