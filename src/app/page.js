
"use client"
import React, { useEffect } from 'react'
import styles from './page.module.css';
import Header from "@/components/header";
import StickyCursor from "@/components/stickyCursor";
import { useRef } from "react";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";;
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



const page = () => {
  const stickyElement = useRef(null);
  const container = useRef();
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = 1;

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
    x: '-300px'
  })


}, [])

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
      <div className='w-[80%]  h-[80%]  flex items-center '>
      <div className={`   font-black mb-48 text-4xl md:text-8xl  z-10 `}>
          <div className={`py-0 overflow-hidden ${styles.mytext}    `}>
            <div className='mytext py-0 '>HI THERE, I'M</div>
            <div className=' mytext leading-24 '><h1 className={` ${styles.clipper}`}>TANISHQ S<span className='text-[#fffff2]'>HARMA</span></h1></div>
          </div>
      </div>
      <div className={`${styles.imageBorder} right-48 -bottom-72`}>
      {/* <svg id="demo" xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 2000 1000">
  <defs>
    <clipPath id="theClipPath">
      <rect className="moveMe" h="100" w="100" fill="purple" cx="200" cy="500" />
    </clipPath>
  </defs>
  <circle className="moveMe" r="200" fill="#5cceee" cx="200" cy="500" />
  <text transform="translate(1000 520)" textAnchor="middle" fontSize="400" fill="#333">HELLO</text>
  <g clipPath="url(#theClipPath)">
    <text transform="translate(1000 520)" textAnchor="middle" fontSize="400" fill="#fff">HELLO</text>
  </g>

</svg> */}
        <img src='/mybg.jpeg' alt='hero'  className={`${styles.heroImage}`} />
      </div>
      </div>
      
      </div>
    
      </div>


      <div  className={`w-full md:w-[102vw]  h-24 overflow-hidden   absolute text-xl md:text-5xl  -left-[2vw] bottom-2  md:bottom-12`}>
      <div ref={slider} >
        <p ref={firstText} className={`${styles.roamingText} roamingText -mr-12  firstText absolute  w-[500vw]`}>WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. </p>
        <p ref={secondText} className={`${styles.roamingText} roamingText -mr-12  firstText absolute w-[500vw]`}>WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. WEB DEVELOPER. </p>
      </div>
      </div>
    </div>
  )
}

export default page
