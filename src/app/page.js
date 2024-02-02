
"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css';
import Header from "@/components/header";
import StickyCursor from "@/components/stickyCursor";
import { useRef } from "react";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";;
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const Page = () => {
  const stickyElement = useRef(null);
  const container = useRef();
  const firstText = useRef(null);
  const secondText = useRef(null);
  const [isOverlapping, setIsOverlapping] = useState(false);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = 1;
  const router = useRouter();
  
  



useEffect(() => {
  gsap.registerPlugin(ScrollTrigger)
  requestAnimationFrame(animation);

  gsap.to(slider.current, {
    scrollTrigger: {
      trigger: document.documentElement,
      start: 0,
      end: window.innerHeight,
      scrub: true,
      onUpdate: e => direction = e.direction * -1
    },
    x: '-200px'
  })


}, [router])

  useGSAP(() => {
    gsap.from('.mytext', {

      duration: 1.8,
      y: 200,
      delay: 1,
      ease: 'power4.out',
      stagger:{
        amount: 0.4
      }
    })

    gsap.from('.roamingText', {

      duration: 2.8,
      y: 200,
      delay: 1,
      ease: 'power4.out',
    })
    
    // gsap.from('.circle1', {
    //   duration: 1.8,
    //   scale: 0,
    //   delay: 1,
    //   ease: 'power4.out',
    // })

    // gsap.from('.circle2', {
    //   duration: 1.8,
    //   scale: 0,
    //   delay: 1,
    //   ease: 'power4.out',
    // })
    // gsap.to('.circle2', {
    //   duration: 10,
    //   scale: 1.4,
    //   delay: 1,
    //   ease: 'power4.out',
    //   x: 100,
    //   y: 100,
    // })


    gsap.from('.imageBox', {

      duration: 1.8,
      y: 0,
      delay: 1,
      ease: 'power4.out',
      stagger:{
        amount: 0.4
      }
    })

    gsap.to('.imageBox', {

      duration: 1.8,
      y: "-100%",
      delay: 1,
      ease: 'power4.out',
      stagger:{
        amount: 0.4
      }
    })



    


  }, { scope: container });

const animation = () =>{
  if(xPercent <= -100){
    xPercent = 0;
  }
  if(xPercent > 0){
    xPercent = -100;
  }

  gsap.set(firstText.current, { xPercent: xPercent });
  gsap.set(secondText.current, { xPercent: xPercent });
  xPercent -= 0.01 * direction;
  requestAnimationFrame(animation);
}



  return (
    <div  ref={container} className='w-[100vw] flex justify-center overflow-x-hidden'>
      <div className='w-[80%] overflow-x-hidden text-[#44403c]'>
      <Header ref={stickyElement}/>
      <StickyCursor stickyElement={stickyElement}/>
      <div className={styles.heroContainer}>
        <div className='w-[600px] absolute circle1 -top-48 -left-48 md:h-[600px]  border-2 rounded-full'></div>
        <div className='w-[600px] absolute circle2 -top-[450px] left-24 md:h-[600px]  border-2 rounded-full'></div>

      <div className='w-[100%] md:w-[80%]  h-[80%] border  flex md:flex-row flex-col items-center '>
      <div className={`   font-black mb-48 text-4xl md:text-8xl  z-10 `}>
          <div className={`py-0 overflow-hidden ${styles.mytext}    `}>
            <div className='mytext py-0 '>HI THERE, I&apos;M</div>
            <div className=' mytext leading-24 '>
              <h1 className={` ${styles.clipper}`}>TANISHQ SHARMA</h1></div>
          </div>
      </div>
      <div className={`${styles.imageBorder} right-48 -bottom-72`}>
     
        <div className=' relative  overflow-hidden '>
          <div className='bg-white top-0 left-0 z-10 absolute w-full h-full imageBox'></div>
        <img  src='/1.jpeg' className={`${styles.heroImage} z-0 heroImage bg-[url('/mybg.jpeg')] bg-cover h-[300px] md:h-[600px]`} />
        </div>
      </div>
      </div>
      
      </div>
    
      </div>


      <div  className={`w-[104%] md:w-[102vw] h-24 overflow-hidden   absolute text-xl md:text-5xl  -left-[2vw] bottom-2  md:bottom-0`}>
      <div ref={slider} >
        <p ref={firstText} className={`${styles.roamingText} ${isOverlapping ? 'text-white' : 'text-red-500'} roamingText -mr-12  firstText absolute  w-[1000vw] `}>WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER.  </p>
        <p ref={secondText} className={`${styles.roamingText} roamingText -mr-12  firstText absolute w-[1000vw] `}>WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. </p>
      </div>
      </div>
    </div>
  )
}

export default Page
