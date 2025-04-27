
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import DivineParticles from "./DivineParticles";
import { DeityInfo, DivineResponse, SpiritualPath, divineStories, shlokas } from "@/data/deities";
import { Heart, Send, Book, BookOpen } from "lucide-react";

interface ConversationInterfaceProps {
  selectedDeity: DeityInfo;
  onBack: () => void;
}

interface MessageProps {
  isUser: boolean;
  content: string;
  timestamp: Date;
}

interface DivineMessageProps extends MessageProps {
  divineResponse?: DivineResponse;
  showBlessing: boolean;
}

const generateRandomResponse = (deityId: string, userMessage: string): DivineResponse => {
  // In a real app, this would be an API call to a backend that processes the user's message
  // and returns a meaningful response based on NLP and the deity's personality
  const lowerMessage = userMessage.toLowerCase();
  
  // Simple keyword matching for this demo
  let shlokaCategory = "guidance";
  let pathType: SpiritualPath = "Bhakti";
  
  if (lowerMessage.includes("fear") || lowerMessage.includes("afraid") || lowerMessage.includes("worry")) {
    shlokaCategory = "guidance";
    pathType = "Karma";
  } else if (lowerMessage.includes("sad") || lowerMessage.includes("hurt") || lowerMessage.includes("pain") || lowerMessage.includes("loss")) {
    shlokaCategory = "struggle";
    pathType = "Jnana";
  } else if (lowerMessage.includes("love") || lowerMessage.includes("devotion")) {
    shlokaCategory = "devotion";
    pathType = "Bhakti";
  } else if (lowerMessage.includes("mind") || lowerMessage.includes("peace") || lowerMessage.includes("calm")) {
    shlokaCategory = "struggle";
    pathType = "Dhyana";
  }
  
  // Get a random shloka from the category
  const randomShlokaIndex = Math.floor(Math.random() * shlokas[shlokaCategory].length);
  const shloka = shlokas[shlokaCategory][randomShlokaIndex];
  
  // Get a random story for the deity
  const stories = divineStories[deityId] || divineStories["krishna"];
  const randomStoryIndex = Math.floor(Math.random() * stories.length);
  const story = stories[randomStoryIndex];
  
  // Generate guidance based on the path
  let guidance = "";
  switch(pathType) {
    case "Bhakti":
      guidance = "Chant my name with love and devotion for 10 minutes today.";
      break;
    case "Karma":
      guidance = "Perform one selfless act of service today without expecting anything in return.";
      break;
    case "Jnana":
      guidance = "Meditate on this shloka for 5 minutes, contemplating its deeper meaning.";
      break;
    case "Dhyana":
      guidance = "Sit in silence for 10 minutes, focusing only on your breath.";
      break;
  }
  
  // Generate a response based on the deity and user message
  let response = "";
  
  if (deityId === "krishna") {
    response = `Dear devotee, I hear your heart. The wheel of time turns for all beings, but remember that I am always with you.`;
  } else if (deityId === "hanuman") {
    response = `With the strength of devotion, all obstacles can be overcome. I stand ready to help you, as I did for Lord Rama.`;
  } else if (deityId === "lakshmi") {
    response = `Blessings of abundance flow to those with pure hearts. Your prosperity is not just material, but spiritual.`;
  } else if (deityId === "ganesh") {
    response = `New beginnings require removing obstacles first. I shall clear your path as you move forward with faith.`;
  }
  
  return {
    message: response,
    shloka,
    application: `This teaching reminds us that ${shloka.translation.toLowerCase()} Apply this wisdom by remaining steadfast in your duties.`,
    story,
    path: {
      type: pathType,
      guidance
    }
  };
};

const UserMessage = ({ content, timestamp }: MessageProps) => {
  return (
    <div className="flex items-start justify-end mb-4">
      <div className="mr-2 max-w-[80%]">
        <div className="bg-divine-purple text-white p-3 rounded-lg rounded-tr-none shadow">
          <p>{content}</p>
        </div>
        <p className="text-xs text-gray-500 mt-1 text-right">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
      <div className="w-8 h-8 rounded-full bg-divine-purple flex items-center justify-center text-white">
        Y
      </div>
    </div>
  );
};

