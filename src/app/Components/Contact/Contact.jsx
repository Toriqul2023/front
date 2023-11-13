'use client'

import React from 'react'
import { useForm } from "react-hook-form"
import './Contact.css'

const Contact = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => console.log(data)

      console.log(watch("example"))
  return (
    <div className='bg-[#0B0D0E] p-5 text-white shadow-lg py-[50px]'>
         <div className="w-[70%] mx-auto">
            <div className="row grid lg:grid-cols-3 gap-3 items-center lg:items-start lg:justify-between justify-center">
                <div className='px-3 lg:col-span-2 self-center'>
                  <h3 className='lg:text-6xl text-3xl font-bold my-3'>GET IN TOUCH</h3>
                  <p className='text-[18px] my-2 hidden lg:block'>Please Provide me your information . It will be helpful for me to contact with you</p>
                </div>
                <div>
                <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input  {...register("name")}  placeholder='Enter Your Name' />
      <input {...register("email", { required: true })} placeholder='Enter Your Email' />
      <input  {...register("number")}  placeholder='Enter Your Number' />
      <input  {...register("service")}  placeholder='Which Service You Want' />
      
      <textarea name="message" className='w-[100%]'  placeholder='Enter Message' {...register("message")} id="msg" cols="30" rows="10"></textarea>

     

      {/* include validation with required or other standard HTML validation rules */}
      
      {/* errors will return when field validation fails  */}
     

      <input type="submit" />
    </form>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Contact