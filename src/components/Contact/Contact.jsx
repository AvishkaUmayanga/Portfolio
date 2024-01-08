import React from 'react'
import { images } from '../../constants'

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col items-center gap-10 py-20 xl:py-32">
      <div className="flex justify-center font-semibold text-center">
        <h2 className="text-3xl ">Take A Coffee <span class=" text-blue-950">& </span>Chat With Me</h2>
      </div>
      <div className="flex flex-col w-[600px] items-center gap-20 max-md:w-[300px]">
        <div className="flex gap-10 max-md:flex-col max-md:gap-6">
          <div className="flex items-center gap-3 w-[250px] bg-pink-100 shadow-md p-3 hover:scale-110 duration-150">
            <img src={images.emailImg} alt="email" className=' w-[25px]' />
            <p>avishkas97@gmail.com</p>
          </div>
          <div className="flex items-center gap-3 w-[250px] bg-pink-100 shadow-md p-3 hover:scale-110 duration-150">
            <img src={images.mobileImg} alt="mobile" className=' w-[25px]' />
            <p>+94 764009627</p>
          </div>
        </div>
        <form action="/contact" method="post" name="contact" class="flex flex-col items-center w-full gap-6">
          <input required="" type="hidden" name="form-name" value="contact"/>
          <input required="" type="text" name="yourName" id="yourName" placeholder="Your Name" className="w-full p-2 focus:outline-0"/>
          <input required="" type="email" name="yourEmail" id="yourEmail" placeholder="Your Email" className="w-full p-2 focus:outline-0"/>
          <textarea name="yourMessage" id="yourMessage" rows="5" placeholder="Your Message" className="w-full p-2 focus:outline-0"></textarea>
          <button type="submit" className="border w-[150px] p-1 rounded-lg bg-blue-950 text-white hover:scale-110 duration-300 hover:bg-pink-200 hover:text-black">Send Message</button>
        </form>
      </div> 
    </div> 
  )
}
