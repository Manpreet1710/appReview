import React from 'react'
import Card from './Card'

const Main = ({ currentPosts, reviewDt }) => {
  const totalCurrentPostslen = currentPosts.length
  const totalReviewDt = reviewDt.length
  return (
    <>
      <div className='viewingReviews'>
        <h6 className='mb-3'>
          Viewing 1-{totalCurrentPostslen} of {totalReviewDt} Reviews
        </h6>
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

      {currentPosts.map((post, ind) => {
        return <Card key={ind} review={post} />
      })}
    </>
  )
}

export default Main
