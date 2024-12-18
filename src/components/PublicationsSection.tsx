import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import { useState } from "react";
import PublicationDetailsDialog from "./PublicationDetailsDialog";

const publications = [
  {
    title: "Advanced Neural Network Architectures for Cloud Computing",
    journal: "Journal of Cloud Computing & AI",
    year: "2024",
    authors: "Doe, J., Smith, A., Johnson, B.",
    abstract: "This paper presents novel neural network architectures specifically designed for cloud computing environments. We introduce innovative approaches to distributed training and inference that significantly improve performance while reducing computational overhead.",
    keywords: ["Neural Networks", "Cloud Computing", "Distributed Systems", "AI"],
    pdfUrl: "/papers/neural-networks-cloud.pdf",
    codeUrl: "https://github.com/example/neural-cloud"
  },
  {
    title: "Optimizing DevOps Workflows with Machine Learning",
    journal: "International Conference on Software Engineering",
    year: "2023",
    authors: "Doe, J., Williams, R.",
    abstract: "We propose a machine learning-based approach to optimize DevOps workflows, demonstrating significant improvements in deployment efficiency and error detection. Our system learns from historical deployment data to predict potential issues and suggest optimizations.",
    keywords: ["DevOps", "Machine Learning", "CI/CD", "Automation"],
    pdfUrl: "/papers/devops-ml.pdf",
    codeUrl: "https://github.com/example/devops-ml"
  },
  {
    title: "Security Implications of Containerized Microservices",
    journal: "Journal of Cybersecurity",
    year: "2023",
    authors: "Doe, J., Chen, L., Kumar, P.",
    abstract: "This research examines the security challenges and solutions in containerized microservices architectures. We present a comprehensive analysis of vulnerabilities and propose novel security patterns for container orchestration.",
    keywords: ["Security", "Containers", "Microservices", "Docker"],
    pdfUrl: "/papers/container-security.pdf",
    codeUrl: "https://github.com/example/container-security"
  },
  {
    title: "Scalable Infrastructure Monitoring Using AI",
    journal: "Cloud Computing Systems & Applications",
    year: "2022",
    authors: "Doe, J., Anderson, M.",
    abstract: "We introduce an AI-driven approach to infrastructure monitoring that scales efficiently with system size. Our solution demonstrates superior anomaly detection capabilities while maintaining low operational overhead.",
    keywords: ["Infrastructure", "Monitoring", "AI", "Scalability"],
    pdfUrl: "/papers/ai-monitoring.pdf",
    codeUrl: "https://github.com/example/ai-monitoring"
  }
];

const PublicationsSection = () => {
  const [selectedPublication, setSelectedPublication] = useState<typeof publications[0] | null>(null);

  return (
    <section className="card dark:bg-gray-800/50 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01]">
      <h2 className="section-title flex items-center gap-2 dark:text-white">
        <BookOpen className="size-6" />
        Publications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {publications.map((publication) => (
          <Card 
            key={publication.title} 
            className="group hover:scale-105 transition-all duration-300 dark:bg-gray-800/50 dark:border-gray-700 cursor-pointer"
            onClick={() => setSelectedPublication(publication)}
          >
            <CardContent className="p-6">
              <h3 className="font-semibold group-hover:text-primary transition-colors font-mono mb-2">
                {publication.title}
              </h3>
              <p className="text-sm text-muted-foreground dark:text-gray-400 mb-1">
                {publication.authors}
              </p>
              <p className="text-sm font-mono text-primary">
                {publication.journal} ({publication.year})
              </p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="mt-4 w-full group"
              >
                View Details <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <PublicationDetailsDialog
        isOpen={!!selectedPublication}
        onClose={() => setSelectedPublication(null)}
        publication={selectedPublication || publications[0]}
      />
    </section>
  );
};

export default PublicationsSection;