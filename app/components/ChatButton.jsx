"use client"
import { useState, useEffect, useRef } from 'react';
import { FaCommentDots, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { ImSpinner8 } from 'react-icons/im';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', isBot: true }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (message.trim()) {
      const userMessage = { text: message, isBot: false };
      setMessages([...messages, userMessage]);
      setMessage('');
      setIsLoading(true);

      try {
        const response = await fetch("http://localhost:8000/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: message }),
        });

        const data = await response.json();
        const botMessage = { text: data.response.message.content, isBot: true };
        setMessages(prev => [...prev, botMessage]);
      } catch (error) {
        console.error("Error fetching response:", error);
        setMessages(prev => [...prev, { text: 'Sorry, something went wrong. Please try again.', isBot: true }]);
      }
      setIsLoading(false);
    }
  };

  const TypingIndicator = () => (
    <div className="flex items-center space-x-2 mb-3">
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce delay-100"></div>
        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce delay-200"></div>
        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center animate-float ${
          isOpen ? 'rotate-90' : 'rotate-0'
        }`}
      >
        {isOpen ? (
          <FaTimes className="w-6 h-6 transform transition-transform" />
        ) : (
          <FaCommentDots className="w-6 h-6 transform transition-transform" />
        )}
      </button>

      <div
        className={`absolute bottom-20 right-0 w-80 bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-t-xl">
          <h3 className="font-bold text-lg flex items-center space-x-2">
            <span>🤖 Virtual Assistant</span>
            {isLoading && <ImSpinner8 className="animate-spin ml-2" />}
          </h3>
        </div>
        
        <div className="h-64 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-blue-200">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-3 ${msg.isBot ? 'text-left' : 'text-right'}`}
            >
              <div
                className={`inline-block p-3 rounded-2xl max-w-[80%] ${
                  msg.isBot
                    ? 'bg-white text-gray-800 shadow-md'
                    : 'bg-gradient-to-r from-blue-500 to-green-400 text-white'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-white/20">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 p-2 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/50 backdrop-blur-sm placeholder-gray-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50"
              disabled={isLoading}
            >
              <FaPaperPlane className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatButton;