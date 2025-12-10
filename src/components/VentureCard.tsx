import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface VentureCardProps {
  name: string;
  headline: string;
  description: string;
  color: string;
  fullDescription?: string;
  features?: string[];
}

export const VentureCard = ({ name, headline, description, color, fullDescription, features }: VentureCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
            onClick={() => setIsOpen(true)}
          >
            Learn More
          </Button>
        </div>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl bg-card border-border/50 backdrop-blur-xl">
          <DialogHeader>
            <div 
              className="mb-2 inline-block rounded-lg px-4 py-2 text-sm font-semibold font-orbitron w-fit"
              style={{ 
                backgroundColor: `${color}20`,
                color: color,
              }}
            >
              {name}
            </div>
            <DialogTitle className="text-2xl font-bold font-orbitron text-foreground">
              {headline}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base leading-relaxed pt-4">
              {fullDescription || description}
            </DialogDescription>
          </DialogHeader>
          
          {features && features.length > 0 && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold font-orbitron mb-4 text-foreground">
                Key Features
              </h4>
              <div className="flex flex-wrap gap-2">
                {features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: `${color}15`,
                      color: color,
                      border: `1px solid ${color}30`,
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none rounded-lg"
            style={{ 
              background: `radial-gradient(circle at 0% 0%, ${color}, transparent 50%)` 
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};
