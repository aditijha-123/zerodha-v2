import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import LeftSection from './LeftSection'
import Hero from './Hero'
import RightSection from './RightSection'

function ProductsPage () {
  return (
   <>
   <Navbar/>
   <Hero/>
   <LeftSection 
   imageUrl="images/kite.png" 
   productName="Kite" 
   productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
   tryDemo="" 
   learnMore="" 
   googlePlay="" 
   appStore="" />

   <RightSection
   productName="Console" 
   productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
   tryDemo="" 
   learnMore="" 
   googlePlay="" 
   appStore=""
   imageUrl="images/coin.png" 
   />

   <LeftSection 
   imageUrl="images/coin.png" 
   productName="Coin" 
   productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
   tryDemo="" 
   learnMore="" 
   googlePlay="" 
   appStore="" />

   <RightSection
   productName="Kite Connect API" 
   productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
   tryDemo="" 
   learnMore="" 
   googlePlay="" 
   appStore=""
   imageUrl="images/Kiteconnect.png" 
   />


   <LeftSection 
   imageUrl="images/varsity.png" 
   productName="Varsity" 
   productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
   tryDemo="" 
   learnMore="" 
   googlePlay="" 
   appStore="" />
   <Footer/>
   </>
  )
}

export default ProductsPage