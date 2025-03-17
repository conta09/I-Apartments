"use client"
import { useState } from 'react';
import { FaCommentDots, FaTimes } from 'react-icons/fa';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', isBot: true }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, isBot: false }]);
      setMessage('');
      // Add your bot response logic here
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#00B713] text-white p-4 rounded-full shadow-lg  transition-all duration-300 flex items-center justify-center"
      >
        {isOpen ? <FaTimes className="w-6 h-6" /> : <FaCommentDots className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Virtual Assistant</h3>
          </div>
          
          <div className="h-64 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 ${msg.isBot ? 'text-left' : 'text-right'}`}
              >
                <div
                  className={`inline-block p-2 rounded-lg ${
                    msg.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatButton;