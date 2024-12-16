import { Github, Linkedin, Twitter, Mail, Phone, ExternalLink, Download, Briefcase, GraduationCap, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <main className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <div className="inline-block px-4 py-1 bg-accent rounded-full text-sm font-medium mb-4 animate-fade-up">
            Senior DevOps Engineer
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-mono">
            John Doe
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced DevOps Engineer specializing in automation, cloud infrastructure, and system optimization
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button variant="outline" className="social-link" asChild>
              <a href="mailto:kaleem@my.swjtu.edu.cn">
                <Mail size={20} />
                Email
              </a>
            </Button>
            <Button variant="outline" className="social-link" asChild>
              <a href="tel:+86-13111895637">
                <Phone size={20} />
                Call
              </a>
            </Button>
            <Button variant="outline" className="social-link" asChild>
              <a href="https://github.com/USER" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
                GitHub
              </a>
            </Button>
            <Button variant="outline" className="social-link" asChild>
              <a href="https://linkedin.com/in/USER" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="social-link" asChild>
              <a href="https://upwork.com/kaleem" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={20} />
                Upwork
              </a>
            </Button>
          </div>
        </section>

        {/* Skills Section */}
        <section className="card">
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Automation", skills: "SaltStack, Ansible, Chef, Puppet" },
              { title: "Cloud", skills: "Salt-Cloud, Linode, GCP, AWS" },
              { title: "Languages", skills: "Python, Bash, PHP, Perl, VB/C#.Net" },
              { title: "OS", skills: "Debian, Ubuntu, CentOS, BSD, AIX" },
              { title: "Policies", skills: "CIS, SOC2, PCI-DSS, GDPR, ITIL" },
              { title: "Testing", skills: "Pytest, Docker, CircleCI, Jenkins, Inspec" }
            ].map((category) => (
              <div key={category.title} className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.skills}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="card">
          <h2 className="section-title flex items-center gap-2">
            <Briefcase className="size-6" />
            Experience
          </h2>
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">Senior DevOps Engineer</h3>
                  <p className="text-muted-foreground">Consulting Corp</p>
                </div>
                <span className="text-sm text-muted-foreground">Jul 2015 - Jun 2025</span>
              </div>
              <div className="space-y-4">
                {["Notable Placement", "Challenges Unlimited", "Broken Galleries"].map((client) => (
                  <Card key={client}>
                    <CardContent className="pt-6">
                      <h4 className="font-medium mb-2">Client: {client}</h4>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        <li>Implemented cloud migration strategies and optimized performance</li>
                        <li>Automated routine tasks and improved system security</li>
                        <li>Collaborated with teams to streamline IT processes</li>
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="card">
          <h2 className="section-title flex items-center gap-2">
            <GraduationCap className="size-6" />
            Education
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Bachelor of Science in Computer Information Systems</h3>
              <p className="text-muted-foreground">State University</p>
              <p className="text-sm text-muted-foreground">Minors: Networking ; Network Security</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Certifications</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>SaltStack Certified Engineer</li>
                <li>GCP - Professional Cloud Architect</li>
              </ul>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="card">
          <h2 className="section-title flex items-center gap-2">
            <Newspaper className="size-6" />
            Latest News
          </h2>
          <div className="space-y-4">
            {[
              {
                date: "March 2024",
                title: "Joined Hospital / Health Science IRB",
                description: "Serving as non-scientific/unaffiliated patient-representative"
              },
              {
                date: "January 2024",
                title: "New Debian Package Maintenance",
                description: "Successfully maintained and reviewed new packages in Debian repositories"
              },
              {
                date: "December 2023",
                title: "Cloud Architecture Achievement",
                description: "Completed major cloud migration project for enterprise client"
              }
            ].map((news) => (
              <Card key={news.title} className="group hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-1">{news.date}</p>
                  <h3 className="font-medium group-hover:text-primary transition-colors">{news.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{news.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center space-y-6">
          <h2 className="section-title">Get in Touch</h2>
          <div className="flex justify-center gap-4">
            <Button className="social-link" asChild>
              <a href="mailto:kaleem@my.swjtu.edu.cn">
                <Mail size={20} />
                Email Me
              </a>
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