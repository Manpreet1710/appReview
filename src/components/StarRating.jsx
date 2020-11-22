import React, { useState } from 'react'

const StarRating = (props) => {
  const { reviewDt, starRating } = props

  let ratingFive = reviewDt.filter((item) => item.rating === '5')
  let ratingFour = reviewDt.filter((item) => item.rating === '4')
  let ratingThree = reviewDt.filter((item) => item.rating === '3')
  let ratingTwo = reviewDt.filter((item) => item.rating === '2')
  let ratingOne = reviewDt.filter((item) => item.rating === '1')
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

        <div className='col-md-10  col-6' onClick={starRating}>
          <span>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='far fa-star'></i>
          </span>
        </div>
        <div className='col-md-2  col-6 text-right' onClick={starRating}>
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
        <div className='col-md-2  col-6 text-right' onClick={starRating}>
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
        <div className='col-md-2  col-6 text-right' onClick={starRating}>
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
