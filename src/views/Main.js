import React, { useState, useEffect } from "react";
import globe from "../assets/globe.gif"
import headerRight from "../assets/headerRight.svg"
import info from '../assets/info.avif'

import Timer from '../components/Timer'
const Main = () => {
  return (
    <div className="header">

      <Timer />
      <div className="logo-gif">
        <img src={globe}></img>

      </div>

      <div className="pd-address-logo">
        <img src={headerRight}></img>

      </div>


    </div>
  );
}

export default Main;