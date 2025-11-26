import React from "react";
import SummaryCard from "../components/about/SummaryCard";
import { education, experience, profile } from "../constant";
import ExperienceCard from "../components/about/ExperienceCard";
import EducationCard from "../components/about/EducationCard";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import OthersCard from "../components/about/othersCard";

const About = () => {
  return (
    <PageTransition>
          <div className="flex justify-center text-white px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20">
      <div className="flex flex-col gap-16 sm:gap-20 w-full max-w-6xl">

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <SummaryCard profile={profile} />
        </motion.div>

        {/* Experience + Education */}
        <motion.div
          className="
            flex flex-col 
            lg:flex-row 
            gap-10 
            w-full 
            justify-between
          "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.25, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <ExperienceCard experience={experience} />
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
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
          className="w-full"
        >
        <OthersCard/>
        </motion.div>

      </div>
    </div>
    </PageTransition>

  );
};

export default About;
