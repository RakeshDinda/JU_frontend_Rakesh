import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SearchSection } from "./components/SearchSection";
import { Features } from "./components/Features";
import { Architecture } from "./components/Architecture";
import { TechStack } from "./components/TechStack";
import { UseCases } from "./components/UseCases";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-surface-bg relative overflow-hidden transition-colors duration-300">
        {/* Subtle radial glow — primary only */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        </div>

        {/* Grid pattern overlay */}
        <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

        <Header />

        <main>
          <Hero />
          <div id="search"><SearchSection /></div>
          <div id="features"><Features /></div>
          <div id="architecture"><Architecture /></div>
          <div id="tech-stack"><TechStack /></div>
          <div id="use-cases"><UseCases /></div>
        </main>

        <Footer />
        <Toaster position="bottom-right" />
      </div>
    </ThemeProvider>
  );
}
