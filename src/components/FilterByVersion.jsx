import React from 'react'

const FilterByVersion = (props) => {
  const {
    reviewDt,
    filterVersion,
    filterVersion6,
    filterVersion5,
    filterVersion4,
    filterVersion3,
    filterVersion2,
    filterVersion1,
  } = props
  const V1 = reviewDt.filter((item) => item.version === 'v1.2.1').length
  const V2 = reviewDt.filter((item) => item.version === 'V1.1').length
  const V3 = reviewDt.filter((item) => item.version === 'v1.0').length
  const V4 = reviewDt.filter((item) => item.version === 'V1').length
  const V5 = reviewDt.filter((item) => item.version === 'v0.1').length
  const V6 = reviewDt.filter((item) => item.version === '1.3').length
  const V7 = reviewDt.filter((item) => item.version === '1.2').length
  return (
    <>
      <div className='row'>
        <div className='col-md-10 col-6' onClick={filterVersion}>
          <span className='list-unstyled'>v1.2.1</span>
        </div>
        <div className='col-md-2  col-6 text-right'>
          <span>{V1}</span>
        </div>
        <div className='col-md-10 col-6' onClick={filterVersion6}>
          <span className='list-unstyled'>V1.1</span>
        </div>
        <div className='col-md-2  col-6 text-right'>
          <span>{V2}</span>
        </div>
        <div className='col-md-10 col-6' onClick={filterVersion5}>
          <span className='list-unstyled'>v1.0</span>
        </div>
        <div className='col-md-2  col-6 text-right'>
          <span>{V3}</span>
        </div>
        <div className='col-md-10 col-6' onClick={filterVersion4}>
          <span>V1</span>
        </div>
        <div className='col-md-2  col-6 text-right'>
          <span>{V4}</span>
        </div>
        <div className='col-md-10 col-6' onClick={filterVersion3}>
          <span>v0.1</span>
        </div>
        <div className='col-md-2  col-6 text-right'>
          <span>{V5}</span>
        </div>
        <div className='col-md-10 col-6' onClick={filterVersion2}>
          <span>1.3</span>
        </div>
        <div className='col-md-2  col-6 text-right'>
          <span>{V6}</span>
        </div>
        <div className='col-md-10 col-6' onClick={filterVersion1}>
          <span>1.2</span>
        </div>
        <div className='col-md-2  col-6 text-right'>
          <span>{V7}</span>
        </div>
      </div>
    </>
  )
}

export default FilterByVersion
