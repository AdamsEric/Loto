import { useState } from 'react'
import { Row, Col, Alert } from 'react-bootstrap'
import { CardArea, NumberArea } from 'src/components/ui'

import { ISorteio, IAposta } from 'src/models'

import { DefinirSorteio, DefinirAposta, Conferencia } from './operacoes'

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
              <Row>
                { sorteio.numeros.filter((a: string) => a === '').length > 0 && (
                    <Col>
                      <Alert className={'my-2 py-2'} variant={'primary'}>
                        Utilize o botão "Definir sorteio" para preencher os números sorteados.
                      </Alert>
                    </Col>
                  )
                }
                { sorteio.numeros.filter((a: string) => a === '').length === 0 && (
                  <Col xs={12} md={{ span: 6, offset: 3 }} className='text-center'>
                    <Row>
                      {sorteio.numeros.map((num: string, index: number) => {
                        return (
                          <Col xs={2} md={1} className='mx-0 px-0'>
                            <NumberArea key={`${index}-${num}`} number={num}/>
                            {/* { index % 5 === 4 ? <br /> : null } */}
                          </Col>
                        )
                      })}
                    </Row>
                  </Col>
                )}
              </Row>
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
              <Row>
                { aposta.numeros.filter((a: string) => a === '').length > 0 && (
                    <Col>
                      <Alert className={'my-2 py-2'} variant={'primary'}>
                        Utilize o botão "Definir aposta" para preencher os números apostados.
                      </Alert>
                    </Col>
                  )
                }
                { aposta.numeros.filter((a: string) => a === '').length === 0 && (
                  <Col xs={12} md={{ span: 6, offset: 3 }} className='text-center'>
                    <Row>
                      {aposta.numeros.map((num: string, index: number) => {
                        return (
                          <Col xs={2} md={1} className='mx-0 px-0'>
                            <NumberArea key={`${index}-${num}`} number={num}/>
                          </Col>
                        )
                      })}
                    </Row>
                  </Col>
                )}
              </Row>
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
            <Conferencia
              key={chaveSorteio + chaveAposta}
              numerosSorteio={sorteio.numeros}
              numerosAposta={aposta.numeros}
            />
          </Col>
        </Row>
      </CardArea>
    </div>
  )
}

export default Lotomania