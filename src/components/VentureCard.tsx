import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface VentureCardProps {
  name: string;
  headline: string;
  description: string;
  color: string;
}

export const VentureCard = ({ name, headline, description, color }: VentureCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50"
    >
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-20"
        style={{ 
          background: `radial-gradient(circle at 50% 50%, ${color}, transparent 70%)` 
        }}
      />
      
      <div className="relative p-6">
        <div 
          className="mb-4 inline-block rounded-lg px-3 py-1 text-sm font-semibold transition-all duration-300 font-orbitron"
          style={{ 
            backgroundColor: `${color}20`,
            color: color,
          }}
        >
          {name}
        </div>
        
        <h3 className="mb-3 text-xl font-bold text-foreground font-orbitron">
          {headline}
        </h3>
        
        <p className="mb-6 text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <Button 
          variant="venture"
          className="w-full group-hover:border-primary/50"
        >
          Learn More
        </Button>
      </div>
    </Card>
  );
};
