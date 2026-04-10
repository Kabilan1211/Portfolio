import { projects } from "../data/data";
import Card from "./Card";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 px-10"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl mb-10">Things I've Built</h2>

      <div className="grid md:grid-cols-4 gap-6">
        {projects.map((p, i) => (
          <Card key={i} item={p} />
        ))}
      </div>
    </motion.section>
  );
}