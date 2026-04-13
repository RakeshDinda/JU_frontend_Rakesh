import { motion } from "motion/react";
import { Brain, Zap, Database, GitBranch, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Semantic Understanding",
    description: "Goes beyond keyword matching to understand the true meaning and context of your queries",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "FAISS-powered vector search delivers results in milliseconds, even with massive datasets",
  },
  {
    icon: Database,
    title: "Vector Embeddings",
    description: "State-of-the-art models convert all inputs into high-dimensional vector representations",
  },
  {
    icon: GitBranch,
    title: "Multi-Modal Support",
    description: "Seamlessly search across text, images, and audio in a unified interface",
  },
  {
    icon: Shield,
    title: "Scalable Architecture",
    description: "Built with FastAPI backend and React frontend for production-ready performance",
  },
  {
    icon: TrendingUp,
    title: "High Accuracy",
    description: "Advanced similarity scoring ensures the most relevant results appear first",
  }
];

export function Features() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Section Header */}
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
          Powerful Features
        </h2>
        <p className="text-xl text-surface-text-secondary max-w-2xl mx-auto">
          Built on cutting-edge AI technology to deliver the best search experience
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-6 rounded-xl bg-surface-card border border-surface-border hover:border-primary/20 transition-all">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary-muted flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-surface-text mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-surface-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
