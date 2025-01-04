import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeaderSection = () => (
  <section className="text-center space-y-4">
    <div className="inline-block px-4 py-1 bg-accent dark:bg-accent/10 rounded-full text-sm font-mono mb-4 animate-fade-up">
      Director of Product Management
    </div>
    <h1 className="text-4xl sm:text-5xl font-bold font-mono">
      Maximilian Murphy
    </h1>
    <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto font-mono">
      Highly accomplished product and program leader with a proven track record of driving innovation, leading cross-functional teams, and delivering impactful results.
    </p>
    <div className="flex flex-wrap justify-center gap-4 pt-4">
      <Button 
        variant="outline" 
        className="social-link group hover:scale-105 transition-all duration-300 dark:border-gray-700 dark:hover:bg-gray-800 hover:shadow-lg" 
        asChild
      >
        <a href="mailto:maxkmurphy@gmail.com" className="group">
          <Mail size={20} className="group-hover:rotate-12 transition-transform" />
          <span className="group-hover:translate-x-1 transition-transform">Email</span>
        </a>
      </Button>
      <Button variant="outline" className="social-link group hover:scale-105 transition-all duration-300 dark:border-gray-700 dark:hover:bg-gray-800 hover:shadow-lg" asChild>
        <a href="tel:757-620-7239" className="group">
          <Phone size={20} className="group-hover:rotate-12 transition-transform" />
          <span className="group-hover:translate-x-1 transition-transform">Call</span>
        </a>
      </Button>
      <Button variant="outline" className="social-link group hover:scale-105 transition-all duration-300 dark:border-gray-700 dark:hover:bg-gray-800 hover:shadow-lg" asChild>
        <a href="https://github.com/zenifold" target="_blank" rel="noopener noreferrer" className="group">
          <Github size={20} className="group-hover:rotate-12 transition-transform" />
          <span className="group-hover:translate-x-1 transition-transform">GitHub</span>
        </a>
      </Button>
      <Button variant="outline" className="social-link group hover:scale-105 transition-all duration-300 dark:border-gray-700 dark:hover:bg-gray-800 hover:shadow-lg" asChild>
        <a href="https://linkedin.com/in/maximilian-murphy" target="_blank" rel="noopener noreferrer" className="group">
          <Linkedin size={20} className="group-hover:rotate-12 transition-transform" />
          <span className="group-hover:translate-x-1 transition-transform">LinkedIn</span>
        </a>
      </Button>
    </div>
  </section>
);

export default HeaderSection;