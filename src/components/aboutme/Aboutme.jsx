import React from 'react'

import styles from './Aboutme.module.css'
import Paragraph from '@/components/Paragraph/Paragraph'

const Aboutme = () => {
                
    const para = 'I am a passionate programmer deeply immersed in the world of problem-solving and web development. My love for coding fuels my creative spirit, driving me to excel in every project with precision and innovation. I am determined to make a lasting impact in the ever-evolving field of programming.'

  return (
    <div className='w-full min-h-screen border md:p-48'>
        <div className='w-full h-full '>
            <h1 className={` text-2xl md:text-5xl font-bold md:leading-[70px] ${styles.header}`}>
                <Paragraph value={para} />
            </h1>
        </div>
    </div>
  )
}

export default Aboutme
