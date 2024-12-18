import { useState } from "react";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminPanel from "@/components/admin/AdminPanel";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      {!isLoggedIn ? (
        <AdminLogin onLogin={setIsLoggedIn} />
      ) : (
        <AdminPanel />
      )}
    </div>
  );
};

export default Admin;