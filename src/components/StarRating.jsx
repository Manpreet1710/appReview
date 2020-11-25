import React from 'react'
import Review from '../Review'
const StarRating = (props) => {
  const {
    starRating,
    starRating4,
    starRating3,
    starRating2,
    starRating1,
  } = props

  let ratingFive = Review.filter((item) => item.rating === '5')
  let ratingFour = Review.filter((item) => item.rating === '4')
  let ratingThree = Review.filter((item) => item.rating === '3')
  let ratingTwo = Review.filter((item) => item.rating === '2')
  let ratingOne = Review.filter((item) => item.rating === '1')
  return (
    <>
      <div className='row'>
        <div className='col-md-10 col-6' onClick={starRating}>
          <span>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
          </span>
        </div>
        <div className='col-md-2 col-6 text-right'>
          <span>{ratingFive.length}</span>
        </div>

        <div className='col-md-10  col-6' onClick={starRating4}>
          <span>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='far fa-star'></i>
          </span>
        </div>
        <div className='col-md-2  col-6 text-right'>
          <span>{ratingFour.length}</span>
        </div>
        <div className='col-md-10  col-6' onClick={starRating3}>
          <span>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='far fa-star'></i>
            <i className='far fa-star'></i>
          </span>
        </div>
        <div className='col-md-2  col-6 text-right'>
          <span>{ratingThree.length}</span>
        </div>
        <div className='col-md-10  col-6' onClick={starRating2}>
          <span>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='far fa-star'></i>
            <i className='far fa-star'></i>
            <i className='far fa-star'></i>
          </span>
        </div>
        <div className='col-md-2  col-6 text-right'>
          <span>{ratingTwo.length}</span>
        </div>
        <div className='col-md-10  col-6' onClick={starRating1}>
          <span>
            <i className='fa fa-star'></i>
            <i className='far fa-star'></i>
            <i className='far fa-star'></i>
            <i className='far fa-star'></i>
            <i className='far fa-star'></i>
          </span>
        </div>
        <div className='col-md-2  col-6 text-right'>
          <span>{ratingOne.length}</span>
        </div>
      </div>
    </>
  )
}

export default StarRating
