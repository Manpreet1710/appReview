import React from 'react'
import {
  Container,
  Jumbotron,
  NavLink,
} from '../../node_modules/react-bootstrap'
import Rating from './Rating'

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
  const daysDifference = (date) =>
    parseInt(Math.round((new Date() - new Date(date)) / (1000 * 60 * 60 * 24)))

  const getDays = (date) => {
    let days = daysDifference(date)
    let dayCount
    if (days === 0) dayCount = 'few hours ago'
    else if (days === 1) {
      dayCount = '1 day ago'
    } else if (days < 7) dayCount = `${days} days ago`
    else if (days < 14) dayCount = `1 week ago`
    else if (days < 30) dayCount = `${Math.floor(days / 7)} weeks ago`
    else if (days < 60) dayCount = `1 month ago`
    else if (days < 365) dayCount = `${Math.floor(days / 30)} months ago`
    else if (days < 730) dayCount = `1 year ago`
    else if (days >= 730) dayCount = `${Math.floor(days / 365)} years ago`
    return dayCount
  }

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
