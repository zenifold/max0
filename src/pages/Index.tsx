import { Github, Linkedin, Twitter, Mail, Phone, ExternalLink, Download, Briefcase, GraduationCap, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 animate-fade-in dark:bg-[#1A1F2C] dark:text-white">
      <main className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
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
            <Button variant="outline" className="social-link hover:scale-105 transition-all duration-300 dark:border-gray-700 dark:hover:bg-gray-800" asChild>
              <a href="mailto:kaleem@my.swjtu.edu.cn">
                <Mail size={20} />
                Email
              </a>
            </Button>
            <Button variant="outline" className="social-link hover:scale-105 transition-all duration-300 dark:border-gray-700 dark:hover:bg-gray-800" asChild>
              <a href="tel:+86-13111895637">
                <Phone size={20} />
                Call
              </a>
            </Button>
            <Button variant="outline" className="social-link hover:scale-105 transition-all duration-300 dark:border-gray-700 dark:hover:bg-gray-800" asChild>
              <a href="https://github.com/USER" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
                GitHub
              </a>
            </Button>
            <Button variant="outline" className="social-link hover:scale-105 transition-all duration-300 dark:border-gray-700 dark:hover:bg-gray-800" asChild>
              <a href="https://linkedin.com/in/USER" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="social-link hover:scale-105 transition-all duration-300 dark:border-gray-700 dark:hover:bg-gray-800" asChild>
              <a href="https://upwork.com/kaleem" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={20} />
                Upwork
              </a>
            </Button>
          </div>
        </section>

        {/* Experience Section - Moved up */}
        <section className="card dark:bg-gray-800/50 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
          <h2 className="section-title flex items-center gap-2 dark:text-white">
            <Briefcase className="size-6" />
            Experience
          </h2>
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg font-mono">Senior DevOps Engineer</h3>
                  <p className="text-muted-foreground dark:text-gray-400">Consulting Corp</p>
                </div>
                <span className="text-sm text-muted-foreground dark:text-gray-400">Jul 2015 - Jun 2025</span>
              </div>
              <div className="space-y-4">
                {["Notable Placement", "Challenges Unlimited", "Broken Galleries"].map((client) => (
                  <Card key={client} className="hover:scale-[1.02] transition-all duration-300 dark:bg-gray-800/50 dark:border-gray-700">
                    <CardContent className="pt-6">
                      <h4 className="font-medium mb-2 font-mono">{client}</h4>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground dark:text-gray-400">
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

        {/* Skills Section - Moved down */}
        <section className="card dark:bg-gray-800/50 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
          <h2 className="section-title font-mono dark:text-white">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Automation", skills: "SaltStack, Ansible, Chef, Puppet" },
              { title: "Cloud", skills: "Salt-Cloud, Linode, GCP, AWS" },
              { title: "Languages", skills: "Python, Bash, PHP, Perl, VB/C#.Net" },
              { title: "OS", skills: "Debian, Ubuntu, CentOS, BSD, AIX" },
              { title: "Policies", skills: "CIS, SOC2, PCI-DSS, GDPR, ITIL" },
              { title: "Testing", skills: "Pytest, Docker, CircleCI, Jenkins, Inspec" }
            ].map((category) => (
              <div key={category.title} className="p-4 bg-muted dark:bg-gray-700/50 rounded-lg hover:scale-105 transition-all duration-300">
                <h3 className="font-semibold mb-2 font-mono">{category.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-gray-300">{category.skills}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="card dark:bg-gray-800/50 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
          <h2 className="section-title flex items-center gap-2 dark:text-white">
            <GraduationCap className="size-6" />
            Education
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold font-mono">Bachelor of Science in Computer Information Systems</h3>
              <p className="text-muted-foreground dark:text-gray-400">State University</p>
              <p className="text-sm text-muted-foreground dark:text-gray-400">Minors: Networking ; Network Security</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 font-mono">Certifications</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground dark:text-gray-400">
                <li>SaltStack Certified Engineer</li>
                <li>GCP - Professional Cloud Architect</li>
              </ul>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="card dark:bg-gray-800/50 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
          <h2 className="section-title flex items-center gap-2 dark:text-white">
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
              <Card key={news.title} className="group hover:scale-105 transition-all duration-300 dark:bg-gray-800/50 dark:border-gray-700">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground dark:text-gray-400 mb-1 font-mono">{news.date}</p>
                  <h3 className="font-medium group-hover:text-primary transition-colors font-mono">{news.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-gray-400 mt-2">{news.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center space-y-6">
          <h2 className="section-title dark:text-white">Get in Touch</h2>
          <div className="flex justify-center gap-4">
            <Button className="social-link hover:scale-105 transition-all duration-300" asChild>
              <a href="mailto:kaleem@my.swjtu.edu.cn">
                <Mail size={20} />
                Email Me
              </a>
            </Button>
            <Button variant="outline" className="social-link hover:scale-105 transition-all duration-300 dark:border-gray-700 dark:hover:bg-gray-800">
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