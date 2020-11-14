import React, { useEffect, useState } from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  DropdownButton,
  Dropdown,
} from '../../node_modules/react-bootstrap'
import Main from './Main'
import StarRating from './StarRating'
import FilterByVersion from './FilterByVersion'
import FilterByCountry from './FilterByCountry'
import Review from '../Review'
import Pagination from './Pagination'
const Sidebar = () => {
  const [search, setSearchItem] = useState('')
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(10)

  function InputEvent(event) {
    setSearchItem(event.target.value)
  }

  useEffect(() => {
    let result = Review.filter(
      (item) =>
        item.appStoreName.toLowerCase().includes(search.toLowerCase()) ||
        item.reviewHeading.toLowerCase().includes(search.toLowerCase()) ||
        item.rating.toLowerCase().includes(search.toLowerCase()) ||
        item.reviewText.toLowerCase().includes(search.toLowerCase()) ||
        item.reviewUserName.toLowerCase().includes(search.toLowerCase()) ||
        item.countryName.toLowerCase().includes(search.toLowerCase()) ||
        item.version.toLowerCase().includes(search.toLowerCase())
    )
    setPosts(result)
  }, [search])

  //Get current Page
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

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
                  value={search}
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
              <StarRating reviewDt={Review} />
              <h6 className='mt-3'>filtering by version</h6>
              <FilterByVersion reviewDt={Review} />
              <h6 className='mt-3'>filtering by country</h6>
              <FilterByCountry reviewDt={Review} />
            </nav>
          </Col>
          <Col md={9} className='line3'>
            <Main currentPosts={currentPosts} />
            <Pagination
              postPerPage={postPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Sidebar
