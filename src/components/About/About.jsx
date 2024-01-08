import React from 'react'
import { images } from '../../constants'
import { motion} from 'framer-motion'

export default function About() {
  const abouData = [
    {
      imageUrl:images.about1,
      title: 'Web Development',
      description: 'I am good in web development'
    },
    {
      imageUrl:images.about2,
      title: 'Frontend Development',
      description: 'I am good in frontend development'
    },
    {
      imageUrl:images.about3,
      title: 'Backend Development',
      description: 'I am good in backend development'
    }
  ]
  return (
  <div id="about" class="flex flex-col py-20 xl:py-32 ">
    <div class="flex justify-center font-semibold text-center">
      <h2 class="text-3xl ">I Know That <span class=" text-blue-950">Good Design </span><br></br>means <span class=" text-blue-950">Good Business</span></h2>
    </div>
    <div class="flex flex-wrap justify-center gap-16 pt-10">
      {abouData?.map((about, index)=>(
        <motion.div key={index} 
          whileHover={{ scale:[1,1.1]}}
          transition={{ duration: 0.5 }}
          className=' flex flex-col items-center justify-center p-2 text-center bg-white rounded-lg shadow-lg w-[200px]'>
          <img src={about.imageUrl} alt="Web Development" class="w-full rounded-lg"/>
          <h2 class="text-lg font-semibold text-blue-950">{about.title}</h2>
          <p>{about.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
  )
}
