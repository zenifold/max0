import { Github, Linkedin, Twitter, Mail, Phone, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => (
  <section className="text-center space-y-4">
    <div className="inline-block px-4 py-1 bg-accent dark:bg-accent/10 rounded-full text-sm font-mono mb-4 animate-fade-up">
      Senior DevOps Engineer
    </div>
    <h1 className="text-4xl sm:text-5xl font-bold font-mono">
      John Doe
    </h1>
    <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto font-mono">
      Experienced DevOps Engineer specializing in automation, cloud infrastructure, and system optimization
    </p>
    <div className="flex flex-wrap justify-center gap-4 pt-4">
      <Button 
        variant="outline" 
        className="social-link group hover:scale-105 transition-all duration-300 dark:border-gray-700 dark:hover:bg-gray-800 hover:shadow-lg" 
        asChild
      >
        <a href="mailto:kaleem@my.swjtu.edu.cn" className="group">
          <Mail size={20} className="group-hover:rotate-12 transition-transform" />
          <span className="group-hover:translate-x-1 transition-transform">Email</span>
        </a>
      </Button>
      <Button variant="outline" className="social-link group hover:scale-105 transition-all duration-300 dark:border-gray-700 dark:hover:bg-gray-800 hover:shadow-lg" asChild>
        <a href="tel:+86-13111895637" className="group">
          <Phone size={20} className="group-hover:rotate-12 transition-transform" />
          <span className="group-hover:translate-x-1 transition-transform">Call</span>
        </a>
      </Button>
      <Button variant="outline" className="social-link group hover:scale-105 transition-all duration-300 dark:border-gray-700 dark:hover:bg-gray-800 hover:shadow-lg" asChild>
        <a href="https://github.com/USER" target="_blank" rel="noopener noreferrer" className="group">
          <Github size={20} className="group-hover:rotate-12 transition-transform" />
          <span className="group-hover:translate-x-1 transition-transform">GitHub</span>
        </a>
      </Button>
      <Button variant="outline" className="social-link group hover:scale-105 transition-all duration-300 dark:border-gray-700 dark:hover:bg-gray-800 hover:shadow-lg" asChild>
        <a href="https://linkedin.com/in/USER" target="_blank" rel="noopener noreferrer" className="group">
          <Linkedin size={20} className="group-hover:rotate-12 transition-transform" />
          <span className="group-hover:translate-x-1 transition-transform">LinkedIn</span>
        </a>
      </Button>
      <Button variant="outline" className="social-link group hover:scale-105 transition-all duration-300 dark:border-gray-700 dark:hover:bg-gray-800 hover:shadow-lg" asChild>
        <a href="https://upwork.com/kaleem" target="_blank" rel="noopener noreferrer" className="group">
          <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" />
          <span className="group-hover:translate-x-1 transition-transform">Upwork</span>
        </a>
      </Button>
    </div>
  </section>
);

export default Header;