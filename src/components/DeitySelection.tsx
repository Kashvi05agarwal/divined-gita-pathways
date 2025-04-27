
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
      <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-divine-purple to-divine-purple-dark">
        Choose Your Divine Guide
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {deities.map((deity) => (
          <Card 
            key={deity.id}
            onClick={() => onSelectDeity(deity)}
            className={cn(
              "cursor-pointer transition-all duration-300 hover:scale-105 overflow-hidden",
              "border-2 hover:shadow-lg hover:border-divine-purple group"
            )}
          >
            <div className={`h-48 relative overflow-hidden flex items-center justify-center 
              bg-gradient-to-b from-${deity.color}/10 to-${deity.color}/20`}
            >
              <img
                src={deity.imagePath}
                alt={deity.name}
                className="h-full w-full object-contain transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            
            <CardHeader className="pb-2">
              <CardTitle className={`text-${deity.color} transition-colors`}>{deity.name}</CardTitle>
              <CardDescription className="text-gray-600">{deity.title}</CardDescription>
            </CardHeader>
            
            <CardContent className="text-sm">
              <p className="text-gray-700">{deity.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DeitySelection;
