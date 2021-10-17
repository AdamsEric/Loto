import { Form, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { isNaN } from 'lodash'

interface InputNumberProps {
  label?: string,
  name: string,
  defaultValue?: string|number,
  onChange: Function
}

const StyledInputNumber = styled(Form.Control)`
  padding: .375rem 0rem;
  text-align: center;
`

const InputNumber = (props: InputNumberProps) => {
  const onKeyDown = (event: any) => {
    if (isNaN(event.keyCode) || [69, ].includes(event.keyCode)) {
      event.preventDefault()
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

        <Col sm={12}>
          <StyledInputNumber
            name={props.name}
            type='text'
            maxLength="2"
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