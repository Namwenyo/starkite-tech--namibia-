import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, User, Headset, Sparkles, ThumbsUp, ThumbsDown } from "lucide-react";
import { io, Socket } from "socket.io-client";
import { GoogleGenAI } from "@google/genai";

interface Message {
  id: string;
  text: string;
  role: "user" | "support";
  sender: string;
  timestamp: string;
  rating?: 'up' | 'down';
}

const STARKITE_CONTEXT = `
You are the official AI Assistant for Starkite Technologies Pty Ltd (Reg. No: 2026/0280).
Your goal is to provide accurate, professional, and helpful information about Starkite Technologies.

Company Overview:
Starkite is a technical integration and specialized R&D firm focused on aerospace and industrial sectors. 
Mission: Bridging the gap between industrial operations and digital intelligence.

Leadership:
- Assad Antonio: CEO/Founder. Visionary leader.
- Tangi Haiduwa: Lead Software Engineer. Architect of high-performance digital platforms.
- Selma Nakanyala: Finance Manager.

Core Service Pillars:
1. AI & Industrial Intelligence: Predictive maintenance, digital twins, performance dashboards. Industries: Mining, Energy, Oil & Gas, Manufacturing, Transport.
2. Cybersecurity & OT/IT Integration: SOC services, pentesting, OT/ICS security. Industries: Critical Infrastructure, Fintech, Gov.
3. Software Dev & Digital Platforms: Web/mobile, ERP, SaaS, API integration. Industries: Enterprise, Banking, Fintech.
4. Smart Energy & Clean Tech: Solar monitoring, smart metering, EV charging.
5. E-Waste & Circular Economy: Upcycling hubs, ESG reporting, waste tracking.
6. IoT & Environmental Monitoring: Air/water quality, agri-tech, hazard detection.
7. VR/AR Industrial Training: Mining safety simulations, factory walkthroughs.
8. Event Tech & Hybrid Platforms: Hybrid event infrastructure.

Flagship Product:
EVENTFLOW - A unified digital ecosystem for hybrid events (streaming, analytics, ticketing, AI networking).

Tone: Professional, technical, innovative, and security-conscious.
If you don't know the answer, politely suggest contacting the team at starkitenamibia@gmail.com or +264 81 400 1634.
`;

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const socketRef = useRef<Socket | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<any>(null);

  useEffect(() => {
    // Initialize Gemini
    const key = (process.env as any).GEMINI_API_KEY;
    if (key) {
      aiRef.current = new GoogleGenAI({ apiKey: key });
    }

    // Connect to local socket server
    socketRef.current = io();

    socketRef.current.on("message", async (message: Message) => {
      setMessages((prev) => [...prev, message]);
      
      // If the message is from a user, and we are the "AI active" client
      // For this implementation, we simulate the AI response from the client that received the message
      // But only respond if it's the latest user message
      if (message.role === "user" && aiRef.current) {
        handleAIResponse(message.text);
      }
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  const handleAIResponse = async (userPrompt: string) => {
    setIsTyping(true);
    try {
      const chat = aiRef.current.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: STARKITE_CONTEXT,
        }
      });

      const response = await chat.sendMessage({
        message: userPrompt
      });

      const aiText = response.text;
      
      if (socketRef.current) {
        socketRef.current.emit("message", {
          text: aiText,
          role: "support",
          sender: "Starkite AI",
        });
      }
    } catch (error) {
      console.error("AI Error:", error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleRateMessage = (messageId: string, rating: 'up' | 'down') => {
    setMessages((prev) => 
      prev.map((msg) => 
        msg.id === messageId ? { ...msg, rating: msg.rating === rating ? undefined : rating } : msg
      )
    );
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !socketRef.current) return;

    const newMessage = {
      text: inputText,
      role: "user",
      sender: "You",
    };

    socketRef.current.emit("message", newMessage);
    setInputText("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            role="dialog"
            aria-labelledby="chat-title"
            className="mb-4 w-[350px] sm:w-[400px] h-[550px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center">
                  <Headset className="w-6 h-6" />
                  <div className="absolute -bottom-1 -right-1 bg-sky-400 w-4 h-4 rounded-full border-2 border-slate-900 flex items-center justify-center">
                    <Sparkles className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>
                <div>
                  <p id="chat-title" className="font-bold text-sm">Starkite AI Support</p>
                  <p className="text-[10px] text-sky-400 font-bold uppercase tracking-widest">Enhanced Intelligence</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
                aria-label="Close support chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              role="log"
              aria-live="polite"
              className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-950/50"
            >
              {messages.length === 0 && (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-sky-500 animate-pulse" />
                  </div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">How can our AI help you today?</p>
                  <p className="text-xs text-slate-500 mt-1">Ask about our services, products, or team.</p>
                </div>
              )}
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className="flex flex-col max-w-[85%]">
                    <p className={`text-[9px] font-bold uppercase tracking-widest mb-1 text-slate-400 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                      {msg.sender}
                    </p>
                    <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user" 
                        ? "bg-slate-900 dark:bg-sky-600 text-white rounded-br-none" 
                        : "bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-bl-none shadow-sm"
                    }`}>
                      {msg.text}
                      <div className="flex items-center justify-between mt-2 gap-4">
                        <div className={`text-[10px] opacity-60 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                          {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                        {msg.role === "support" && (
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => handleRateMessage(msg.id, 'up')}
                              className={`p-1 rounded-md transition-all hover:bg-slate-100 dark:hover:bg-slate-700 ${msg.rating === 'up' ? 'text-sky-500 scale-110' : 'text-slate-400'}`}
                              aria-label="Helpful"
                            >
                              <ThumbsUp className="w-3 h-3" />
                            </button>
                            <button 
                              onClick={() => handleRateMessage(msg.id, 'down')}
                              className={`p-1 rounded-md transition-all hover:bg-slate-100 dark:hover:bg-slate-700 ${msg.rating === 'down' ? 'text-rose-500 scale-110' : 'text-slate-400'}`}
                              aria-label="Not helpful"
                            >
                              <ThumbsDown className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-bl-none border border-slate-200 dark:border-slate-700 flex gap-1 items-center">
                    <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce" />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex gap-2">
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Talk to our AI..."
                className="flex-grow px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all text-slate-900 dark:text-white"
              />
              <button 
                type="submit"
                disabled={!inputText.trim() || isTyping}
                aria-label="Send message"
                className="w-10 h-10 rounded-full bg-slate-900 dark:bg-slate-700 text-white flex items-center justify-center hover:bg-slate-800 disabled:opacity-50 transition-all shrink-0 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`${isOpen ? 'Close' : 'Open'} support chat`}
        aria-expanded={isOpen}
        className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-2xl relative overflow-hidden focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-600/20 to-transparent" />
        {isOpen ? <X className="w-6 h-6 relative z-10" /> : <MessageCircle className="w-6 h-6 relative z-10" />}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
