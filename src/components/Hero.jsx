import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
    >
      {/* TEXT */}
      <div className="z-10 max-w-xl px-10">
        <h1 className="text-6xl leading-tight">
          I build systems <br />
          that <span className="gradient-text">matter.</span>
        </h1>

        <p className="text-gray-400 mt-6">
          Embedded systems, electronics, and intelligent solutions.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-6">
          <button onClick={() => scrollTo("projects")} className="bg-white text-black px-6 py-3 rounded-xl">
            View My Work
          </button>

          <a
            href="../../public/assets/resume.pdf"
            download
            className="glass px-6 py-3 rounded-xl"
          >
            Download Resume ↓
          </a>
        </div>
      </div>

      {/* IMAGE */}
      <motion.img
        src="/assets/profile.png"
        className="absolute right-0 bottom-0 h-[90vh] object-cover opacity-90"
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f17] via-[#0b0f17]/80 to-transparent z-0"></div>
    </section>
  );
}