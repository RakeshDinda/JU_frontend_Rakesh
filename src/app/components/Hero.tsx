import { motion, useScroll, useTransform } from "motion/react";
import { Cpu, ArrowRight, Search, Layers, Zap } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle ambient orb — primary only */}
      <motion.div
        style={{ y }}
        className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]"
      />
      <motion.div
        style={{ y }}
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"
      />

      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ─── Left Column ─── */}
          <div className="max-w-xl">
            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-primary border border-primary/20 rounded-full bg-primary-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                AI-Powered Semantic Search
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8"
            >
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to bottom, var(--heading-gradient-from), var(--heading-gradient-via))" }}
              >
                Multimodal Semantic
              </span>
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to right, var(--heading-gradient-via), var(--heading-gradient-to))" }}
              >
                Retrieval System
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
              className="text-lg text-surface-text-secondary mb-4 font-light leading-relaxed"
            >
              Search beyond keywords with AI-powered semantic understanding.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
              className="text-sm text-surface-text-tertiary mb-12 font-light leading-relaxed max-w-md"
            >
              Upload text, images, or audio and discover relevant results using advanced vector embeddings and FAISS indexing.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7, ease: "easeOut" }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-hover text-white px-8 py-6 text-sm font-medium tracking-wide rounded-xl transition-colors duration-200 shadow-md shadow-primary/15"
                onClick={() => document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Cpu className="w-4 h-4 mr-2" />
                Start Searching
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-surface-border bg-transparent hover:bg-surface-hover text-surface-text-secondary hover:text-surface-text px-8 py-6 text-sm font-medium tracking-wide rounded-xl transition-colors duration-200"
              >
                View Documentation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            {/* Modality Pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: "📝", label: "Text Search" },
                { icon: "🖼️", label: "Image Search" },
                { icon: "🎤", label: "Audio Search" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -2 }}
                  className="px-5 py-3 rounded-xl bg-surface-card border border-surface-border hover:border-primary/30 transition-colors duration-200 cursor-pointer"
                >
                  <span className="text-lg mr-2.5">{item.icon}</span>
                  <span className="text-surface-text-secondary text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ─── Right Column ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="hidden lg:flex flex-col gap-5"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "3", label: "Modalities", icon: Layers },
                { value: "99.9%", label: "Accuracy", icon: Zap },
                { value: "<50ms", label: "Response", icon: Search },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -3 }}
                  className="p-5 rounded-2xl bg-surface-card border border-surface-border hover:border-primary/20 transition-all text-center"
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-3" />
                  <div className="text-xl font-semibold text-surface-text mb-1">{stat.value}</div>
                  <div className="text-xs text-surface-text-tertiary uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Pipeline preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
              className="p-6 rounded-2xl bg-surface-card border border-surface-border"
            >
              <div className="text-xs text-surface-text-tertiary uppercase tracking-wider mb-4 font-medium">How it works</div>
              <div className="flex items-center gap-3">
                {[
                  { step: "Upload", emoji: "📥" },
                  { step: "Embed", emoji: "🔄" },
                  { step: "Search", emoji: "🔍" },
                  { step: "Results", emoji: "📤" },
                ].map((item, i) => (
                  <div key={item.step} className="flex items-center gap-3 flex-1">
                    <div className="flex flex-col items-center gap-2 flex-1">
                      <div className="w-11 h-11 rounded-xl bg-primary-muted flex items-center justify-center">
                        <span className="text-lg">{item.emoji}</span>
                      </div>
                      <span className="text-xs text-surface-text-secondary font-medium">{item.step}</span>
                    </div>
                    {i < 3 && (
                      <ArrowRight className="w-3.5 h-3.5 text-surface-text-tertiary flex-shrink-0 -mt-5" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
              className="flex flex-wrap gap-2"
            >
              {["FastAPI", "React", "FAISS", "Python", "TypeScript"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium text-surface-text-secondary bg-surface-card border border-surface-border rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile-only Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="lg:hidden mt-16 grid grid-cols-3 gap-6 max-w-sm"
        >
          {[
            { value: "3", label: "Modalities" },
            { value: "99.9%", label: "Accuracy" },
            { value: "<50ms", label: "Response" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl font-semibold text-surface-text mb-1">{stat.value}</div>
              <div className="text-xs text-surface-text-tertiary uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border border-surface-border rounded-full flex justify-center pt-1.5"
        >
          <motion.div className="w-1 h-1 bg-surface-text-tertiary rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}
