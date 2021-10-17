import { Card } from 'react-bootstrap'

import styled from 'styled-components'

const StyledCard = styled(Card)`
  margin: 12px 0px;
`

const StyledCardBody = styled(Card.Body)`
  padding: 0.5rem 1rem;
`

const CardArea = (props: any) => {
  return (
  <StyledCard>
    <StyledCardBody>
      {props.children}
    </StyledCardBody>
  </StyledCard>
  )
}

export default CardArea