import React from 'react';
function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src='images/largestBroker.svg' alt='broker'/>
                </div>
                <div className="col-6 p-4 mt-5">
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ millon Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-6">
                         <ul>
                             <li><p>Futures and Options</p></li>
                             <li><p>Commodity derivates</p></li>
                             <li><p>Currency derivates</p></li>
                         </ul>
                        </div>
                        <div className="col-6">
                           <ul>
                              <li><p>Stocks & IPOs</p></li>
                              <li><p>Direct mutual funds</p></li>
                              <li><p>Bonds and Govt. Securities</p></li>
                           </ul>
                        </div>
                    </div>
                    <img src='/assets/images/pressLogos.png' style={{width:"90%"}} alt='award'/> 
                </div>
            </div>
        </div>
     );
}

export default Awards;