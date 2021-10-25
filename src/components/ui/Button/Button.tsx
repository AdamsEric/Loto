import { Button as ButtonRB } from 'react-bootstrap'

import styled, { css } from 'styled-components'

const StyledButton = styled(ButtonRB)`
  ${props => props.variant === 'primary' && css`
    background-color: #058ce1;
    border-color: #058ce1;

    &:hover, &:active, &:focus {
      background-color: #057ce1;
      border-color: #057ce1;
    }
  `}
`

const Button = (props: any) => {
  return (
  <StyledButton
    variant={props.variant || 'primary'}
    size={props.size || 'md'}
    onClick={props.onClick}>
    {props.children}
  </StyledButton>
  )
}

export default Button