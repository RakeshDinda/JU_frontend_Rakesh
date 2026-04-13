import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { ArrowRight, Server, Layers, Cpu, Code, Sparkles } from "lucide-react";

export function Architecture() {
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
          System Architecture
        </h2>
        <p className="text-xl text-surface-text-secondary max-w-2xl mx-auto">
          A robust, scalable architecture designed for performance and reliability
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Backend */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
          className="group"
        >
          <div className="h-full p-8 rounded-2xl bg-surface-card border border-surface-border hover:border-primary/20 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-muted flex items-center justify-center">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-surface-text">Backend (FastAPI)</h3>
                <p className="text-sm text-surface-text-secondary">High-performance Python API</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-surface-text mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4 text-primary" />
                  API Endpoints
                </h4>
                <div className="space-y-2">
                  {["/search_text", "/search_image", "/audio"].map((ep, i) => {
                    const labels = ["Text query processing", "Image upload & search", "Audio input handling"];
                    return (
                      <div key={ep} className="flex items-center gap-3 text-sm">
                        <Badge variant="outline" className="font-mono bg-primary-muted border-primary/20 text-primary">{ep}</Badge>
                        <span className="text-surface-text-secondary">{labels[i]}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-surface-text mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" />
                  Core Services
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {["Embedding Service", "FAISS Service", "Audio Service", "File Handler"].map((s) => (
                    <Badge key={s} className="bg-primary-muted text-primary border-primary/20 hover:bg-primary/15">{s}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-surface-text mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-primary" />
                  ML Models
                </h4>
                <div className="space-y-1 text-sm text-surface-text-secondary">
                  <p>• Text embedding models</p>
                  <p>• Image feature extraction</p>
                  <p>• Audio processing pipeline</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Frontend */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
          className="group"
        >
          <div className="h-full p-8 rounded-2xl bg-surface-card border border-surface-border hover:border-primary/20 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-muted flex items-center justify-center">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-surface-text">Frontend (React)</h3>
                <p className="text-sm text-surface-text-secondary">Modern, responsive UI</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-surface-text mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4 text-primary" />
                  Key Pages
                </h4>
                <div className="space-y-2">
                  {["Home", "Results", "Details"].map((page, i) => {
                    const labels = ["Search interface", "Display search results", "Individual result view"];
                    return (
                      <div key={page} className="flex items-center gap-3 text-sm">
                        <Badge variant="outline" className="bg-primary-muted border-primary/20 text-primary">{page}</Badge>
                        <span className="text-surface-text-secondary">{labels[i]}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-surface-text mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" />
                  Components
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {["SearchBar", "ImageUpload", "AudioInput", "ResultCard"].map((c) => (
                    <Badge key={c} className="bg-primary-muted text-primary border-primary/20 hover:bg-primary/15">{c}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-surface-text mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-primary" />
                  Tech Stack
                </h4>
                <div className="space-y-1 text-sm text-surface-text-secondary">
                  <p>• React 18 with TypeScript</p>
                  <p>• Tailwind CSS for styling</p>
                  <p>• React Router for navigation</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Data Flow */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="p-8 rounded-2xl bg-surface-card border border-surface-border">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-surface-text mb-2 flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              Data Flow Pipeline
            </h3>
            <p className="text-surface-text-secondary">How your search query travels through the system</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center">
            {[
              { emoji: "📥", title: "Input", desc: "User uploads text, image, or audio" },
              { emoji: "🔄", title: "Process", desc: "Generate vector embeddings" },
              { emoji: "🔍", title: "Search", desc: "FAISS similarity matching" },
              { emoji: "📤", title: "Results", desc: "Ranked, relevant matches" },
            ].map((step, i) => (
              <div key={step.title} className="flex items-center gap-6 flex-1">
                <motion.div whileHover={{ y: -4 }} className="flex-1">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-primary-muted flex items-center justify-center">
                    <span className="text-2xl">{step.emoji}</span>
                  </div>
                  <h4 className="font-semibold text-surface-text mb-1">{step.title}</h4>
                  <p className="text-sm text-surface-text-secondary">{step.desc}</p>
                </motion.div>
                {i < 3 && <ArrowRight className="w-6 h-6 text-surface-text-tertiary rotate-90 sm:rotate-0 flex-shrink-0" />}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
