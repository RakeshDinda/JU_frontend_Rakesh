import { Github, Linkedin, Mail, ExternalLink, Search, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-surface-border bg-surface-overlay backdrop-blur-xl">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md shadow-primary/15">
                <Search className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-surface-text">MSRS</h3>
            </div>
            <p className="text-sm text-surface-text-secondary mb-6 leading-relaxed max-w-md">
              An advanced AI-powered search system that understands the semantic meaning of text, images, and audio to deliver highly relevant results using state-of-the-art embeddings.
            </p>
            <div className="flex gap-3">
              {[Github, Mail, Linkedin, Mail].map((Icon, i) => (
                <motion.div key={i} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-surface-card border-surface-border hover:bg-surface-hover hover:border-primary/30 text-surface-text-secondary hover:text-surface-text transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-surface-text mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["Features", "Architecture", "Use Cases", "Tech Stack"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-surface-text-secondary hover:text-primary transition-colors hover:pl-2 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-surface-text mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              {["Documentation", "API Reference", "GitHub", "Support"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-surface-text-secondary hover:text-primary transition-colors flex items-center gap-2 hover:pl-2">
                    {item}
                    {item !== "Support" && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-surface-text-tertiary flex items-center gap-2">
            © 2026 MSRS. Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by AI enthusiasts
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Contact"].map((link) => (
              <a key={link} href="#" className="text-surface-text-tertiary hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
