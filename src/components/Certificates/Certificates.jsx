import React from 'react'
import { motion} from 'framer-motion'
import { images } from '../../constants'
import { FaGoogleDrive } from "react-icons/fa";

export default function Certificates() {
  return (
    <div id="certificate" class="flex flex-col items-center py-20 xl:py-32">
      <div class="flex justify-center font-semibold text-center">
        <h2 class="text-3xl ">My <span class=" text-blue-950">Certificates </span></h2>
      </div>
      <div className=' flex justify-center mt-16 max-md:flex-col max-md:gap-10 max-lg:gap-6'>
        <div className=' flex flex-wrap justify-center gap-10'>
          <motion.div
           whileInView={{scale:[0,1], x:[-100,0]}}
           transition={{ duration: 1 }}
           className=' w-[350px] p-1 bg-white'
          >
            <img src={images.pythonCet} alt="python Cetificate" className=' object-contain w-full h-full duration-300 hover:grayscale-0 hover:scale-110 grayscale' />
          </motion.div>
          <motion.div
           whileInView={{scale:[0,1], x:[100,0]}}
           transition={{ duration: 1 }}
           className=' w-[350px] p-1 bg-white'
          >
            <img src={images.htmlCssCet} alt="HTML CSS Cetificate" className=' object-contain w-full h-full duration-300 hover:grayscale-0 hover:scale-110 grayscale' />
          </motion.div>
        </div>
      </div>
      <motion.div 
       whileInView={{scale:[0,1], y:[50,0]}}
       transition={{duration:1, ease: 'easeInOut'}}
       >
        <div className="p-1 px-2 mt-10 duration-300 bg-white rounded-full shadow-lg hover:bg-blue-950 hover:text-white" >
          <a href="https://drive.google.com/drive/folders/1YBQp34gDufwliJIv5xgSbijx-mr4vwIH?usp=drive_link" target="blank" rel=" noreferrer" className="flex items-center gap-5">
            <FaGoogleDrive/>
            <p>See All Certificates</p>
          </a>
        </div>
      </motion.div>
    </div>
  )
}
