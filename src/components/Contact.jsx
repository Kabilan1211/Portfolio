import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-24 px-10"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl mb-6">Let’s Build Something Great</h2>

      <p className="text-gray-400 max-w-2xl mb-10">
        I'm always open to discussing new ideas, collaborations, and
        opportunities. Whether it's a product, research, or startup — let’s
        connect.
      </p>

      {/* MAIN CARD */}
      <div className="glass p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-gray-400">Email me at</p>
          <h3 className="text-xl font-semibold">
            kabilan.s.contact@gmail.com
          </h3>
        </div>

        <a
          href="mailto:kabilan.s.contact@gmail.com"
          className="bg-white text-black px-6 py-3 rounded-xl"
        >
          Send Email →
        </a>
      </div>

      {/* SOCIAL LINKS */}
      <div className="flex gap-6 mt-10 text-gray-400">
        <a href="https://github.com/Kabilan1211" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/kabilan-s-383b79224/" target="_blank">LinkedIn</a>
        <a href="https://instagram.com/kabilan_1211s" target="_blank">Instagram</a>
      </div>
    </motion.section>
  );
}