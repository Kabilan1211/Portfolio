import { motion } from "framer-motion";
import { stats, skills } from "../data/data";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 px-10"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* TITLE */}
      <h2 className="text-4xl mb-10">
        Building at the intersection of hardware, software, and intelligence.
      </h2>

      {/* STORY */}
      <p className="text-gray-400 max-w-3xl leading-relaxed mb-12">
        I'm an embedded systems engineer passionate about transforming ideas
        into real-world products. From designing PCBs and firmware to building
        cloud-connected IoT systems, I enjoy working across the full stack of
        hardware and software.
      </p>

      {/* ✅ STATS FROM data.js */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {stats.map((item, index) => (
          <div key={index} className="glass p-6 text-center">
            <h3 className="text-3xl">{item.value}</h3>
            <p className="text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>

      {/* TIMELINE (keep static or move later to data.js) */}
      <div className="space-y-6">
        <h3 className="text-2xl mb-4">Experience</h3>

        <div className="glass p-6">
          <h4 className="font-semibold">
            Hardware Engineer — Jaswa Vending Pvt Ltd
          </h4>
          <p className="text-gray-400 text-sm">2025 — Present</p>
          <p className="text-gray-400 mt-2">
            Developed 3D designs, Hardware architecture, and embedded software for AUROVA, India's first perfume vending machine. The system integrates a user-friendly interface, precise dispensing mechanism, and cloud connectivity for real-time monitoring and inventory management, revolutionizing the retail experience in the fragrance industry. It is currently launched in Chennai and Bangalore.
          </p>
        </div>

        <div className="glass p-6">
          <h4 className="font-semibold">
            Research Intern — IIT Roorkee
          </h4>
          <p className="text-gray-400 text-sm">2024</p>
          <p className="text-gray-400 mt-2">
            Worked on earthquake early warning systems and integrated mems based accelerometer and gyroscope sensors for seismic activity monitoring. Developed a sensor-based monitoring solution for real-time data collection and analysis, contributing to improved earthquake preparedness and response strategies. It is a Uttarakhand government project and currently in the development phase. Also worked in gas pipeline leakage detection system, where I designed a current to voltage converter to get the readings from the sensor and designed a passive filter to eliminate the noise from the sensor readings.
            Worked on earthquake early warning systems and sensor-based
            monitoring solutions.
          </p>
        </div>
      </div>

      {/* ✅ SKILLS FROM data.js */}
      <div className="mt-16">
        <h3 className="text-2xl mb-4">Expertise</h3>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span key={index} className="glass px-4 py-2 text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}