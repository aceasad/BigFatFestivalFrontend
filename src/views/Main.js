import React, { useState, useEffect } from "react";
import globe from "../assets/globe.gif"
import headerRight from "../assets/headerRight.svg"
import info from '../assets/info.avif'
import Header from '../components/Header'
import { Container } from '@mui/material'
import Artist from '../components/Artist'
const Main = () => {
  return (
    <>
      <Header>
        <Artist />
      </Header>
    </>
  );
}

export default Main;