const DivineMessage = ({ content, timestamp, divineResponse, showBlessing }: DivineMessageProps) => {
  return (
    <div className="flex items-start mb-6 relative">
      <div className="w-10 h-10 rounded-full bg-divine-gold flex items-center justify-center text-divine-purple mr-2">
        D
      </div>
      <div className="max-w-[85%]">
        <div className="bg-white border border-divine-purple/30 p-4 rounded-lg rounded-tl-none shadow relative overflow-hidden">
          {showBlessing && <DivineParticles isActive={true} color="#FFD700" />}
          
          <p className="mb-4">{content}</p>
          
          {divineResponse && (
            <>
              <Separator className="my-3" />
              
              <div className="flex items-center mb-2 text-divine-purple">
                <BookOpen className="h-4 w-4 mr-2" />
                <h4 className="font-semibold">Gita Wisdom</h4>
              </div>
              
              <Card className="bg-divine-purple/10 border-divine-purple/20 mb-4">
                <CardContent className="p-3">
                  <p className="font-sanskrit italic text-sm">{divineResponse.shloka.text}</p>
                  <p className="text-xs mt-1 text-gray-600">— Bhagavad Gita {divineResponse.shloka.chapter}.{divineResponse.shloka.verse}</p>
                  <p className="mt-2 text-sm">{divineResponse.shloka.translation}</p>
                </CardContent>
              </Card>
              
              <p className="text-sm mb-4">{divineResponse.application}</p>
              
              {divineResponse.story && (
                <>
                  <div className="flex items-center mb-2 text-divine-orange">
                    <Book className="h-4 w-4 mr-2" />
                    <h4 className="font-semibold">Divine Story</h4>
                  </div>
                  <p className="text-sm italic mb-4">{divineResponse.story}</p>
                </>
              )}
              
              {divineResponse.path && (
                <div className="bg-divine-purple/5 p-3 rounded border border-divine-purple/20">
                  <p className="font-semibold text-sm">Your Path Today: <span className="text-divine-purple">{divineResponse.path.type}</span></p>
                  <p className="text-sm mt-1">{divineResponse.path.guidance}</p>
                </div>
              )}
            </>
          )}
        </div>
        <p className="text-xs text-gray-500 mt-1">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};

const ConversationInterface = ({ selectedDeity, onBack }: ConversationInterfaceProps) => {
  const [messages, setMessages] = useState<(MessageProps | DivineMessageProps)[]>([
    {
      isUser: false,
      content: `Namaste! I am ${selectedDeity.name}. How may I guide you today on your spiritual journey?`,
      timestamp: new Date(),
      divineResponse: undefined,
      showBlessing: false
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState("");
  const [isBlessing, setIsBlessing] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to bottom when new messages arrive
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current;
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage = {
      isUser: true,
      content: inputMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    
    // Simulate deity response after a short delay
    setTimeout(() => {
      const divineResponse = generateRandomResponse(selectedDeity.id, inputMessage);
      
      const deityMessage: DivineMessageProps = {
        isUser: false,
        content: divineResponse.message,
        timestamp: new Date(),
        divineResponse,
        showBlessing: false
      };
      
      setMessages(prev => [...prev, deityMessage]);
      
      // Show blessing effect after a short delay
      setTimeout(() => {
        setIsBlessing(true);
        setMessages(prev => 
          prev.map((msg, idx) => 
            idx === prev.length - 1 && !msg.isUser 
              ? { ...msg as DivineMessageProps, showBlessing: true } 
              : msg
          )
        );
        
        // Hide blessing effect after some time
        setTimeout(() => {
          setIsBlessing(false);
        }, 5000);
      }, 1000);
    }, 1000);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  return (
    <div className="flex flex-col h-full max-h-[80vh] bg-gradient-to-b from-divine-purple/5 to-white lotus-pattern">
      <div className="p-4 flex items-center justify-between bg-white border-b">
        <Button variant="ghost" onClick={onBack} className="text-divine-purple hover:bg-divine-purple/10">
          Back
        </Button>
        <div className="flex items-center">
          <div className={`w-10 h-10 rounded-full bg-${selectedDeity.color} text-white flex items-center justify-center mr-2`}>
            {selectedDeity.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold">{selectedDeity.name}</h3>
            <p className="text-xs text-gray-500">{selectedDeity.title}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-divine-purple hover:bg-divine-purple/10">
          <Heart className="h-5 w-5" />
        </Button>
      </div>
      
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message, idx) => (
            message.isUser ? (
              <UserMessage 
                key={idx}
                content={message.content}
                timestamp={message.timestamp}
                isUser={true}
              />
            ) : (
              <DivineMessage
                key={idx}
                content={message.content}
                timestamp={message.timestamp}
                isUser={false}
                divineResponse={(message as DivineMessageProps).divineResponse}
                showBlessing={(message as DivineMessageProps).showBlessing}
              />
            )
          ))}
        </div>
      </ScrollArea>
      
      <div className="p-4 bg-white border-t">
        <div className="flex items-end gap-2">
          <Textarea
            placeholder="Share your thoughts or questions with the divine..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="resize-none border-divine-purple/30 focus-visible:ring-divine-purple"
            rows={2}
          />
          <Button 
            onClick={handleSendMessage}
            className="bg-divine-purple hover:bg-divine-purple-dark"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConversationInterface;
