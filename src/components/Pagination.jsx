import React from 'react'
import { NavLink } from 'react-bootstrap'

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <>
      <nav>
        <ul className='pagination'>
          {pageNumbers.map((number) => (
            <li key={number} className='page-item'>
              <NavLink
                onClick={() => paginate(number)}
                href='#'
                className='page-link'
              >
                {number}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Pagination
