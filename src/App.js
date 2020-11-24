import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Review from '../src/Review'
import { getDays } from './components/Function'

const App = () => {
  const [search, setSearchItem] = useState('')
  const [select, setSelect] = useState('')
  const [select2, setSelect2] = useState('')
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(10)

  // serach onchange event
  function InputEvent(event) {
    setSearchItem(event.target.value)
  }
  // select onCHangeEvent
  function InputEvent2(event) {
    setSelect(event.target.value)
  }
  // select2 onCHangeEvent
  function InputEvent3(event) {
    setSelect2(event.target.value)
  }
  useEffect(() => {
    let result5 = Review.filter((item) => item.reviewDate)
    setPosts(result5)
  }, [select2])

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

  useEffect(() => {
    let result1 = Review.filter((item) =>
      item.appID.toLowerCase().includes(select.toLowerCase())
    )
    setPosts(result1)
  }, [select])

  // fiveStartClickEvent
  function starRating() {
    let ratingFive = Review.filter((item) => item.rating === '5')
    setPosts(ratingFive)
  }
  function starRating4() {
    let ratingFour = Review.filter((item) => item.rating === '4')
    setPosts(ratingFour)
  }
  function starRating3() {
    let ratingThree = Review.filter((item) => item.rating === '3')
    setPosts(ratingThree)
  }
  function starRating2() {
    let ratingThree = Review.filter((item) => item.rating === '2')
    setPosts(ratingThree)
  }
  function starRating1() {
    let ratingOne = Review.filter((item) => item.rating === '1')
    setPosts(ratingOne)
  }

  // filterVersionClickerEvent
  function filterVersion() {
    let filterVersion = Review.filter((item) => item.version === 'v1.2.1')
    setPosts(filterVersion)
  }
  function filterVersion6() {
    let filterVersion6 = Review.filter((item) => item.version === 'V1.1')
    setPosts(filterVersion6)
  }
  function filterVersion5() {
    let filterVersion5 = Review.filter((item) => item.version === 'v1.0')
    setPosts(filterVersion5)
  }
  function filterVersion4() {
    let filterVersion4 = Review.filter((item) => item.version === 'V1')
    setPosts(filterVersion4)
  }
  function filterVersion3() {
    let filterVersion3 = Review.filter((item) => item.version === 'v0.1')
    setPosts(filterVersion3)
  }
  function filterVersion2() {
    let filterVersion2 = Review.filter((item) => item.version === '1.3')
    setPosts(filterVersion2)
  }
  function filterVersion1() {
    let filterVersion1 = Review.filter((item) => item.version === '1.2')
    setPosts(filterVersion1)
  }

  // filterCountryClickerEvent
  function filterCountry() {
    let filterCountry = Review.filter(
      (item) => item.countryName === 'Australia'
    )
    setPosts(filterCountry)
  }
  function filterCountry7() {
    let filterCountry7 = Review.filter((item) => item.countryName === 'France')
    setPosts(filterCountry7)
  }
  function filterCountry6() {
    let filterCountry6 = Review.filter((item) => item.countryName === 'US')
    setPosts(filterCountry6)
  }
  function filterCountry5() {
    let filterCountry5 = Review.filter((item) => item.countryName === 'Germany')
    setPosts(filterCountry5)
  }
  function filterCountry4() {
    let filterCountry4 = Review.filter((item) => item.countryName === 'Russia')
    setPosts(filterCountry4)
  }
  function filterCountry3() {
    let filterCountry3 = Review.filter((item) => item.countryName === 'Japan')
    setPosts(filterCountry3)
  }
  function filterCountry2() {
    let filterCountry2 = Review.filter((item) => item.countryName === 'UK')
    setPosts(filterCountry2)
  }
  function filterCountry1() {
    let filterCountry1 = Review.filter((item) => item.countryName === 'India')
    setPosts(filterCountry1)
  }
  return (
    <>
      <Header InputEvent2={InputEvent2} />
      <Sidebar
        InputEvent3={InputEvent3}
        currentPosts={currentPosts}
        postPerPage={postPerPage}
        paginate={paginate}
        totalPosts={posts}
        totalPostslen={posts.length}
        InputEvent={InputEvent}
        starRating={starRating}
        starRating4={starRating4}
        starRating3={starRating3}
        starRating2={starRating2}
        starRating1={starRating1}
        filterCountry={filterCountry}
        filterCountry7={filterCountry7}
        filterCountry6={filterCountry6}
        filterCountry5={filterCountry5}
        filterCountry4={filterCountry4}
        filterCountry3={filterCountry3}
        filterCountry2={filterCountry2}
        filterCountry1={filterCountry1}
        filterVersion={filterVersion}
        filterVersion6={filterVersion6}
        filterVersion5={filterVersion5}
        filterVersion4={filterVersion4}
        filterVersion3={filterVersion3}
        filterVersion2={filterVersion2}
        filterVersion1={filterVersion1}
      />
    </>
  )
}

export default App
