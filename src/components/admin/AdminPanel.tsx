import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminPanel = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("projects");

  const handleSave = (section: string) => {
    toast({
      title: "Changes saved",
      description: `${section} has been updated successfully`,
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      
      <Tabs defaultValue="projects" className="space-y-4">
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="publications">Publications</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-4">
          <h3 className="text-xl font-semibold">Edit Projects</h3>
          <div className="space-y-4">
            <Input placeholder="Project Title" />
            <Textarea placeholder="Project Description" />
            <Input placeholder="Technologies Used" />
            <Input placeholder="GitHub URL" />
            <Input placeholder="Demo URL" />
            <Button onClick={() => handleSave("Projects")}>Save Project</Button>
          </div>
        </TabsContent>

        <TabsContent value="publications" className="space-y-4">
          <h3 className="text-xl font-semibold">Edit Publications</h3>
          <div className="space-y-4">
            <Input placeholder="Publication Title" />
            <Input placeholder="Authors" />
            <Input placeholder="Journal/Conference" />
            <Input placeholder="Year" />
            <Textarea placeholder="Abstract" />
            <Button onClick={() => handleSave("Publications")}>Save Publication</Button>
          </div>
        </TabsContent>

        <TabsContent value="skills" className="space-y-4">
          <h3 className="text-xl font-semibold">Edit Skills</h3>
          <div className="space-y-4">
            <Input placeholder="Skill Category" />
            <Input placeholder="Skills (comma-separated)" />
            <Button onClick={() => handleSave("Skills")}>Save Skills</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPanel;