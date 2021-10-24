import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { CardArea, NumberArea } from 'src/components/ui'

import { ISorteio, IAposta } from 'src/models'

import { DefinirSorteio, DefinirAposta } from './operacoes'

const Lotomania = () => {
  const [sorteio, setSorteio] = useState<ISorteio>({
    concurso: undefined,
    numeros: [
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', ''
    ]
  })
  const [chaveSorteio, setChaveSorteio] = useState<number>(1000)
  const [aposta, setAposta] = useState<IAposta>({
    numeros: [
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', ''
    ]
  })
  const [chaveAposta, setChaveAposta] = useState<number>(2000)

  return (
    <div>
      <CardArea>
        <Row>
          <Col sm={{ span: 6, offset: 3 }} className='text-center'>
            <h5>Sorteio</h5>
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
                sorteio.numeros.filter((a: string) => a === '').length > 0
                ? 'Não definidos'
                : sorteio.numeros.map((num: string, index: number) => {
                  return (
                    <>
                      <NumberArea key={`${index}-${num}`} number={num}/>
                      { index % 10 === 9 ? <br /> : null }
                    </>
                  )
                })
              }
            </div>
          </Col>
        </Row>
      </CardArea>

      <CardArea>
        <Row>
          <Col sm={{ span: 6, offset: 3 }} className='text-center'>
            <h5>Aposta</h5>
          </Col>
          <Col sm={3} className='d-flex justify-content-end'>
            <DefinirAposta
              aposta={aposta}
              aoConfirmar={(a: ISorteio) => {
                setAposta(a)
                setChaveAposta(chaveAposta + 1)
              }}
            />
          </Col>
          <Col sm={12} className='mb-2' key={chaveAposta}>
            <div>Números apostados:</div>
            <div className='text-center'>
              {
                aposta.numeros.filter((a: string) => a === '').length > 0
                ? 'Não definidos'
                : aposta.numeros.map((num: string, index: number) => {
                  return (
                    <>
                      <NumberArea key={`${index}-${num}`} number={num}/>
                      { index % 10 === 9 ? <br /> : null }
                    </>
                  )
                })
              }
            </div>
          </Col>
        </Row>
      </CardArea>

      <CardArea>
        <Row>
          <Col sm={12} className='text-center'>
            <h5>Conferência</h5>
          </Col>
          <Col sm={12} className='mb-2'>
            Números acertados:
          </Col>
        </Row>
      </CardArea>
    </div>
  )
}

export default Lotomania