import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Review from '../src/Review'
import StarRating from './components/StarRating'

const App = () => {
  const [search, setSearchItem] = useState('')
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(10)

  // serach onchange event
  function InputEvent(event) {
    setSearchItem(event.target.value)
  }
  // fiveStartClickEvent
  function starRating() {
    let ratingFive = posts.filter((item) => item.rating === '5')
    setPosts(ratingFive)
  }

  function filterCountry() {
    let filterCountry = posts.filter((item) => item.rating === '5')
    setPosts(filterCountry)
  }

  useEffect(() => {
    let result = Review.filter(
      (item) =>
        item.appStoreName.toLowerCase().includes(search.toLowerCase()) ||
        item.reviewHeading.toLowerCase().includes(search.toLowerCase()) ||
        item.rating.toLowerCase().includes(search.toLowerCase()) ||
        item.reviewText.toLowerCase().includes(search.toLowerCase()) ||
        item.reviewUserName.toLowerCase().includes(search.toLowerCase()) ||
        item.countryName.toLowerCase().includes(search.toLowerCase()) ||
        item.version.toLowerCase().includes(search.toLowerCase())
    )
    setPosts(result)
  }, [search])

  //Get current Page
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <>
      <Header />
      <Sidebar
        currentPosts={currentPosts}
        postPerPage={postPerPage}
        paginate={paginate}
        totalPosts={posts}
        totalPostslen={posts.length}
        InputEvent={InputEvent}
        starRating={starRating}
        filterCountry={filterCountry}
      />
    </>
  )
}

export default App
