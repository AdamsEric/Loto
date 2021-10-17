import { Card, Tabs, Tab } from 'react-bootstrap'
import styled from 'styled-components'

import Lotomania from '../Lotomania'

const StyledBase = styled(Card)`
  width: 80%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

const StyledTitle = styled.h4`
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`

const Inicio = () => {
  return (
    <StyledBase>
      <Card.Body>
        <StyledTitle>
          Conferir apostas - Loterias Caixa
        </StyledTitle>
        <Tabs defaultActiveKey='lotomania'>
          <Tab eventKey="lotomania" title="Lotomania">
            <Lotomania />
          </Tab>
        </Tabs>
      </Card.Body>
    </StyledBase>
  )
}

export default Inicio
