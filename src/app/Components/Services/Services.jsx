import React from 'react'
import './Services.css'
import Image from 'next/image'
import Service1 from '../../../../public/service1-2.svg'
import Service2 from '../../../../public/service2-2.svg'
import Service3 from '../../../../public/service3-1.svg'

const Services = () => {
  return (
    <main className='services bg-[#0B0D0E]'>
         <div className="container mx-auto">
              <div className="row grid lg:grid-cols-3 gap-3 items-center justify-between p-5 ">
                  <div className='box2 shadow-lg shadow-black text-white hovering'>
                    <div className='text-content text-center p-5 my-4'>
                       <Image src={Service1} width={500} height={500} loading='lazy' alt='service1' className='content-img' />
                       <h3 className='text-2xl my-3 text-[#08D665] font-bold '>DESIGN PRINCIPLE</h3>
                       <p className='mb-5 '>
                       Need a project completed by an expert? Let’s go! Access a human resources consultant to answer questions.

                       </p>
                    </div>
                    <div className='hover-edit'>
                        <div className="sample off">
                        <div className=" circle round-1">   
                        </div>
                         <div className=" circle round-2"></div>
                         <div className=" circle round-3"></div>
                         <div className=" circle round-4"></div>
                        </div>
                    </div>
                      
                       
                       
                       
                    </div>
                  <div className='box2  shadow-lg shadow-black text-[]'>
                    <div className='text-content text-center p-5 my-4'>
                       <Image src={Service2} width={500} height={500} loading='lazy' alt='service2' className='content-img' />
                       <h3 className='text-2xl my-3 text-white font-bold'>DESIGN PRINCIPLE</h3>
                       <p className='mb-5 text-white'>
                       Need a project completed by an expert? Let’s go! Access a human resources consultant to answer questions.

                       </p>
                    </div>
                    <div className='hover-edit'>
                        <div className="sample active">
                        <div className=" circle round-1 ">   
                        </div>
                         <div className=" circle round-2"></div>
                         <div className=" circle round-3"></div>
                         <div className=" circle round-4"></div>
                        </div>
                    </div>
                      
                       
                       
                       
                    </div>
                  <div className='box2 shadow-lg shadow-black text-white hovering '>
                    <div className='text-content text-center p-5 my-4'>
                       <Image src={Service3} width={500} height={500} loading='lazy' alt='service3' className='content-img' />
                       <h3 className='text-2xl my-3 text-[#08D665] font-bold'>DESIGN PRINCIPLE</h3>
                       <p className='mb-5'>
                       Need a project completed by an expert? Let’s go! Access a human resources consultant to answer questions.

                       </p>
                    </div>
                    <div className='hover-edit'>
                        <div className="sample off">
                        <div className=" circle round-1">   
                        </div>
                         <div className=" circle round-2"></div>
                         <div className=" circle round-3"></div>
                         <div className=" circle round-4"></div>
                        </div>
                    </div>
                      
                       
                       
                       
                    </div>
                    
                  </div>
              </div>
         
    </main>
  )
}

export default Services