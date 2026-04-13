import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Search, Menu, X, User, BookOpen, Sparkles, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "motion/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useTheme } from "./ThemeContext";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-surface-overlay backdrop-blur-xl border-b border-surface-border shadow-sm"
          : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-md shadow-primary/20 group-hover:shadow-primary/30 transition-shadow">
              <Search className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="font-bold text-lg text-surface-text hidden sm:inline">MSRS</span>
              <span className="text-xs text-surface-text-tertiary hidden lg:inline">Semantic Search</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Features", "Try It", "Architecture", "Use Cases"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-surface-text-secondary hover:text-surface-text transition-colors relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* CTA Buttons, Theme Toggle & User Menu */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-surface-text-secondary hover:text-surface-text hover:bg-surface-hover"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Docs
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="relative w-9 h-9 rounded-lg text-surface-text-secondary hover:text-surface-text hover:bg-surface-hover transition-colors"
              aria-label="Toggle theme"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.div>
            </Button>

            <Button
              size="sm"
              className="bg-primary hover:bg-primary-hover text-white shadow-md shadow-primary/15 hover:shadow-primary/25 transition-all"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Get Started
            </Button>

            {/* User Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-surface-hover">
                  <Avatar className="w-8 h-8 border-2 border-primary/30">
                    <AvatarFallback className="bg-primary text-white text-xs">
                      JD
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-popover backdrop-blur-xl border-surface-border">
                <DropdownMenuLabel className="text-surface-text-secondary">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-surface-border" />
                <DropdownMenuItem className="text-surface-text-secondary hover:text-surface-text hover:bg-surface-hover cursor-pointer">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-surface-text-secondary hover:text-surface-text hover:bg-surface-hover cursor-pointer">
                  Saved Searches
                </DropdownMenuItem>
                <DropdownMenuItem className="text-surface-text-secondary hover:text-surface-text hover:bg-surface-hover cursor-pointer">
                  Analytics
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-surface-border" />
                <DropdownMenuItem className="text-surface-text-secondary hover:text-surface-text hover:bg-surface-hover cursor-pointer">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive hover:bg-destructive/10 cursor-pointer">
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-surface-hover transition-colors text-surface-text-secondary"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-surface-hover transition-colors text-surface-text"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-surface-border bg-surface-overlay backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-3">
              {["Features", "Try It", "Architecture", "Use Cases"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="block py-2 text-sm font-medium text-surface-text-secondary hover:text-surface-text transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <Button variant="outline" size="sm" className="w-full border-surface-border bg-surface-card text-surface-text hover:bg-surface-hover">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Documentation
                </Button>
                <Button size="sm" className="w-full bg-primary hover:bg-primary-hover text-white">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
