
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare } from "lucide-react";

interface AiAssistantProps {
  apiKey: string;
}

const AiAssistant = ({ apiKey }: AiAssistantProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{role: string, content: string}[]>([
    {
      role: "assistant",
      content: "Hello! I'm your portfolio assistant. How can I help you today?"
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message to chat
    setChatHistory([...chatHistory, { role: "user", content: message }]);
    
    // In a real implementation, we would use the API key here to call the AI service
    // For now, we'll just simulate a response
    setTimeout(() => {
      setChatHistory(prevChat => [
        ...prevChat, 
        { 
          role: "assistant", 
          content: "I'm a simulated assistant response. In the real implementation, I would use your API key to provide intelligent answers." 
        }
      ]);
    }, 1000);
    
    setMessage("");
  };

  if (!isOpen) {
    return (
      <Button
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg flex items-center justify-center"
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare size={24} />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200">
      <div className="bg-primary text-white p-4 flex justify-between items-center">
        <h3 className="font-medium">Portflow Assistant</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 p-0 text-white hover:bg-primary/80"
          onClick={() => setIsOpen(false)}
        >
          ×
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatHistory.map((chat, index) => (
          <div 
            key={index} 
            className={`${
              chat.role === "assistant" 
                ? "bg-gray-100 rounded-lg p-3" 
                : "bg-primary text-white rounded-lg p-3 ml-6"
            }`}
          >
            {chat.content}
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-200 flex gap-2">
        <Input
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          className="flex-1"
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </div>
  );
};

export default AiAssistant;
