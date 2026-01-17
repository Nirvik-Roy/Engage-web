import React from 'react'
import './Pagination.css'
const Pagination = () => {
  return (
    <>
      <div className='pagination_wrapper'>
        <i class="fa-solid fa-angles-left"></i>
        <i class="fa-solid fa-angle-left"></i>
        <p style={{
          border: '1px solid #c6c6c6ff ',
          background: 'rgba(0, 0, 128, 1)',
          color:'#fff'
        }}>1</p>
        <p>2</p>
        <p>3</p>
        <p>...</p>
        <p>10</p>
               <i class="fa-solid fa-angle-right"></i>
        <i class="fa-solid fa-angles-right"></i>
      </div>
    </>
  )
}

export default Pagination
