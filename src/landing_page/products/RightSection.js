import React from 'react';

function RightSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Section */}
        <div className="col-6">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a className="learnmore" href={tryDemo}>
            Try Demo <i class="fa-solid fa-arrow-right-long"></i>
          </a>
          <a
            className="learnmore"
            href={learnMore}
            style={{ marginLeft: '50px' }}
          >
            Learn More <i class="fa-solid fa-arrow-right-long"></i>
          </a>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="images/appstoreBadge.svg" alt="App Store Badge" />
            </a>
            <a
              href={appStore}
              style={{ marginLeft: '50px' }}
            >
              <img src="images/googleplayBadge.svg" alt="Google Play Badge" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-6 p-5">
          <img src={imageUrl} alt="Product"  />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
