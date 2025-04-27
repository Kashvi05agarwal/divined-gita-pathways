
import { useState } from "react";
import { Lotus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-gradient-to-r from-divine-purple to-divine-purple-dark text-white">
      <div className="flex items-center">
        <Lotus className="h-8 w-8 mr-2" />
        <h1 className="text-2xl font-bold font-sanskrit">Divine Darshan</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-white hover:bg-white/20">
          Temple
        </Button>
        <Button variant="ghost" className="text-white hover:bg-white/20">
          Teachings
        </Button>
        <Button 
          className="bg-divine-orange hover:bg-divine-orange/90 text-white rounded-full"
        >
          Begin Darshan
        </Button>
      </div>
    </header>
  );
};

export default Header;
