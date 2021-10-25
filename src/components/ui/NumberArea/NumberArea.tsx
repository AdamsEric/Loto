import styled, { css } from 'styled-components'

interface INumberArea {
  number: string,
  invalid?: boolean
}

const StyledNumberArea = styled.span <INumberArea> `
  margin: 0 8px 0 0;
  letter-spacing: 2px;
  padding: 8px;
  line-height: 44px;
  font-size: 14px;
  border: 1px solid #f99500;
  background-color: #f99500;
  color: #ffffff;
  font-weight: bold;
  border-radius: 50%;

  ${props => props.invalid && css`
    background-color: #a2a2a2;
    border: 1px solid #a2a2a2;
  `}
`

const NumberArea = (props: INumberArea) => {
  return (
    <StyledNumberArea {...props}>
      {props.number}
    </StyledNumberArea>
  )
}

NumberArea.defaultProps = {
  invalid: false
}

export default NumberArea