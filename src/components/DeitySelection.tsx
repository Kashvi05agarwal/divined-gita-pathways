
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DeityInfo, deities } from "@/data/deities";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface DeitySelectionProps {
  onSelectDeity: (deity: DeityInfo) => void;
}

const DeitySelection = ({ onSelectDeity }: DeitySelectionProps) => {
  const [selectedDeityInfo, setSelectedDeityInfo] = useState<DeityInfo | null>(null);
  
  const handleInfoClick = (deity: DeityInfo, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedDeityInfo(deity === selectedDeityInfo ? null : deity);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 mandala-bg min-h-[80vh]">
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
              "border-2 hover:shadow-lg hover:border-divine-purple group relative",
              `bg-gradient-to-b from-${deity.color}/5 to-${deity.color}/10`
            )}
          >
            <div className="absolute top-2 right-2 z-10">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full bg-white/70 hover:bg-white/90"
                onClick={(e) => handleInfoClick(deity, e)}
              >
                <Info className="h-4 w-4 text-divine-purple" />
              </Button>
            </div>

            <div className="h-56 relative overflow-hidden flex items-center justify-center">
              <img
                src={deity.imagePath}
                alt={deity.name}
                className="h-full w-full object-contain transform transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  // Fallback image if the main image fails to load
                  (e.target as HTMLImageElement).src = `https://via.placeholder.com/300x200/9B87F5/FFFFFF/?text=${deity.name}`;
                }}
              />
              
              {/* Divine aura effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-${deity.color}/20 animate-pulse rounded-full scale-90 blur-xl`}></div>
              </div>
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

      {/* Deity Info Modal */}
      {selectedDeityInfo && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedDeityInfo(null)}
        >
          <div 
            className="bg-white rounded-lg shadow-xl max-w-lg w-full m-4 animate-divine-blessing"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-12 bg-${selectedDeityInfo.color}/80 rounded-t-lg flex items-center justify-center`}>
              <h3 className="text-xl font-bold text-white">{selectedDeityInfo.name} - Sacred Knowledge</h3>
            </div>
            
            <div className="p-6">
              <div className="flex mb-4">
                <div className="w-1/3">
                  <img 
                    src={selectedDeityInfo.imagePath} 
                    alt={selectedDeityInfo.name}
                    className="rounded-lg shadow-md"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/200x200/9B87F5/FFFFFF/?text=${selectedDeityInfo.name}`;
                    }}
                  />
                </div>
                <div className="w-2/3 pl-4">
                  <h4 className="font-bold mb-2">Divine Attributes:</h4>
                  {selectedDeityInfo.id === "krishna" && (
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Divine Flute Player</li>
                      <li>Giver of Bhagavad Gita</li>
                      <li>Avatar of Lord Vishnu</li>
                      <li>Master of Yoga and Dharma</li>
                    </ul>
                  )}
                  {selectedDeityInfo.id === "hanuman" && (
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Embodiment of Devotion</li>
                      <li>Supreme Strength</li>
                      <li>Vanquisher of Obstacles</li>
                      <li>Eternal Servant of Lord Rama</li>
                    </ul>
                  )}
                  {selectedDeityInfo.id === "lakshmi" && (
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Goddess of Wealth</li>
                      <li>Bestower of Fortune</li>
                      <li>Divine Consort of Vishnu</li>
                      <li>Symbolizes Prosperity and Purity</li>
                    </ul>
                  )}
                  {selectedDeityInfo.id === "ganesh" && (
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Remover of Obstacles</li>
                      <li>Lord of New Beginnings</li>
                      <li>God of Wisdom and Intelligence</li>
                      <li>Patron of Arts and Sciences</li>
                    </ul>
                  )}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-bold mb-2">Sacred Mantra:</h4>
                <div className="bg-gray-50 p-3 rounded italic text-center">
                  {selectedDeityInfo.id === "krishna" && "Om Namo Bhagavate Vasudevaya"}
                  {selectedDeityInfo.id === "hanuman" && "Om Sri Hanumate Namaha"}
                  {selectedDeityInfo.id === "lakshmi" && "Om Shreem Mahalakshmiyei Namaha"}
                  {selectedDeityInfo.id === "ganesh" && "Om Gam Ganapataye Namaha"}
                </div>
              </div>
              
              <div className="text-sm text-gray-700 mb-4">
                <h4 className="font-bold mb-2">Spiritual Significance:</h4>
                {selectedDeityInfo.id === "krishna" && (
                  <p>Lord Krishna teaches the path of dharma (righteousness) and bhakti (devotion). Through the Bhagavad Gita, he reveals the cosmic form and teaches about karma yoga, jnana yoga, and bhakti yoga.</p>
                )}
                {selectedDeityInfo.id === "hanuman" && (
                  <p>Lord Hanuman represents selfless service, unwavering devotion, and incredible strength. His life demonstrates how dedication to a higher purpose can lead to divine grace and extraordinary abilities.</p>
                )}
                {selectedDeityInfo.id === "lakshmi" && (
                  <p>Goddess Lakshmi embodies prosperity in all forms - material, spiritual, and intellectual. She teaches that true abundance comes through purity, generosity, and grace.</p>
                )}
                {selectedDeityInfo.id === "ganesh" && (
                  <p>Lord Ganesha removes obstacles but also places them when needed for our growth. He represents wisdom, intelligence, and the ability to overcome challenges on our spiritual journey.</p>
                )}
              </div>
              
              <div className="flex justify-end">
                <Button 
                  onClick={() => onSelectDeity(selectedDeityInfo)} 
                  className={`bg-${selectedDeityInfo.color} hover:bg-${selectedDeityInfo.color}/80 text-white`}
                >
                  Seek Divine Guidance
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedDeityInfo(null)}
                  className="ml-2"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animated lotus flowers */}
      <div className="fixed bottom-0 left-0 w-full h-20 overflow-hidden z-0 pointer-events-none">
        <div className="absolute -bottom-10 -left-10 w-20 h-20 opacity-10 rotate-12">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0 C22.4 0 0 22.4 0 50 C0 77.6 22.4 100 50 100 C77.6 100 100 77.6 100 50 C100 22.4 77.6 0 50 0" fill="#9B87F5" />
          </svg>
        </div>
        <div className="absolute -bottom-5 left-1/4 w-16 h-16 opacity-20 -rotate-12">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0 C22.4 0 0 22.4 0 50 C0 77.6 22.4 100 50 100 C77.6 100 100 77.6 100 50 C100 22.4 77.6 0 50 0" fill="#F97316" />
          </svg>
        </div>
        <div className="absolute -bottom-8 right-1/3 w-24 h-24 opacity-15 rotate-45">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0 C22.4 0 0 22.4 0 50 C0 77.6 22.4 100 50 100 C77.6 100 100 77.6 100 50 C100 22.4 77.6 0 50 0" fill="#FFD700" />
          </svg>
        </div>
        <div className="absolute -bottom-12 right-10 w-28 h-28 opacity-10 -rotate-22">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0 C22.4 0 0 22.4 0 50 C0 77.6 22.4 100 50 100 C77.6 100 100 77.6 100 50 C100 22.4 77.6 0 50 0" fill="#DC143C" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DeitySelection;
