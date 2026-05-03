import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ActionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  buttonText: string;
}

const ActionCard = ({ title, description, icon: Icon, href, buttonText }: ActionCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="p-6 hover:shadow-card transition-all duration-300 group cursor-pointer">
      <div className="flex flex-col h-full">
        <div className="p-3 rounded-lg bg-secondary w-fit mb-4 group-hover:bg-accent group-hover:shadow-glow transition-all">
          <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{description}</p>
        <Button 
          onClick={() => navigate(href)}
          className="w-full bg-primary hover:bg-primary/90"
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default ActionCard;
