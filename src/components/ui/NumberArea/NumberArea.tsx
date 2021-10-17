import styled from 'styled-components'

const StyledNumberArea = styled.span`
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
`

interface INumberArea {
  number: string
}

const NumberArea = (props: INumberArea) => {
  return (
    <StyledNumberArea>
      {props.number}
    </StyledNumberArea>
  )
}

export default NumberArea