import React from 'react'
import Navbar from './components/Navbar'
import Header from "./components/Header";
import Save from "./components/Save";
import AppWork from "./components/appWork/AppWork";
import VideoSection from "./components/VideoSection";
import LifeGoals from "./components/lifeGoal/LifeGoals";
import Companies from "./components/Companies";
import MediaLove from "./components/mediaLove/MediaLove";
import Download from "./components/Download";
import Secure from "./components/Secure";
import Footer from "./components/footer/Footer";
import Chart from "./components/Chart";
import PopUp from "./components/PopUp";

const HomePage = () => {
  
  return (
    <div>
      <Navbar />
      <Header />
      <Save />
      <AppWork />
      <VideoSection />
      <LifeGoals />
      <Chart />
      <Companies />
      <MediaLove />
      <Download />
      <Secure />
      <Footer />
      <PopUp />
    </div>
  )
}

export default HomePage