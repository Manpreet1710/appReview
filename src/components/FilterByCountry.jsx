import React from 'react'

const FilterByCountry = ({ reviewDt }) => {
  const C1 = reviewDt.filter((item) => item.countryName === 'US').length
  const C2 = reviewDt.filter((item) => item.countryName === 'India').length
  const C3 = reviewDt.filter((item) => item.countryName === 'Germany').length
  const C4 = reviewDt.filter((item) => item.countryName === 'Japan').length
  return (
    <>
      <div className='row'>
        <div className='col-md-10 col-6'>
          <span>United States</span>
        </div>
        <div className='col-md-2  col-6 text-right'>
          <span>{C1}</span>
        </div>
        <div className='col-md-10 col-6'>
          <span>India</span>
        </div>
        <div className='col-md-2 col-6 text-right'>
          <span>{C2}</span>
        </div>
        <div className='col-md-10 col-6'>
          <span>Germany</span>
        </div>
        <div className='col-md-2 col-6 text-right'>
          <span>{C3}</span>
        </div>
        <div className='col-md-10 col-6'>
          <span>Japan</span>
        </div>
        <div className='col-md-2  col-6 text-right'>
          <span>{C4}</span>
        </div>
      </div>
    </>
  )
}

export default FilterByCountry
