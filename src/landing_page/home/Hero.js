import React from 'react'

function Hero () {
  return (
  
   <div className='container text-center border-bottom mb-5 '>
   <div className='row'>
   <img src='images/homeHero.png' alt='Hero Image' />
   <h1 className='mt-5'>Invest in everything</h1>
   <p className='fs-5 mb-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
   <button style ={{width:"25%", margin: "0 auto"}} className='btn btn-primary btn-lg p-1 fs-5'>Signup Now</button>
   </div>
   </div>

   
   
  )
}

export default Hero;