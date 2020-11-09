import React, { useState, useEffect } from 'react'
import { Form, FormControl } from '../../node_modules/react-bootstrap'
const SerachFilter = ({ reviewDt }) => {
  const [searchItem, setSearchItem] = useState('')
  const [searchTerm, setSearchResults] = useState('')

  function InputEvent(event) {
    setSearchItem(event.target.value)
  }

  // useEffect(() => {
  //   const result = review.filter((item) =>
  //     item.appStoreName.includes(searchTerm)
  //   )
  //   setSearchResults(result)
  // }, [searchTerm])

  return (
    <>
      <Form>
        <FormControl
          type='text'
          placeholder='Search'
          value={searchItem}
          onChange={InputEvent}
        />
      </Form>
    </>
  )
}

export default SerachFilter
