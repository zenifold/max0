import { Briefcase, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AiBackground from "@/components/AiBackground";
import HeaderSection from "@/components/HeaderSection";
import CertificationsSection from "@/components/CertificationsSection";
import EducationSection from "@/components/EducationSection";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <AiBackground />
      <div className="relative mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen py-12 animate-fade-in dark:bg-[#1A1F2C] dark:text-white space-y-16">
          <HeaderSection />
          
          {/* Experience Section */}
          <section className="card dark:bg-gray-800/50 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
            <h2 className="section-title flex items-center gap-2 dark:text-white">
              <Briefcase className="size-6" />
              Experience
            </h2>
            <div className="space-y-8">
              {[
                {
                  role: "Director of Product Management (US Market)",
                  company: "SourceFuse",
                  period: "January 2025 - Present",
                  location: "Jacksonville FL (Remote, VA)",
                  achievements: [
                    "Direct the entire US client portfolio, overseeing a team of 6 direct reports each managing their own client engagements",
                    "Lead internal product innovation initiatives, building proof-of-concepts (PoCs)",
                    "Continue to direct full-cycle product development and implementation"
                  ]
                },
                {
                  role: "Senior Program Manager",
                  company: "SourceFuse",
                  period: "March 2024 - January 2025",
                  location: "Jacksonville FL (Remote, VA)",
                  achievements: [
                    "Managed a high-value portfolio of clients generating over $6M in net profit annually",
                    "Served as a strategic partner with clients to translate complex business requirements",
                    "Provided expertise in making technical design decisions"
                  ]
                },
                {
                  role: "Principal Product Manager",
                  company: "Relief Financial",
                  period: "February 2023 - January 2024",
                  location: "Miami FL (Remote, VA)",
                  achievements: [
                    "Second product hire at an early stage FinTech startup",
                    "Validated product-market fit, scoped MVP requirements",
                    "Prioritized ML/AI capabilities, increasing prediction accuracy by 35%"
                  ]
                }
              ].map((exp) => (
                <Card key={exp.role} className="hover:scale-[1.02] transition-all duration-300 dark:bg-gray-800/50 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <h3 className="font-semibold text-lg font-mono">{exp.role}</h3>
                        <p className="text-muted-foreground dark:text-gray-400">{exp.company}</p>
                        <p className="text-sm text-muted-foreground dark:text-gray-400">{exp.location}</p>
                      </div>
                      <span className="text-sm text-muted-foreground dark:text-gray-400">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-2 mt-4 text-sm text-muted-foreground dark:text-gray-400">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="hover:translate-x-1 transition-transform">{achievement}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="card dark:bg-gray-800/50 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01]">
            <h2 className="section-title flex items-center gap-2 dark:text-white">
              <Terminal className="size-6" />
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: "Product", skills: "Product Strategy, Product Development, UX Research" },
                { title: "Technical", skills: "AWS Services, SaaS Infrastructure, Enterprise Architecture" },
                { title: "Management", skills: "Agile Project Management, Team Collaboration, Change Management" },
                { title: "Development", skills: "Front-End & Back-End Web Development, SDLC" },
                { title: "Design", skills: "Systems & Design Thinking, UX/UI" },
                { title: "Innovation", skills: "AI Technology, Marketing Technology" }
              ].map((category) => (
                <div key={category.title} 
                     className="p-4 bg-muted dark:bg-gray-700/50 rounded-lg 
                              transform hover:scale-105 hover:bg-accent 
                              transition-all duration-300 cursor-pointer">
                  <h3 className="font-semibold mb-2 font-mono">{category.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-gray-300">{category.skills}</p>
                </div>
              ))}
            </div>
          </section>

          <CertificationsSection />
          <EducationSection />
        </div>
      </div>
    </div>
  );
};

export default Index;