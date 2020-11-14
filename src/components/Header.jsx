import React from 'react'
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
} from '../../node_modules/react-bootstrap'
const Header = () => {
  return (
    <>
      <Container className='mt-5 line'>
        <Row className='mx-auto'>
          <Col md={5}>
            <span>select products</span>
            <DropdownButton
              id='dropdown-basic-button'
              title='com.amazon'
              className='b1'
            >
              <Dropdown.Item href='#/action-1'>com.amazon</Dropdown.Item>
              <Dropdown.Item href='#/action-1'>com.flipkart</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>com.google</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>com.myntra</Dropdown.Item>
            </DropdownButton>
          </Col>

          <Col md={2} className='offset-md-3 offset-0'>
            <span>sorting</span>
            <DropdownButton id='dropdown-edit' title='Newest First'>
              <Dropdown.Item href='#/action-1'>Newest First</Dropdown.Item>
              <Dropdown.Item href='#/action-1'>Oldest First</Dropdown.Item>
            </DropdownButton>
          </Col>

          <Col md={2}>
            <span>translation</span>
            <DropdownButton id='dropdown-edit' title='English'>
              <Dropdown.Item href='#/action-1'>Hindi</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Header
