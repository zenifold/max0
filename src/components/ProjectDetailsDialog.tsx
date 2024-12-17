import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    fullDescription?: string;
    tech: string;
    demoUrl?: string;
    githubUrl?: string;
    features?: string[];
    impact?: string;
  };
}

const ProjectDetailsDialog = ({ isOpen, onClose, project }: ProjectDetailsDialogProps) => {
  // Early return if no project to prevent undefined errors
  if (!project) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-sm border border-[#E5DEFF] dark:bg-gray-800/95 dark:border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-mono">{project.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <p className="text-muted-foreground dark:text-gray-300">
            {project.fullDescription || project.description}
          </p>

          {project.features && project.features.length > 0 && (
            <div className="space-y-2">
              <h3 className="font-semibold font-mono">Key Features</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground dark:text-gray-300">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.impact && (
            <div className="space-y-2">
              <h3 className="font-semibold font-mono">Impact</h3>
              <p className="text-muted-foreground dark:text-gray-300">{project.impact}</p>
            </div>
          )}

          {project.tech && (
            <div className="space-y-2">
              <h3 className="font-semibold font-mono">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.split(', ').map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-accent/50">{tech}</Badge>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            {project.demoUrl && (
              <Button asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="group">
                  <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  View Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="group">
                  <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsDialog;