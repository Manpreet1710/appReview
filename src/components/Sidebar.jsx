import React from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  DropdownButton,
  Dropdown,
} from '../../node_modules/react-bootstrap'
import Review from '../Review'
import Main from './Main'
import Pagination from './Pagination'
import StarRating from './StarRating'
import FilterByVersion from './FilterByVersion'
import FilterByCountry from './FilterByCountry'

const Sidebar = (props) => {
  const {
    currentPosts,
    postPerPage,
    paginate,
    totalPostslen,
    InputEvent,
    totalPosts,
    starRating,
    filterCountry,
  } = props
  return (
    <>
      <Container>
        <Row className='mx-auto'>
          <Col md={3} className='line2'>
            <nav>
              <Form>
                <FormControl
                  type='text'
                  className='form-control'
                  placeholder='Search'
                  onChange={InputEvent}
                />
              </Form>
              <br />
              <DropdownButton id='dropdown-edit' title='This Month'>
                <Dropdown.Item href='#/action-1'>All time</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>This week</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>This month</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>This year</Dropdown.Item>
              </DropdownButton>
              <h6 className='mt-3'>filtering by rating</h6>
              <StarRating reviewDt={totalPosts} starRating={starRating} />
              <h6 className='mt-3'>filtering by version</h6>
              <FilterByVersion reviewDt={totalPosts} />
              <h6 className='mt-3'>filtering by country</h6>
              <FilterByCountry reviewDt={totalPosts} />
            </nav>
          </Col>
          <Col md={9} className='line3'>
            <Main currentPosts={currentPosts} />
            <Pagination
              postPerPage={postPerPage}
              totalPosts={totalPostslen}
              paginate={paginate}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Sidebar
