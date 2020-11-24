import React from 'react'
import { Container, Row, Col } from '../../node_modules/react-bootstrap'
const Header = ({ InputEvent2 }) => {
  return (
    <>
      <Container className='line'>
        <Row className='mx-auto'>
          <Col md={5} className='b1'>
            <select onChange={InputEvent2} id='select'>
              <option selected value='com.myntra'>
                com.myntra
              </option>
              <option value='com.flipkart'>com.flipkart</option>
              <option value='com.amazon'>com.amazon</option>
              <option value='com.google'>com.google</option>
            </select>
          </Col>

          <Col lg={2} md={3} className='offset-lg-3  offset-md-1 offset-0'>
            <select>
              <option selected value='Newest First'>
                Newest First
              </option>
              <option value='Oldest First'>Oldest First</option>
            </select>
          </Col>

          <Col lg={2} md={3}>
            <select>
              <option selected value='English'>
                English
              </option>
              <option value='Hindi'>Hindi</option>
            </select>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Header
