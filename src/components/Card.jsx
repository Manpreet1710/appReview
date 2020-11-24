import React from 'react'
import {
  Container,
  Jumbotron,
  NavLink,
} from '../../node_modules/react-bootstrap'
import Rating from './Rating'
import { getDays } from './Function'

const Card = ({ review }) => {
  const {
    appStoreName,
    reviewHeading,
    rating,
    reviewText,
    reviewUserName,
    reviewDate,
    version,
    countryName,
  } = review

  // console.log(getDays(reviewDate))
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <div className='flex'>
            <div className='bg-danger'></div>
            <div className='appStore'>{appStoreName}</div>
            <strong>&nbsp;&nbsp;{reviewHeading}</strong>
            <Rating rating={rating} />
          </div>
          <p className='mt-2'>{reviewText}</p>
          <div className='flex2'>
            <div className='reviews'>
              <NavLink>By {reviewUserName}</NavLink>
              <NavLink className='name'>{getDays(reviewDate)}</NavLink>
              <NavLink className='name'>{version}</NavLink>
              <NavLink className='name'>{countryName}</NavLink>
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
