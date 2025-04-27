
import { Link } from "react-router-dom";
import { Flower } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-gradient-to-r from-divine-purple to-divine-purple-dark text-white">
      <Link to="/" className="flex items-center">
        <Flower className="h-8 w-8 mr-2" />
        <h1 className="text-2xl font-bold font-sanskrit">Divine Darshan</h1>
      </Link>
      
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-white hover:bg-white/20" asChild>
          <Link to="/temple">Temple</Link>
        </Button>
        <Button variant="ghost" className="text-white hover:bg-white/20" asChild>
          <Link to="/teachings">Teachings</Link>
        </Button>
        <Button 
          className="bg-divine-orange hover:bg-divine-orange/90 text-white rounded-full"
          asChild
        >
          <Link to="/temple">Begin Darshan</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
