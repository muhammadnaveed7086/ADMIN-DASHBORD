import React from 'react'
import './RightSide.css'
import Update from '../Update/Update'
import Customer from '../Customer/Customer'
function RightSide() {
  return (
    <div className='RightSide'>
       <div>
        <h3>Updates</h3>
        <Update/>
        <div><h3>Customer Review</h3></div>
        <Customer/>
       </div>
    </div>
  )
}

export default RightSide
