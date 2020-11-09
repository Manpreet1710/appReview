import React from 'react'
import { Container, Row, Col } from '../../node_modules/react-bootstrap'
const Header = () => {
  return (
    <>
      <Container className='mt-5 line'>
        <Row className='mx-auto'>
          <Col md={5}>
            <span>select products</span>
            <button className='btn text-left b1'>
              My App + 2<i className='fas fa-angle-down icon'></i>
            </button>
          </Col>

          <Col md={2} className='offset-md-3 offset-0'>
            <span>sorting</span>
            <button className='btn text-left'>
              Newest First
              <i className='fas fa-angle-down icon  break-point-icon'></i>
            </button>
          </Col>

          <Col md={2}>
            <span>translation</span>
            <button className='btn text-left bt'>
              English<i className='fas fa-angle-down icon'></i>
            </button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Header
