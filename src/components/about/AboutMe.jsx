import React from "react";
import { motion } from "framer-motion";
import {
  aboutSummary,
  profile,
  aboutExperience,
  aboutEducation,
  socialLinks,
  aboutSkills,
  aboutAwards,
} from "../../constant";
import { FaDribbble, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutMe = () => {
  return (
    <div className="min-h-screen w-full mb-46 flex items-center justify-center p-6 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-10 w-full max-w-7xl text-white">

        {/* LEFT CARD */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-[#111] p-6 rounded-2xl shadow-xl space-y-6 h-fit flex flex-col items-center"
        >
          <div className="rounded-xl overflow-hidden">
            <img src={profile.image} className="w-full h-64 object-cover" />
          </div>

          <h2 className="text-2xl font-bold">{profile.name}</h2>

          <div className="flex items-center justify-center gap-2">
                <FaDribbble className="text-4xl rounded-full " />
                <FaTwitter  className="text-4xl rounded-full " />
                <AiFillInstagram className="text-4xl rounded-full " />
                <FaFacebookSquare className="text-4xl rounded-full " />
          </div>

        

          <Link className="px-20 py-3 bg-white text-black rounded-xl font-semibold hover:bg-white/80 transition">
            Contact Me
          </Link>
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <div className="space-y-16">

          {/* ABOUT */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h1 className="text-xl font-bold mb-4">ABOUT ME</h1>
            <p className="text-gray-300 leading-7 text-sm md:text-base">{aboutSummary}</p>
          </motion.div>

          {/* EXPERIENCE */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h1 className="text-xl font-bold mb-6">EXPERIENCE</h1>

            {aboutExperience.map((exp, i) => (
              <div key={i} className="mb-6">
                <p className="text-gray-400 text-sm">{exp.year}</p>
                <h3 className="text-lg font-bold text-blue-400">{exp.role}</h3>
                <p className="text-gray-400 mb-2">{exp.company}</p>
                <p className="text-gray-300 leading-7 text-sm md:text-base">{exp.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* EDUCATION */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h1 className="text-xl font-bold mb-6">EDUCATION</h1>

            {aboutEducation.map((edu, i) => (
              <div key={i} className="mb-6">
                <p className="text-gray-400 text-sm">{edu.year}</p>
                <h3 className="text-lg font-bold text-blue-400">{edu.degree}</h3>
                <p className="text-gray-300 leading-7 text-sm md:text-base">{edu.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* SKILLS */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h1 className="text-xl font-bold mb-6">SKILLS</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aboutSkills.map((skill, i) => (
                <div key={i} className="flex flex-col whitespace-nowrap gap-1">
                  <p className="text-2xl font-bold text-blue-400">{skill.percent}%</p>
                  <h3 className="text-lg font-semibold">{skill.label}</h3>
                  <p className="text-gray-400 text-sm">{skill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AWARDS */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h1 className="text-xl font-bold mb-6">AWARDS</h1>

            <div className="flex flex-col gap-6">
              {aboutAwards.map((award, i) => (
                <div key={i} className="flex flex-col whitespace-nowrap leading-6">
                  <span className="text-gray-400 text-sm">{award.date}</span>
                  <span className="text-blue-400 font-semibold text-lg">{award.award}</span>
                  <span className="text-gray-300 text-sm">{award.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;