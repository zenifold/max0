import { Github, Linkedin, Twitter, Mail, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <main className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <div className="inline-block px-4 py-1 bg-accent rounded-full text-sm font-medium mb-4 animate-fade-up">
            PhD Research Fellow
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-mono">
            John Doe
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of Machine Learning and Quantum Computing at Stanford University
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button variant="outline" className="social-link">
              <Github size={20} />
              GitHub
            </Button>
            <Button variant="outline" className="social-link">
              <Linkedin size={20} />
              LinkedIn
            </Button>
            <Button variant="outline" className="social-link">
              <Twitter size={20} />
              Twitter
            </Button>
          </div>
        </section>

        {/* Research Interests */}
        <section className="card">
          <h2 className="section-title">Research Interests</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Quantum Computing", "Machine Learning", "Algorithm Design", "Data Science"].map((interest) => (
              <div key={interest} className="p-4 bg-muted rounded-lg font-mono text-sm">
                {interest}
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section className="card">
          <h2 className="section-title">Selected Publications</h2>
          <div className="space-y-6">
            {[
              {
                title: "Quantum Machine Learning Algorithms: A Comprehensive Review",
                journal: "Nature Quantum Computing",
                year: "2023",
                link: "#",
              },
              {
                title: "Novel Approaches to Quantum Error Correction",
                journal: "Physical Review Letters",
                year: "2022",
                link: "#",
              },
            ].map((pub) => (
              <div key={pub.title} className="group p-4 rounded-lg hover:bg-muted transition-all duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {pub.journal} • {pub.year}
                    </p>
                  </div>
                  <a href={pub.link} className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="card">
          <h2 className="section-title">Education</h2>
          <div className="space-y-6">
            <div className="relative pl-6 border-l-2 border-accent pb-6">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2" />
              <h3 className="font-medium">PhD in Quantum Computing</h3>
              <p className="text-sm text-muted-foreground">Stanford University • 2021 - Present</p>
            </div>
            <div className="relative pl-6 border-l-2 border-accent">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2" />
              <h3 className="font-medium">MSc in Computer Science</h3>
              <p className="text-sm text-muted-foreground">MIT • 2019 - 2021</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center space-y-6">
          <h2 className="section-title">Get in Touch</h2>
          <div className="flex justify-center gap-4">
            <Button className="social-link">
              <Mail size={20} />
              Email Me
            </Button>
            <Button variant="outline" className="social-link">
              <Download size={20} />
              Download CV
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;