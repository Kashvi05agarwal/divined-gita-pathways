
import { useState } from "react";
import { DeityInfo } from "@/data/deities";
import DeitySelection from "./DeitySelection";
import ConversationInterface from "./ConversationInterface";
import { Lotus, Temple as TempleIcon } from "lucide-react";

const TempleEntrance = ({ onEnterTemple }: { onEnterTemple: () => void }) => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center mandala-bg animate-divine-blessing">
      <div className="text-divine-purple mb-4">
        <Lotus className="h-16 w-16 mx-auto" />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-divine-purple to-divine-purple-dark">
        Divine Darshan 2.0
      </h1>
      
      <p className="text-lg md:text-xl text-center max-w-2xl mb-8 text-gray-700">
        Not Just Darshan — but Divine Teachings for Your Life
      </p>
      
      <button
        onClick={onEnterTemple}
        className="px-8 py-3 bg-gradient-to-r from-divine-purple to-divine-purple-dark text-white rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center"
      >
        <TempleIcon className="mr-2 h-5 w-5" />
        Enter Divine Temple
      </button>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-md border border-divine-purple/20">
          <h3 className="font-semibold text-lg mb-2 text-divine-purple">Gita Wisdom Drops</h3>
          <p className="text-gray-700">Receive personalized Bhagavad Gita shlokas for your situation with simple applications for daily life.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-divine-purple/20">
          <h3 className="font-semibold text-lg mb-2 text-divine-purple">Divine Stories</h3>
          <p className="text-gray-700">Learn from the personal struggles and triumphs of deities, connecting ancient wisdom to modern challenges.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-divine-purple/20">
          <h3 className="font-semibold text-lg mb-2 text-divine-purple">Spiritual Path Guidance</h3>
          <p className="text-gray-700">Receive personalized guidance on your spiritual journey, whether through Bhakti, Karma, Jnana, or Dhyana.</p>
        </div>
      </div>
    </div>
  );
};

const Temple = () => {
  const [templeState, setTempleState] = useState<"entrance" | "selection" | "conversation">("entrance");
  const [selectedDeity, setSelectedDeity] = useState<DeityInfo | null>(null);
  
  const handleEnterTemple = () => {
    setTempleState("selection");
  };
  
  const handleSelectDeity = (deity: DeityInfo) => {
    setSelectedDeity(deity);
    setTempleState("conversation");
  };
  
  const handleBackToSelection = () => {
    setTempleState("selection");
  };
  
  return (
    <div className="min-h-screen bg-divine-purple-light/10">
      {templeState === "entrance" && <TempleEntrance onEnterTemple={handleEnterTemple} />}
      
      {templeState === "selection" && <DeitySelection onSelectDeity={handleSelectDeity} />}
      
      {templeState === "conversation" && selectedDeity && (
        <div className="w-full max-w-4xl mx-auto p-4">
          <ConversationInterface selectedDeity={selectedDeity} onBack={handleBackToSelection} />
        </div>
      )}
    </div>
  );
};

export default Temple;
