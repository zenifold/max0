import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <h1 className="text-4xl font-bold">Welcome to the Lovable Project</h1>
      <p className="mt-4">This is your main application page.</p>
      <p className="mt-2">Feel free to explore and make changes!</p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Feature 1: Description of feature 1</li>
          <li>Feature 2: Description of feature 2</li>
          <li>Feature 3: Description of feature 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
