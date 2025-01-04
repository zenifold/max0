import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Professional Scrum Product Owner (PSPO I)",
    issuer: "Scrum.org",
    date: "2023",
    verificationUrl: "https://www.scrum.org/certificates/verify",
    icon: <Award className="size-5" />
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2021",
    verificationUrl: "https://aws.amazon.com/verification",
    icon: <Award className="size-5" />
  },
  {
    title: "Certified Data Professional (CDP)",
    issuer: "ICCP",
    date: "2021",
    verificationUrl: "https://iccp.org/verify",
    icon: <Award className="size-5" />
  },
  {
    title: "Certified Associate in Project Management",
    issuer: "PMI",
    date: "2021",
    verificationUrl: "https://www.pmi.org/certifications/verify",
    icon: <Award className="size-5" />
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
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;