import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Medal, ExternalLink } from "lucide-react";
import { useState } from "react";

const certifications = [
  {
    title: "SaltStack Certified Engineer",
    issuer: "SaltStack",
    date: "2023",
    verificationUrl: "https://verify.example.com/salt-123",
    icon: <Award className="size-5" />
  },
  {
    title: "GCP - Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2022",
    verificationUrl: "https://verify.example.com/gcp-456",
    icon: <Medal className="size-5" />
  },
  {
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    verificationUrl: "https://verify.example.com/aws-789",
    icon: <Award className="size-5" />
  },
  {
    title: "Azure Cloud Administrator",
    issuer: "Microsoft",
    date: "2024",
    verificationUrl: "https://verify.example.com/azure-012",
    icon: <Medal className="size-5" />
  }
];

const CertificationsSection = () => {
  return (
    <section className="card dark:bg-gray-800/50 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01]">
      <h2 className="section-title flex items-center gap-2 dark:text-white">
        <Award className="size-6" />
        Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <Card key={cert.title} className="group hover:scale-105 transition-all duration-300 dark:bg-gray-800/50 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                {cert.icon}
                <h3 className="font-semibold group-hover:text-primary transition-colors font-mono">{cert.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground dark:text-gray-400">{cert.issuer}</p>
              <p className="text-xs font-mono text-primary mt-2">{cert.date}</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-4 w-full group"
                onClick={() => window.open(cert.verificationUrl, '_blank')}
              >
                Verify Certificate <ExternalLink className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;