import React from 'react'
import Review from '../Review'

const FilterByCountry = (props) => {
  const {
    filterCountry,
    filterCountry7,
    filterCountry6,
    filterCountry5,
    filterCountry4,
    filterCountry3,
    filterCountry2,
    filterCountry1,
  } = props
  const C1 = Review.filter((item) => item.countryName === 'Australia').length
  const C2 = Review.filter((item) => item.countryName === 'France').length
  const C3 = Review.filter((item) => item.countryName === 'US').length
  const C4 = Review.filter((item) => item.countryName === 'Germany').length
  const C5 = Review.filter((item) => item.countryName === 'Russia').length
  const C6 = Review.filter((item) => item.countryName === 'Japan').length
  const C7 = Review.filter((item) => item.countryName === 'UK').length
  const C8 = Review.filter((item) => item.countryName === 'India').length
  return (
    <>
      <div className='row'>
        <div className='col-md-10 col-6' onClick={filterCountry}>
          <span>Australia</span>
        </div>
        <div className='col-md-2  col-6 text-right'>
          <span>{C1}</span>
        </div>
        <div className='col-md-10 col-6' onClick={filterCountry7}>
          <span>France</span>
        </div>
        <div className='col-md-2 col-6 text-right'>
          <span>{C2}</span>
        </div>
        <div className='col-md-10 col-6' onClick={filterCountry6}>
          <span>US</span>
        </div>
        <div className='col-md-2 col-6 text-right'>
          <span>{C3}</span>
        </div>
        <div className='col-md-10 col-6' onClick={filterCountry5}>
          <span>Germany</span>
        </div>
        <div className='col-md-2  col-6 text-right'>
          <span>{C4}</span>
        </div>
        <div className='col-md-10 col-6' onClick={filterCountry4}>
          <span>Russia</span>
        </div>
        <div className='col-md-2  col-6 text-right'>
          <span>{C5}</span>
        </div>
        <div className='col-md-10 col-6' onClick={filterCountry3}>
          <span>Japan</span>
        </div>
        <div className='col-md-2  col-6 text-right'>
          <span>{C6}</span>
        </div>
        <div className='col-md-10 col-6' onClick={filterCountry2}>
          <span>UK</span>
        </div>
        <div className='col-md-2  col-6 text-right'>
          <span>{C7}</span>
        </div>
        <div className='col-md-10 col-6' onClick={filterCountry1}>
          <span>India</span>
        </div>
        <div className='col-md-2  col-6 text-right'>
          <span>{C8}</span>
        </div>
      </div>
    </>
  )
}

export default FilterByCountry
