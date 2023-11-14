'use client'

import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const Progress = () => {
  return (
    <div className='bg-[#0B0D0E]'>
       <div className="container mx-auto py-4 ">
        <div className="row ">
          <div className='p-5 '>
          <Swiper
         
        slidesPerView={4}
        centeredSlides={false}
        breakpoints={{
          // when window width is >= 640px
          300: {
            width:300,
            slidesPerView: 1,
          },
          // when window width is >= 768px
         
        }}
      
        
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="   justify-center"
      >
          <SwiperSlide className='place-self-center'>
         <div className='place-self-center'>
          <div className="my-4 mx-auto radial-progress" id="alb1" aria-label="aib1" name='progress-1' style={{ "--value": "25", "--size": "10rem", "--thickness": "10px","color":"#08D665" }} role="progressbar">
            <span className='text-4xl text-white'>65%</span></div>
          </div>

         </SwiperSlide >
         <SwiperSlide className='place-self-center'>
         <div className='place-self-center'>
          <div className="my-4 radial-progress" id="alb2" aria-label="aib2" name='progress-2' style={{ "--value": "65", "--size": "10rem", "--thickness": "10px","color":"#08D665" }} role="progressbar">
            <span className='text-4xl text-white'>65%</span></div>
          </div>

         </SwiperSlide>
         <SwiperSlide className='place-self-center'>
         <div className='place-self-center'>
          <div className="my-4 radial-progress"  id="alb3" aria-label="aib3" name='progress-3' style={{ "--value": "80", "--size": "10rem", "--thickness": "10px","color":"#08D665" }} role="progressbar">
            <span className='text-4xl text-white'>80%</span></div>
          </div>
         </SwiperSlide>

         <SwiperSlide className='place-self-center'> 
         <div className='place-self-center'>
          <div 
          className="my-4 radial-progress" id="alb4" aria-label="aib4" name='progress-4' 
          style={{ "--value": "60", "--size": "10rem", "--thickness": "10px","color":"#08D665" }} role="progressbar">
            <span className='text-4xl text-white'>60%</span></div>
          </div>
         </SwiperSlide>
        </Swiper>
       
         
         
         
        
         
        </div>
        <div className="row grid lg:grid-cols-2 justify-between items-center mb-5 text-white">
                <div>
                    <p className='text-[#08D665] text-xl'>EXPERIENCE</p>
                    <h1 className='text-2xl lg:text-5xl  font-bold'>EXPERIENCE AND <span className='text-[#08D665]'> SKILL</span></h1>
                </div>
                <div className='flex px-[20px] items-center'>
                    <div className="box my-5 mx-4 h-[60px] hidden lg:block w-[10px] bg-[#08D665]"></div>
                    
                        <div>
                        <p className='place-self-center my-3 text-[20px] hidden lg:block'> Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione Reprehenderit, Error Qui Enim Sit Ex Provident</p>
                        </div>
                    
                </div>
            </div>
        
       </div>

    </div>
    </div>
  )
}

export default Progress