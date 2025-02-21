import React from 'react'
import {Link} from 'react-router-dom'
function Navbar () {
  return (
 <>
  <nav className="navbar navbar-expand-lg bg-light">
  <div className="container p-2">
    <Link className="navbar-brand" to = "/">
    <img src='images/logo.svg' style={{width: "30%"}} alt='Logo'/>
    </Link>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="d-flex"  role="search">
      <ul className="navbar-nav mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/support">Support</Link>
      </li>
     </ul>
    </form>
    </div>
  </div>
</nav>
</>
  
  )
}

export default Navbar;