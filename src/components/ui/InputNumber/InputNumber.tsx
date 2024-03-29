import { Form, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { isNaN } from 'lodash'

interface InputNumberProps {
  id?: string,
  previousId?: string,
  label?: string,
  name: string,
  defaultValue?: string|number,
  onChange: Function
}

const StyledInputNumber = styled(Form.Control)`
  padding: .375rem 0rem;
  text-align: center;
`

const numberKeyCodes = [
  48, 96,   // 0
  49, 97,   // 1
  50, 98,   // 2
  51, 99,   // 3
  52, 100,  // 4
  53, 101,  // 5
  54, 102,  // 6
  55, 103,  // 7
  56, 104,  // 8
  57, 105   // 9
]

const actionKeyCodes = [
  8,  // Backspace
  9,  // Tab
  16, // Shift
  37, // ArrowLeft
  38, // ArrowUp
  39, // ArrowRight
  40, // ArrowDown
  46, // Delete
]

const InputNumber = (props: InputNumberProps) => {
  const onKeyDown = (event: any) => {
    if (isNaN(event.keyCode) || ![
      ...numberKeyCodes,
      ...actionKeyCodes
    ].includes(event.keyCode)) {
      event.preventDefault()
    }

    if (!event.target.value && event.keyCode === 8 && props.previousId) {
      const campo = document.getElementById(props.previousId)

      if (campo) {
        campo.focus()
      }
    }

    return true
  }

  return (
    <Form.Group controlId={props.name}>
      <Row className='mb-2'>
        {props.label && (
          <Col sm={12}>
            <label>
              <h6>{props.label}</h6>
            </label>
          </Col>
        )}

        <Col sm={12} className='px-1'>
          <StyledInputNumber
            id={props.id}
            name={props.name}
            type='number'
            maxLength="2"
            min={0}
            max={99}
            onInput={(event: any) => {
              if (event.target.value > 99) {
                event.target.value = event.target.value.slice(0, 2)
              }
            }}
            defaultValue={props.defaultValue || ''}
            onKeyDown={(event: any) => onKeyDown(event)}
            onChange={(event: any) => props.onChange(event.target.value)}
          />
        </Col>
      </Row>
    </Form.Group>
  )
}

export default InputNumber