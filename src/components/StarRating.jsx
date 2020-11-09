import React from 'react'

const StarRating = ({ reviewDt }) => {
  // console.log(reviewDt)

  const ratingFive = reviewDt.filter((item) => item.rating === '5').length
  const ratingFour = reviewDt.filter((item) => item.rating === '4').length
  const ratingThree = reviewDt.filter((item) => item.rating === '3').length
  const ratingTwo = reviewDt.filter((item) => item.rating === '2').length
  const ratingOne = reviewDt.filter((item) => item.rating === '1').length
  return (
    <>
      <div className='row'>
        <div className='col-md-10 col-6'>
          <span>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
          </span>
        </div>
        <div className='col-md-2 col-6 text-right'>
          <span>{ratingFive}</span>
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
          <span>{ratingFour}</span>
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
          <span>{ratingThree}</span>
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
          <span>{ratingTwo}</span>
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
          <span>{ratingOne}</span>
        </div>
      </div>
    </>
  )
}

export default StarRating
