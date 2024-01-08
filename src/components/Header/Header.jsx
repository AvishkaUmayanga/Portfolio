import React from 'react'
import { images } from '../../constants'
import { motion} from 'framer-motion'

export default function Header() {
  return (
    <div id="header" class="  max-lg:flex-col flex items-center justify-center gap-20 lg:mt-[54px] py-20 xl:py-32 mt-[40px]" style={{ backgroundImage: `url(${images.bgIMG})`, backgroundSize: 'cover' }}>
      <div class="flex flex-col items-end gap-5 ">
      <motion.div 
          whileInView={{x:[-100,0], opacity:[0,1]}}
          transition={{ duration: 2}}>
          <div className='w-[250px] p-2 py-5  items-center flex flex-col rounded-2xl shadow-md  bg-white'>
            <p>Hello, I am </p>
            <div className='flex '>
              <span>👋</span>
              <h2 className='text-5xl font-semibold max-md:text-4xl'> Avishka </h2>
            </div>
          </div>
        </motion.div>
        <motion.div 
          whileInView={{x:[-100,0], opacity:[0,1]}}
          transition={{ duration: 2}}>
          <div class="w-[150px] p-2 py-5  items-center flex flex-col rounded-2xl shadow-md  bg-white">
            <p>Web Developer</p>
          </div>
        </motion.div>
      </div>
      <motion.div
        // whileInView={{x:[100,0], opacity:[0,1]}}
        whileInView={{scale:[0,1], opacity:[0,1]}}
        transition={{duration:2}}
        className='bg-gradient-to-t from-gray-300 rounded-full w-[350px] flex justify-center shadow-md h-[350px]'
      >
        <motion.img
          whileInView={{scale:[0,1]}}
          transition={{duration:2, ease: 'easeInOut'}}
          src={images.profile}
          alt='profile'
          className=' h-[350px] '
        >
        </motion.img>
      </motion.div>
      <div>
      <motion.div
        // whileInView={{x:[100,0], opacity:[0,1]}}
        whileInView={{scale:[0,1], opacity:[0,1]}}
        transition={{duration:2}}
        className='max-lg:flex max-lg:gap-3'
      >
        <img src={images.react} alt="react" className=" w-[100px] bg-white rounded-full p-5 max-md:w-[80px] max-md:h-[80px] max-lg:h-[120px] max-lg:w-[120px]"/>
        <img src={images.tailwindCSS} alt="tailwindCSS" className=" w-[200px] bg-white rounded-full  object-fill max-md:w-[100px] max-lg:translate-y-5"/>
        <img src={images.html} alt="html" className=" w-[90px] bg-white rounded-full p-5 max-md:w-[70px] max-md:h-[70px] max-lg:h-[100px] max-lg:w-[100px]"/>
      </motion.div>
    </div>
  </div>
  )
}
