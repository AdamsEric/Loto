import Inicio from './pages/Inicio'
import styled from 'styled-components'

const StyledBase = styled.div`
  padding: 15px;
  display: flex;
  align-items: start;
  justify-content: center;
  background-color: #058ce1;
  height: 100vh;
`

const App = () => {
  return (
    <StyledBase>
      <Inicio />
    </StyledBase>
  )
}

export default App
