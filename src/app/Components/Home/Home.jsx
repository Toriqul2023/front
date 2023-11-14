import Image from 'next/image'
import React from 'react'
import './Home.css'
import HEROIMAGE from '../../../../public/author2.png'

const Home = () => {
  return (
    <>
    <main className=' shadow-neutral-900 solar-parent '>
    
      <div className="solar">
         <div className="solar-child">
          <div className="box-1"></div>
          <div className="box-2"></div>
          <div className="box-3"></div>
          
         </div>
      </div>
    <div className="custom grid lg:grid-cols-2 gap-2  mx-auto items-center  text-white">
        <div className=''>
        <h1 className='lg:text-[50px] text-[30px] mb-5 lg:leading-[4rem] font-bold'><span className='text-[#08D665]'>IMAGINATION </span>IS MORE IMPORTANT THAN <span className='text-[#08D665]'>KNOWLEDGE</span> </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur laudantium, mollitia cupiditate eveniet .</p>
            <button className='btn bg-[#08D665] text-white my-5 border-none px-5'>GETTING STARTED</button>
         
        </div>
        <div className='lg:justify-self-end '>
        <Image id='img' loading='eager' src={HEROIMAGE} alt='toriqul'  width={500} height={500}/>
        </div>
      </div>
    </main>
   
    </>
  )
}

export default Home