import React from 'react'
import './Portfolio.css'
const Portfolio = () => {
  return (
    <>
        <main className='bg-[#0B0D0E] text-white p-5'>
        <div className="container mx-auto">
            <div className="row grid lg:grid-cols-2 justify-between items-center mb-5">
                <div>
                    <p className='text-[#08D665] text-xl'>EXPERIENCE</p>
                    <h3 className='text-2xl lg:text-5xl  font-bold'>EXPERIENCE AND <span className='text-[#08D665]'> SKILL</span></h3>
                </div>
                <div className='flex px-[20px] items-center'>
                    <div className="box my-5 mx-4 h-[60px] hidden lg:block w-[10px] bg-[#08D665]"></div>
                    
                        <div>
                        <p className='place-self-center my-3 text-[20px] hidden lg:block'> Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione Reprehenderit, Error Qui Enim Sit Ex Provident</p>
                        </div>
                    
                </div>
            </div>
            <div className="portfolio grid lg:grid-cols-4 gap-4 my-4">
                <div className='bg-[#0B0D0E] p-5 shadow-xl shadow-black leading-8 hover:shadow-lg'> 
                    <p>2011-2014</p>
                    <h2 className='text-[#08D665] text-[20px] text-900 my-3'>GOOGLE COOPERATION</h2>
                    <h3 className='text-justify'>All You Need To Do Your Best Work Together In One Package Works Seamlessly Computer</h3>

                </div>
                <div className='bg-[#0B0D0E] p-5 shadow-lg shadow-black leading-8 hover:shadow-lg'> 
                    <p>2011-2014</p>
                    <h2 className='text-[#08D665] text-[20px] text-900 my-3'>GOOGLE COOPERATION</h2>
                    <h3 className='text-justify'>All You Need To Do Your Best Work Together In One Package Works Seamlessly Computer</h3>

                </div>
                <div className='bg-[#0B0D0E] p-5 shadow-lg shadow-black leading-8 hover:shadow-lg'> 
                    <p>2011-2014</p>
                    <h2 className='text-[#08D665] text-[20px] text-900 my-3'>GOOGLE COOPERATION</h2>
                    <h3 className='text-justify'>All You Need To Do Your Best Work Together In One Package Works Seamlessly Computer</h3>

                </div>
                <div className='bg-[#0B0D0E] p-5 shadow-lg shadow-black leading-8 hover:shadow-lg'> 
                    <p>2011-2014</p>
                    <h2 className='text-[#08D665] text-[20px] text-900 my-3'>GOOGLE COOPERATION</h2>
                    <h3 className='text-justify'>All You Need To Do Your Best Work Together In One Package Works Seamlessly Computer</h3>

                </div>
                
            </div>
        </div>
        </main>
    </>
  )
}

export default Portfolio