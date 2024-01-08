import React from 'react'
import { images } from '../../constants'
import { motion} from 'framer-motion'
import { FaGithub } from "react-icons/fa";

const workData = [
  {
    imageUrl:images.about1,
    title: 'Chistmas App',
    description: 'This is landing page. Using HTML,Tailwind CSS, JS',
    gitHubLink: 'https://github.com/AvishkaUmayanga/Christmas-app-landing-page'
  },
  {
    imageUrl:images.about3,
    title: 'Mobile Store',
    description: 'This is create using reactJS, Tailwind CSS, NodeJS',
    gitHubLink: 'https://github.com/AvishkaUmayanga/mobile-store'
  },
  {
    imageUrl:images.about4,
    title: 'Leave Management System',
    description: 'This is create using reactJS, Tailwind CSS, NodeJS',
    gitHubLink: 'https://github.com/AvishkaUmayanga/leave-management'
  }
]

export default function Work() {
  return (
    <div id="work" class="flex flex-col py-20 xl:py-32">
      <div class="flex justify-center font-semibold text-center">
        <h2 class="text-3xl ">My <span class=" text-blue-950">Works </span>Section</h2>
      </div>
      <div className=' flex flex-wrap justify-center gap-10 mt-8 '>
        {workData?.map((myWorks,index)=>(
        <motion.div key={index}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
          className='text-left  w-[250px] h-[320px] flex flex-col justify-between '
        >
          <motion.img
            src={myWorks.imageUrl}
            whileHover={{ opacity: [1, 0.5], scale:[1,0.9]}}
            className='w-full pb-3'
            transition={{ duration: 0.5 }}
          />
          <p class="text-xl font-semibold text-blue-900">{myWorks.title}</p>
          <p>{myWorks.description}</p>
          <div>
            <a href={myWorks.gitHubLink} target='blank' rel='noreferrer'
              className='flex  items-center gap-2 w-[120px] hover:scale-105 mt-2 hover:bg-blue-950 rounded-md p-1 hover:text-white duration-700 hover:justify-center'>
              <FaGithub/>
              <p>Click here</p>
            </a>
          </div>
        </motion.div>
        ))}
      </div>
    </div>
  )
}
