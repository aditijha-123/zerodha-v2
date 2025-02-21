import React from 'react';
function Home () {
    return ( 
    <>
    <div className="container">
    <div className="row text-center mt-5 pt-5 border-bottom">
    <h1>Pricing</h1>
    <p className='fs-4 text-muted mt-1 pb-5 mb-5' >Free equity investments and flat ₹20 intraday and F&O trades </p>
    </div>
    <div className="row pt-5 mt-4 text-center ">
    <div className="col-4">
    <img src="images/pricingEquity.svg" style={{width:"80%"}} alt='price'/>
    <h3>Intraday and F&O trades</h3>
    <p className="text-muted p-2">
          Flat ₹ 20 or 0.03% (whichever is lower) 
          <br/>
          per executed order on intraday trades
          <br/>
          across equity, currency, and commodity 
          <br/>
          trades. Flat ₹20 on all option trades.
          </p>
    </div>
    <div className="col-4">
    <img src="images/intradayTrades.svg" style={{width:"80%"}} alt='trade'/>
    <h3>Intraday and F&O trades</h3>
    <p className="text-muted p-2">
    Flat ₹ 20 or 0.03% (whichever is lower) 
    <br/>
    per executed order on intraday trades
    <br/>
    across equity, currency, and commodity 
    <br/>
    trades. Flat ₹20 on all option trades.
    </p>
    </div>
    <div className="col-4">
    <img src="images/pricingEquity.svg"  style={{width:"80%"}} alt='price'/>
          <h3>Free direct MF</h3>
          <p className="text-muted p-2">
          All direct mutual fund investments are
          <br/>
          absolutely free — ₹ 0 commissions & DP 
          <br/>
          charges.
          </p>
    </div>

    </div>
    </div>
        </>
     );
}

export default Home;