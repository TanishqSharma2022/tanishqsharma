import React from 'react'
import { motion } from 'framer-motion';
import styles from './style.module.scss';

export default function Index() {

  // const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`
  // const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`
  const initialPath = `

  M0 300 

  Q${window.innerWidth/2} 0 ${window.innerWidth} 300

  L${window.innerWidth} ${window.innerHeight + 300}

  Q${window.innerWidth/2} ${window.innerHeight + 600} 0 ${window.innerHeight + 300}

  L0 0

`



const targetPath = `

  M0 300

  Q${window.innerWidth/2} 0 ${window.innerWidth} 300

  L${window.innerWidth} ${window.innerHeight}

  Q${window.innerWidth/2} ${window.innerHeight} 0 ${window.innerHeight}

  L0 0

`
  const curve = {
    initial: {
        d: initialPath
    },
    enter: {
        d: targetPath,
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
    },
    exit: {
        d: initialPath,
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
    }
  }

  return (
    <svg className={styles.svgCurve}>
        <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
    </svg>
  )
}