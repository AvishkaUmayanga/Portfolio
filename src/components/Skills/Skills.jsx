import React from 'react'
import { motion} from 'framer-motion'
import { skillData } from '../../data/skillsData'

export default function Skills() {
  return (
    <div id="skills" class="flex flex-col justify-center py-20 xl:py-32">
      <div class="flex justify-center font-semibold text-center">
        <h2 class="text-3xl ">Skills <span class=" text-blue-950">& </span>Experience</h2>
      </div>
      <div class="flex justify-center gap-40 px-20 mt-16 max-md:flex-col max-md:gap-10 max-lg:px-5 max-lg:gap-6">
        <div class="flex flex-wrap justify-center gap-10 ">
          {skillData?.map((skillUrl, index)=>(
            <motion.div key={index}
              whileInView={{scale:[0,1]}}
              transition={{duration:1, ease: 'easeInOut'}}
              className=' w-[90px] h-[90px] bg-white rounded-full  p-3 '
            >
              <img src={skillUrl.imageUrl} alt={skillUrl.imageUrl}  className="object-contain w-full h-full duration-300 hover:grayscale hover:scale-110" />
            </motion.div>
          ))}
        </div>
        <div class="flex flex-col w-[250px] max-lg:items-center  self-center">
          <motion.div 
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}>
            <h3 class="text-xl font-semibold text-blue-950">Intern Software Engineer</h3>
            <p class="text-lg ">Treeloq (Pvt) Ltd</p>
            <p>2023</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
