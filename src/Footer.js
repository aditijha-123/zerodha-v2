import React from 'react';
import "./index.css"; // Assuming you create a CSS file for styling

function Footer() {
  return (
    <div className='bg-light'>
      <div className="container p-5">
        <div className="row">
          <div className="col">
            <img src='images/logo.svg' alt='logo' style={{ width: "50%" }} />
            <p>
              © 2010 - 2024, Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
            <div className="social-icons">
              <span className='fake-link'><i className="fa-brands fa-x-twitter"></i></span>
              <span className='fake-link'><i className="fa-brands fa-square-facebook"></i></span>
              <span className='fake-link'><i className="fa-brands fa-instagram"></i></span>
              <span className='fake-link'><i className="fa-brands fa-linkedin-in"></i></span>
              <span className='fake-link'><i className="fa-brands fa-youtube"></i></span>
              <span className='fake-link'><i className="fa-brands fa-whatsapp"></i></span>
              <span className='fake-link'><i className="fa-brands fa-telegram"></i></span>
            </div>
          </div>

          <div className="col">
            <h5>Company</h5>
            <span className='fake-link'>About</span><br />
            <span className='fake-link'>Products</span><br />
            <span className='fake-link'>Pricing</span><br />
            <span className='fake-link'>Referral programme</span><br />
            <span className='fake-link'>Careers</span><br />
            <span className='fake-link'>Zerodha.tech</span><br />
            <span className='fake-link'>Press & media</span><br />
            <span className='fake-link'>Zerodha Cares (CSR)</span>
          </div>

          <div className="col">
            <h5>Support</h5>
            <span className='fake-link'>Contact us</span><br />
            <span className='fake-link'>Support portal</span><br />
            <span className='fake-link'>Z-Connect blog</span><br />
            <span className='fake-link'>List of charges</span><br />
            <span className='fake-link'>Downloads & resources</span><br />
            <span className='fake-link'>Videos</span><br />
            <span className='fake-link'>How to file a complaint?</span><br />
            <span className='fake-link'>Status of your complaints</span><br />
          </div>

          <div className="col">
            <h5>Account</h5>
            <span className='fake-link'>Open an account</span><br />
            <span className='fake-link'>Fund transfer</span><br />
          </div>
        </div>

        <div className='mt-5'>
          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
          <p>Attention investors: Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
