import React from 'react';

function Education() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-6">
          <img src='images/education.svg' alt='education' />
        </div>
        
        <div className="col-6">
          <h1>Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <span className="fake-link">Varsity <i className="fa-solid fa-arrow-right-long"></i></span>
          
          <p>
            TradingQ&A, the most active trading and investment community in India for all your market-related queries.
          </p>
          <span className="fake-link">Trading Q/A <i className="fa-solid fa-arrow-right-long"></i></span>
        </div>
      </div>
    </div>
  );
}

export default Education;
