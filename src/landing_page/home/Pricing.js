import React from 'react'

function Pricing () {
  return (
    <div className='container'>
    <div className='row'>
    <div className='col-4 p-5'>
    <h1>Unbeatable Pricing</h1>
    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
    <a href="">See pricing <i class="fa-solid fa-arrow-right-long"></i> </a>
    </div>
    <div className='col-2'></div>
    <div className='col-6 p-5'>
    <div className="row">
    <div className="col-6 p-4 border">
    <h1>Rs 0</h1>
    <p>Free equity delivery and
    direct mutual funds</p>
    </div>
    <div className="col-6 p-4 border">
    <h1>Rs 20</h1>
    <p>Intraday and F&O</p>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Pricing