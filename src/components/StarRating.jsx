import React, { useState } from 'react'

const StarRating = ({ reviewDt, fiveRating }) => {
  const [ratingFiveTotal, setRatingFiveTotal] = useState([])

  const ratingFive = reviewDt.filter((item) => item.rating === '5')
  function starRating() {
    setRatingFiveTotal(ratingFive)
    console.log(ratingFiveTotal)
  }
  const ratingFour = reviewDt.filter((item) => item.rating === '4')
  const ratingThree = reviewDt.filter((item) => item.rating === '3')
  const ratingTwo = reviewDt.filter((item) => item.rating === '2')
  const ratingOne = reviewDt.filter((item) => item.rating === '1')
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

        <div className='col-md-10  col-6'>
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
        <div className='col-md-10  col-6'>
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
        <div className='col-md-10  col-6'>
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
        <div className='col-md-10  col-6'>
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
