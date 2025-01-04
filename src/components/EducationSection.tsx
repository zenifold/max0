import { GraduationCap } from "lucide-react";

const EducationSection = () => (
  <section className="card dark:bg-gray-800/50 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01]">
    <h2 className="section-title flex items-center gap-2 dark:text-white">
      <GraduationCap className="size-6" />
      Education
    </h2>
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold font-mono">Masters of Business Administration (MBA)</h3>
        <p className="text-muted-foreground dark:text-gray-400">Quantic University</p>
        <p className="text-sm text-muted-foreground dark:text-gray-400">January 2023 - June 2024</p>
      </div>
      <div>
        <h3 className="font-semibold font-mono">Bachelors of Science, Computer Science</h3>
        <p className="text-muted-foreground dark:text-gray-400">ECPI University</p>
        <p className="text-sm text-muted-foreground dark:text-gray-400">August 2010 - June 2014</p>
      </div>
    </div>
  </section>
);

export default EducationSection;