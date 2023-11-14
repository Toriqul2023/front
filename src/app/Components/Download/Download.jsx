import React from 'react'
import HEROIMAGE from '../../../../public/author2.png'
import Image from 'next/image'
const Download = () => {
  return (
    <>
          <main className=' py-[100px] shadow-neutral-800 '>
    <div className="custom grid lg:grid-cols-2 gap-2  mx-auto items-center  text-white">
        <div className=''>
        <Image alt='toriqul-download' loading='lazy' src='https://quomodosoft.com/html/glint/assets/img/about/about1.png' width={500} height={500}/>
     
         
        </div>
        <div className='justify-self-end '>
        <h1 className='text-[30px] mb-5  font-bold'>IMAGINATION IS MORE IMPORTANT THAN KNOWLEDGE </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolores sequi, iusto fugiat doloribus cupiditate quaerat nobis corporis voluptate incidunt sit ex voluptatibus, odio voluptates!</p>
            <button className='btn bg-[#08D665] text-white my-5 border-none px-5'>Download</button>
        </div>
      </div>
    </main>
    </>
  )
}

export default Download