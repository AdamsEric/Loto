import { Form, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

interface InputProps {
  label?: string,
  name: string,
  defaultValue?: string|number,
  onChange: Function,
  maxLength?: number
}

const StyledInput = styled(Form.Control)`
`

const Input = (props: InputProps) => {
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
          <StyledInput
            name={props.name}
            type='text'
            defaultValue={props.defaultValue || ''}
            maxLength={props.maxLength}
            onChange={(event: any) => props.onChange(event.target.value)}
          />
        </Col>
      </Row>
    </Form.Group>
  )
}

export default Input