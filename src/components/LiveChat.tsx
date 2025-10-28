"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi";

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{ text: string; sender: "user" | "agent" }>>([
    {
      text: "Hi! 👋 Welcome to Elysium Equine. How can we help you today?",
      sender: "agent",
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: message, sender: "user" }]);
    setMessage("");

    // Simulate agent response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your message! Our team will respond shortly. You can also call us at (555) 123-4567 for immediate assistance.",
          sender: "agent",
        },
      ]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-amber-500 hover:bg-amber-400 text-black p-4 rounded-full shadow-2xl transition-colors"
        aria-label="Open live chat"
      >
        {isOpen ? (
          <FiX className="w-6 h-6" />
        ) : (
          <FiMessageCircle className="w-6 h-6" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-gray-900 border border-amber-400/30 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-linear-to-r from-amber-500 to-amber-600 p-4 text-black">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">Elysium Equine</h3>
                  <p className="text-sm opacity-90">We&apos;re here to help!</p>
                </div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-black">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                      msg.sender === "user"
                        ? "bg-amber-500 text-black"
                        : "bg-gray-800 text-white border border-amber-400/20"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-gray-900 border-t border-amber-400/30">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-gray-800 border border-amber-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-amber-500 hover:bg-amber-400 text-black p-2 rounded-lg transition-colors"
                  aria-label="Send message"
                >
                  <FiSend className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                Typically replies within minutes
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
