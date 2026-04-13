import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BookOpen, Building2, ShoppingBag, Stethoscope, Music, Video } from "lucide-react";

const useCases = [
  {
    icon: BookOpen,
    title: "Research & Education",
    description: "Find relevant academic papers, articles, and educational content using semantic search across text and images",
    image: "https://images.unsplash.com/photo-1761740533449-b8d4385e60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXVyYWwlMjBuZXR3b3JrfGVufDF8fHx8MTc3NTYzNzY0OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Building2,
    title: "Enterprise Knowledge",
    description: "Search company documents, presentations, and internal knowledge bases with natural language queries",
    image: "https://images.unsplash.com/photo-1761912149936-8f662fc2a13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzU2NTg5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description: "Enable customers to search products using images, descriptions, or even voice commands",
    image: "https://images.unsplash.com/photo-1770322186213-f75c59326555?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGFic3RyYWN0fGVufDF8fHx8MTc3NTYzMjIxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Search medical images, patient records, and research data with advanced semantic understanding",
    image: "https://images.unsplash.com/photo-1761740533449-b8d4385e60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXVyYWwlMjBuZXR3b3JrfGVufDF8fHx8MTc3NTYzNzY0OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Music,
    title: "Media & Entertainment",
    description: "Find songs, podcasts, or audio clips based on content, mood, or spoken queries",
    image: "https://images.unsplash.com/photo-1761912149936-8f662fc2a13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzU2NTg5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Video,
    title: "Content Management",
    description: "Organize and retrieve digital assets across multiple formats and media types effortlessly",
    image: "https://images.unsplash.com/photo-1770322186213-f75c59326555?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGFic3RyYWN0fGVufDF8fHx8MTc3NTYzMjIxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  }
];

export function UseCases() {
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
          Real-World Applications
        </h2>
        <p className="text-xl text-surface-text-secondary max-w-2xl mx-auto">
          Discover how multimodal semantic search transforms various industries
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {useCases.map((useCase, index) => {
          const Icon = useCase.icon;
          return (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-2xl bg-surface-card border border-surface-border hover:border-primary/20 transition-all">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <ImageWithFallback
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-surface-text mb-2 group-hover:text-primary transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-surface-text-secondary text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
