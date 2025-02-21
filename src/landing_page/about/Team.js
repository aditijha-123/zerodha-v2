import React from "react";

function Team() {
    return (
     <>
      <div className="container">
      <h1 className="text-center">People</h1>
      <div className="row mt-5 p-5">
      <div className="col-6 p-2 text-center">
      <img src="images/aditiprofile.jpg" style={{width : "50%"}} alt="profile-picture"/>
      <h2>Aditi Jha</h2>
      <p>Founder,CEO</p>
      </div>
      <div className="col-6 p-2" style={{fontSize : "1.1em", lineHeight: "1.8"}}>
      <p>Aditi bootstrapped and founded Zerodha in 2010 to overcome the hurdles she faced. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
      <p>she is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
      </div>
      </div>
      </div>
     </>
      );
}

export default Team;