import React from 'react'

const Rating = ({ rating }) => {
  return (
    <>
      <span>
        <i className={rating >= 1 ? 'fa fa-star' : 'far fa-star'}></i>
      </span>
      <span>
        <i className={rating >= 2 ? 'fas fa-star' : 'far fa-star'}></i>
      </span>
      <span>
        <i className={rating >= 3 ? 'fas fa-star' : 'far fa-star'}></i>
      </span>
      <span>
        <i className={rating >= 4 ? 'fas fa-star' : 'far fa-star'}></i>
      </span>
      <span>
        <i className={rating >= 5 ? 'fas fa-star' : 'far fa-star'}></i>
      </span>
    </>
  )
}

export default Rating
