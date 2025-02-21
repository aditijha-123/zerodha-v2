import React from "react"

function LeftSection({
    imageUrl,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
    }
    )
    {
     return ( 
    <div className="container">
    <div className="row">
    <div className="col-6">
   <img src={imageUrl} alt="url" />
    </div>
    <div className="col-6 p-5 ">
    <h1>{productName}</h1>
    <p>{productDescription}</p>
    <a className = "learnmore"  href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right-long"></i>  </a>
    <a className = "learnmore" href={learnMore} style={{marginLeft : "50px"}} >Learnmore<i class="fa-solid fa-arrow-right-long"></i></a>
    <div className="mt-3">
    <a href={googlePlay}><img src="images/appstoreBadge.svg"/></a>
    <a href={appStore} style={{marginLeft : "50px"}}> <img src="images/googleplayBadge.svg"/></a>
    </div>
    
    </div>
    </div>
    </div>
     );
}

export default LeftSection;