'use client'
import styles from './style.module.scss'
import { forwardRef, useEffect, useState } from 'react';
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Magnetic from '../magnetic';

const Home = forwardRef(function Index(props, ref) {

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect( () => {
    if(isActive) setIsActive(false)
  }, [pathname])

  return (
    <>
    <div className={styles.main}>

      <div className={styles.header}>
          <Magnetic>
            <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
              <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}>
              <div ref={ref} className={styles.bounds}></div>
              </div>
            </div>
          </Magnetic>
      </div>

    </div>
    <AnimatePresence mode="wait">
      {isActive && <Nav />}
    </AnimatePresence>
    </>
  )
}
)


export default Home;