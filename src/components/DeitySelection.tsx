
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DeityInfo, deities } from "@/data/deities";
import { cn } from "@/lib/utils";

interface DeitySelectionProps {
  onSelectDeity: (deity: DeityInfo) => void;
}

const DeitySelection = ({ onSelectDeity }: DeitySelectionProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Divine Guide</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {deities.map((deity) => (
          <Card 
            key={deity.id}
            onClick={() => onSelectDeity(deity)}
            className={cn(
              "cursor-pointer transition-all duration-300 hover:scale-105 overflow-hidden",
              "border-2 hover:shadow-lg hover:border-divine-purple"
            )}
          >
            <div className={`h-40 bg-${deity.color} bg-opacity-20 flex items-center justify-center`}>
              {/* Placeholder for deity image - in a real app, use actual images */}
              <div className={`w-24 h-24 rounded-full bg-${deity.color} text-white flex items-center justify-center text-2xl`}>
                {deity.name.charAt(0)}
              </div>
            </div>
            
            <CardHeader className="pb-2">
              <CardTitle>{deity.name}</CardTitle>
              <CardDescription>{deity.title}</CardDescription>
            </CardHeader>
            
            <CardContent className="text-sm">
              <p>{deity.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DeitySelection;
