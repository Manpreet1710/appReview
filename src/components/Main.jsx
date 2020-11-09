import React, { useState } from 'react'
import Card from './Card'

const Main = ({ currentPosts }) => {
  console.log(currentPosts)
  return (
    <>
      <div className='viewingReviews'>
        <h6 className='mb-3'>Viewing 1-10 of 157 Reviews</h6>
        <div className='buttuns2'>
          <button className='btn1'>
            <i className='fas fa-bell'></i>
            Create Alert<i className='fas fa-sort-down'></i>
          </button>
          <button className='btn1'>
            <i className='fas fa-wifi'></i>
            <i className='fas fa-code'></i>
            <i className='fas fa-download'></i>
          </button>
        </div>
      </div>

      {currentPosts.map((post) => {
        return <Card review={post} />
      })}
    </>
  )
}

export default Main
