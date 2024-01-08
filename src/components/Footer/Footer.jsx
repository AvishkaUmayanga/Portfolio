import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaWhatsappSquare, FaViber } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className=' text-white bg-[#222831] py-5 flex flex-col gap-2'>
      <div className=' flex items-center justify-center gap-2'>
        <FaRegCopyright/>
        <p>2023 Avishka Umayanga</p>
      </div>
      <div className=' flex justify-center gap-6 '>
        <div className=' flex gap-5'>
          <FaLinkedin/>
          <FaGithub />
          <MdOutlineEmail/>
          <FaFacebook />
          <FaXTwitter />
          <FaInstagram />
          <FaWhatsappSquare />
          <FaViber />
        </div>
      </div>
    </div>
  )
}
