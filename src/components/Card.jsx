import { useState } from "react";
import { motion } from "framer-motion";

export default function Card({ item }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full h-80 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div className="absolute w-full h-full glass p-5 backface-hidden">
          <img
            src={item.image}
            className="rounded-xl mb-4 h-36 w-full object-cover"
          />
          <h3 className="text-lg">{item.title}</h3>
          <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
        </div>

        {/* BACK */}
        <div className="absolute w-full h-full glass p-5 rotate-y-180 backface-hidden flex flex-col justify-between">
          <div>
            <h3 className="text-lg mb-2">Details</h3>
            <p className="text-gray-400 text-sm">
              {item.details || "More details about the project."}
            </p>
          </div>

          <a
            href={item.github}
            target="_blank"
            className="bg-white text-black px-4 py-2 rounded-lg text-center"
          >
            View Code →
          </a>
        </div>
      </motion.div>
    </div>
  );
}