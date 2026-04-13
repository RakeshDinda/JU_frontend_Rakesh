import { motion } from "motion/react";

const technologies = [
  { name: "FastAPI", category: "Backend" },
  { name: "React", category: "Frontend" },
  { name: "FAISS", category: "Search" },
  { name: "Python", category: "Backend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "NumPy", category: "ML" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Vector Embeddings", category: "ML" },
];

export function TechStack() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2
          className="text-5xl font-bold mb-4 bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(to right, var(--heading-gradient-from), var(--heading-gradient-via), var(--heading-gradient-to))" }}
        >
          Technology Stack
        </h2>
        <p className="text-xl text-surface-text-secondary max-w-2xl mx-auto">
          Built with industry-leading technologies and frameworks
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="p-12 rounded-2xl bg-surface-card border border-surface-border">
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group cursor-default"
              >
                <div className="px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white shadow-md shadow-primary/10 transition-all">
                  <span className="text-sm font-semibold">{tech.name}</span>
                  <span className="text-xs text-white/70 ml-2">• {tech.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
