import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Github } from "lucide-react";

interface PublicationDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  publication: {
    title: string;
    journal: string;
    year: string;
    authors: string;
    abstract?: string;
    keywords?: string[];
    pdfUrl?: string;
    codeUrl?: string;
  };
}

const PublicationDetailsDialog = ({ isOpen, onClose, publication }: PublicationDetailsDialogProps) => {
  if (!publication) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-sm border border-[#E5DEFF] dark:bg-gray-800/95 dark:border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-mono">{publication.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground dark:text-gray-400 mb-2">{publication.authors}</p>
            <p className="text-sm font-mono text-primary">{publication.journal} ({publication.year})</p>
          </div>

          {publication.abstract && (
            <div className="space-y-2">
              <h3 className="font-semibold font-mono">Abstract</h3>
              <p className="text-muted-foreground dark:text-gray-300">
                {publication.abstract}
              </p>
            </div>
          )}

          {publication.keywords && publication.keywords.length > 0 && (
            <div className="space-y-2">
              <h3 className="font-semibold font-mono">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {publication.keywords.map((keyword) => (
                  <Badge key={keyword} variant="secondary" className="bg-accent/50">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            {publication.pdfUrl && (
              <Button asChild>
                <a href={publication.pdfUrl} target="_blank" rel="noopener noreferrer" className="group">
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  Download PDF
                </a>
              </Button>
            )}
            {publication.codeUrl && (
              <Button variant="outline" asChild>
                <a href={publication.codeUrl} target="_blank" rel="noopener noreferrer" className="group">
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

export default PublicationDetailsDialog;