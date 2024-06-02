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

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Save />
      <AppWork />
      <VideoSection />
      <LifeGoals />
      <Companies />
      <MediaLove />
      <Download />
      <Secure />
    </div>
  )
}

export default HomePage