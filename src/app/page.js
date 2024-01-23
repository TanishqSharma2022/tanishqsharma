import Image from 'next/image'
import React from 'react'
import styles from './page.module.css';
const page = () => {
  return (
    <div>
      <div className={styles.heroContainer}>
      <img src='/bgImage.png' alt='hero'  className={styles.heroImage} />
      </div>
    </div>
  )
}

export default page
