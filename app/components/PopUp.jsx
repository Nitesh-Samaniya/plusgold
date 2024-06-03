"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import popImg from "../../public/sonakshiandofferBanner.png"
import Image from 'next/image'
import styles from './PopUp.module.css'

const PopUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <Image src={popImg} alt="Pop-up Image"/>
        <button className={styles.closeButton} onClick={handleClose}>Close</button>
      </div>
    </div>
  )
}

export default PopUp
