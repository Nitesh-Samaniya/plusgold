import React from 'react'
import Navbar from './components/Navbar'
import Header from "./components/Header";
import Save from "./components/Save";
import AppWork from "./components/appWork/AppWork";
import VideoSection from "./components/VideoSection";
import LifeGoals from "./components/lifeGoal/LifeGoals";
import Companies from "./components/Companies";

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
    </div>
  )
}

export default HomePage