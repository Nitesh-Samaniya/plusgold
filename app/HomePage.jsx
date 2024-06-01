import React from 'react'
import Navbar from './components/Navbar'
import Header from "./components/Header";
import Save from "./components/Save";
import AppWork from "./components/appWork/AppWork";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Save />
      <AppWork />
    </div>
  )
}

export default HomePage