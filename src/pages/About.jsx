import React from 'react'
import SummaryCard from '../components/about/SummaryCard'
import { education, experience, profile } from '../constant'
import ExperienceCard from '../components/about/ExperienceCard'
import EducationCard from '../components/about/EducationCard'
import OthersCard from '../components/about/othersCard'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className='flex justify-center text-white px-6 md:px-20 py-20'>
      <div className='flex flex-col gap-20'>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SummaryCard profile={profile} />
        </motion.div>

        {/* Experience + Education */}
        <motion.div
          className='flex flex-col lg:flex-row gap-10'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            staggerChildren: 0.25,
            duration: 0.6
          }}
          viewport={{ once: true }}
        >
          {/* Experience Animation */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ExperienceCard experience={experience} />
          </motion.div>

          {/* Education Animation */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <EducationCard education={education} />
          </motion.div>
        </motion.div>

        {/* Others Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <OthersCard />
        </motion.div>

      </div>
    </div>
  )
}

export default About
