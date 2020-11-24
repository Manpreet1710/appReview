import React from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
} from '../../node_modules/react-bootstrap'
import Main from './Main'
import Pagination from './Pagination'
import StarRating from './StarRating'
import FilterByVersion from './FilterByVersion'
import FilterByCountry from './FilterByCountry'

const Sidebar = (props) => {
  const {
    InputEvent3,
    currentPosts,
    postPerPage,
    paginate,
    totalPostslen,
    InputEvent,
    totalPosts,
    starRating,
    starRating4,
    starRating3,
    starRating2,
    starRating1,
    filterCountry,
    filterCountry7,
    filterCountry6,
    filterCountry5,
    filterCountry4,
    filterCountry3,
    filterCountry2,
    filterCountry1,
    filterVersion,
    filterVersion6,
    filterVersion5,
    filterVersion4,
    filterVersion3,
    filterVersion2,
    filterVersion1,
  } = props
  return (
    <>
      <Container>
        <Row className='mx-auto'>
          <Col md={4} className='line2'>
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
              <select onChange={InputEvent3}>
                <option selected value='All time'>
                  All time
                </option>
                <option value='This week'>This week</option>
                <option value='This month'>This month</option>
                <option value='This year'>This year</option>
              </select>

              <h6 className='mt-3'>filtering by rating</h6>
              <StarRating
                reviewDt={totalPosts}
                starRating={starRating}
                starRating4={starRating4}
                starRating3={starRating3}
                starRating2={starRating2}
                starRating1={starRating1}
              />
              <h6 className='mt-3'>filtering by version</h6>
              <FilterByVersion
                reviewDt={totalPosts}
                filterVersion={filterVersion}
                filterVersion6={filterVersion6}
                filterVersion5={filterVersion5}
                filterVersion4={filterVersion4}
                filterVersion3={filterVersion3}
                filterVersion2={filterVersion2}
                filterVersion1={filterVersion1}
              />
              <h6 className='mt-3'>filtering by country</h6>
              <FilterByCountry
                reviewDt={totalPosts}
                filterCountry={filterCountry}
                filterCountry7={filterCountry7}
                filterCountry6={filterCountry6}
                filterCountry5={filterCountry5}
                filterCountry4={filterCountry4}
                filterCountry3={filterCountry3}
                filterCountry2={filterCountry2}
                filterCountry1={filterCountry1}
              />
            </nav>
          </Col>
          <Col md={8} className='line3'>
            <Main currentPosts={currentPosts} reviewDt={totalPosts} />
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
