import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="About"
      className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-amber-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Unique Header Style */}
        <div className="w-fit mx-auto mb-12 px-8 py-2 ">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-[Dancing Script,cursive] tracking-wide">
            About Me
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side: Animated Image with Unique Frame Animation */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px]">
              <img
                src="/profile.jpg"
                alt="Raheman Shaikh"
                className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-amber-500"
              />
              {/* Unique animated accent frame */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full rounded-2xl z-0 pointer-events-none"
                initial={{ scale: 0.95, opacity: 0.7 }}
                animate={{
                  scale: [0.95, 1.05, 0.95],
                  boxShadow: [
                    "0 0 0 0 rgba(251,191,36,0.6)",
                    "0 0 40px 10px rgba(251,191,36,0.3)",
                    "0 0 0 0 rgba(251,191,36,0.6)",
                  ],
                }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  border: "4px solid #F59E42",
                  borderImage: "linear-gradient(90deg,#F59E42,#FB7185,#FBBF24) 1",
                }}
              />
            </div>
          </motion.div>

          {/* Right Side: Animated Text */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="mb-4 text-left md:text-left">
              <p className="mb-2 text-2xl font-bold text-amber-600">
                I'm <span className="text-orange-600">Ab Raheman Shaikh</span>
              </p>
              <p className="text-xl font-bold text-amber-500 mb-4">
                Full Stack Developer
              </p>
            </div>
            <div className="mb-5">
              <p className="text-lg text-[#5C97B2] dark:text-[#EAF1F6] leading-relaxed text-justify">
                <span className="font-semibold text-[#A3C7D6]">Education:</span> <br />
                B.Tech in Computer Science and Engineering from{" "}
                <span className="font-semibold text-[#FB7185]">
                  Dr. Babasaheb Ambedkar Technological University (BATU), Lonere
                </span>
                .<br />
                <span className="font-semibold text-[#F59E42]">
                  Shri Shivaji Institute Of Engineering and Management Studies, Parbhani
                </span>
              </p>
            </div>
            <div className="mb-5">
              <p className="text-lg text-[#4B5D6B] dark:text-[#EAF1F6] leading-relaxed text-justify">
                Passionate about enhancing my coding skills and developing innovative web applications and dynamic websites. I specialize in building WebApps and Websites using the{" "}
                <span className="font-semibold text-[#A3C7D6]">MERN Stack</span> (
                <span className="font-semibold text-[#F59E42]">MongoDB</span>,{" "}
                <span className="font-semibold text-[#5C97B2]">Express.js</span>,{" "}
                <span className="font-semibold text-[#A3C7D6]">React</span>,{" "}
                <span className="font-semibold text-[#40576D]">Node.js</span>
                ). I’m constantly working on improving my technical abilities and love creating <span className="font-semibold text-[#FB7185]">Full-Stack project clones</span> to strengthen my development expertise.
              </p>
            </div>
            <div className="mb-5">
              <p className="text-lg text-[#7A8A99] dark:text-[#EAF1F6] leading-relaxed text-justify">
                <span className="font-semibold text-[#A3C7D6]">Technical Team Lead at DCODE Club (DDSC)</span>, focused on <span className="font-semibold text-[#F59E42]">full-stack development</span>, <span className="font-semibold text-[#FB7185]">DSA</span>, web projects, and peer programming. Passionate about <span className="font-semibold text-[#A3C7D6]">clean design</span>, <span className="font-semibold text-[#F59E42]">collaboration</span>, and <span className="font-semibold text-[#FB7185]">continuous learning</span>.
              </p>
            </div>
            <div className="flex flex-col gap-3 mt-8">
              <div className="flex items-center gap-3 text-[#7A8A99] dark:text-[#EAF1F6] text-base">
                <FaEnvelope className="text-[#A3C7D6]" />
                <span className="font-medium">ar4868904@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-[#7A8A99] dark:text-[#EAF1F6] text-base">
                <FaMapMarkerAlt className="text-[#A3C7D6]" />
                <span className="font-medium">Parbhani, India - 431401</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}