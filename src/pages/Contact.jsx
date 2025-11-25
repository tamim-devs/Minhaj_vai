import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Dribbble, Twitter, Instagram } from "iconoir-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white pt-32 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-[90%] mx-auto">

        {/* ================= LEFT SECTION ================= */}
        <motion.div
          className="col-span-1 lg:col-span-4 space-y-8"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          {/* MAIL */}
          <motion.div
            className="p-5 bg-[#141414] rounded-xl shadow-md border border-[#1f1f1f]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-xl uppercase mb-6 text-[#c9c9c9]">Contact Info</h2>

            <div className="grid grid-cols-4 gap-3 items-center">
              <div className="col-span-1 flex justify-center">
                <motion.div
                  className="w-20 h-20 bg-[#1f1f1f] flex items-center justify-center rounded-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaEnvelope className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              <div className="col-span-3">
                <h2 className="text-[#938269] uppercase font-semibold">Mail Us</h2>
                <p>info@bluebase.com</p>
                <p>info@bluebase2.com</p>
              </div>
            </div>
          </motion.div>

          {/* PHONE */}
          <motion.div
            className="p-5 bg-[#141414] rounded-xl shadow-md border border-[#1f1f1f]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-4 gap-3 items-center">
              <div className="col-span-1 flex justify-center">
                <motion.div
                  className="w-20 h-20 bg-[#1f1f1f] flex items-center justify-center rounded-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaPhoneAlt className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              <div className="col-span-3">
                <h2 className="text-[#938269] uppercase font-semibold">Contact Us</h2>
                <p>+1504-899-8221</p>
                <p>+1504-749-5456</p>
              </div>
            </div>
          </motion.div>

          {/* LOCATION */}
          <motion.div
            className="p-5 bg-[#141414] rounded-xl shadow-md border border-[#1f1f1f]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="grid grid-cols-4 gap-3 items-center">
              <div className="col-span-1 flex justify-center">
                <motion.div
                  className="w-20 h-20 bg-[#1f1f1f] flex items-center justify-center rounded-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaMapMarkerAlt className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              <div className="col-span-3 uppercase">
                <h2 className="text-[#938269] font-semibold">Location</h2>
                <p>22 Baker Street, Texas</p>
                <p>United States</p>
                <p>W1U 3BW</p>
              </div>
            </div>
          </motion.div>

          {/* SOCIAL ICONS */}
          <motion.div
            className="p-5 bg-[#141414] rounded-xl shadow-md border border-[#1f1f1f]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-[#c9c9c9] uppercase mb-4">Social Info</h2>

            <div className="flex gap-5">
              {[Dribbble, Twitter, Instagram].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="w-20 h-20 rounded-full bg-[#1d1d1d] flex items-center justify-center"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon width={30} height={30} color="#fff" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT SECTION – FORM ================= */}
        <motion.div
          className="col-span-1 lg:col-span-8 bg-[#1d1d1d] p-10 rounded-2xl shadow-md border border-[#252525]"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-14">
            Let's work <span className="text-[#5b78f6]">together</span>
          </h2>

          <form className="space-y-6">
            <motion.input
              type="text"
              placeholder="Name"
              className="w-full h-16 bg-[#262626] border border-[#333] rounded-xl px-5"
              whileFocus={{ scale: 1.02 }}
            />

            <motion.input
              type="email"
              placeholder="Email"
              className="w-full h-16 bg-[#262626] border border-[#333] rounded-xl px-5"
              whileFocus={{ scale: 1.02 }}
            />

            <motion.input
              type="text"
              placeholder="Your Subject"
              className="w-full h-16 bg-[#262626] border border-[#333] rounded-xl px-5"
              whileFocus={{ scale: 1.02 }}
            />

            <motion.textarea
              placeholder="Your Message"
              rows={5}
              className="w-full bg-[#262626] border border-[#333] rounded-xl p-5"
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>

            <motion.button
              type="submit"
              className="w-full h-16 bg-[#323232] hover:bg-[#3d3d3d] transition rounded-xl text-xl"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>

        </motion.div>
      </div>
    </div>
  );
}
