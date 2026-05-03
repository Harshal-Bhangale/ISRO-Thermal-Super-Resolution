import { Satellite } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Dashboard" },
    { path: "/upload", label: "Upload" },
    { path: "/processing", label: "Processing" },
    { path: "/analytics", label: "Analytics" },
    { path: "/reports", label: "Reports" },
  ];

  return (
    <header className="border-b border-border bg-card shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2 rounded-lg bg-gradient-accent">
              <Satellite className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">ISRO OptiTherma (Team Synaptic Surge)</h1>
              <p className="text-xs text-muted-foreground">Super-Resolution System</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">Dr. Researcher</p>
              <p className="text-xs text-muted-foreground">Research Analyst</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-accent flex items-center justify-center text-white font-semibold">
              DR
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
