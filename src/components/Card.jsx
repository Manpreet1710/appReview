import React from 'react'
import {
  Container,
  Jumbotron,
  NavLink,
} from '../../node_modules/react-bootstrap'
import Rating from './Rating'

const Card = ({ review }) => {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <div className='flex'>
            <div className='bg-danger'></div>
            <div className='appStore'>{review.appStoreName}</div>
            <strong>&nbsp;&nbsp;{review.reviewHeading}</strong>
            <Rating rating={review.rating} />
          </div>
          <p className='mt-2'>{review.reviewText}</p>
          <div className='flex2'>
            <div className='reviews'>
              <NavLink>By {review.reviewUserName}</NavLink>
              <NavLink className='name'>{review.version}</NavLink>
              <NavLink className='name'>{review.countryName}</NavLink>
            </div>
            <div className='buttons'>
              <button>reply</button>
              <button>
                share
                <i className='fas fa-angle-down text-dark'></i>
              </button>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </>
  )
}

export default Card
