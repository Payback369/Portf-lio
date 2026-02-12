import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Olá! Sou o Agente de IA do Matheus. Posso responder sobre seus projetos, stack tecnológico ou experiência. O que gostaria de saber?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      const errorMsg: ChatMessage = { role: 'model', text: "Erro na conexão. Tente novamente.", timestamp: new Date() };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-6 right-6 z-40 p-4 bg-neutral-950 border border-[#39ff14] shadow-[0_0_15px_rgba(57,255,20,0.5)] transition-all duration-300 group ${isOpen ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
      >
        <Bot className="w-6 h-6 text-[#39ff14]" />
        {/* Radar Ping Effect */}
        <span className="absolute inset-0 border border-[#39ff14] rounded-none opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] flex flex-col z-50 font-mono"
          >
            {/* Cyberpunk Container Frame */}
            <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-md border border-[#39ff14]/50 shadow-[0_0_30px_rgba(57,255,20,0.15)] clip-path-cyberpunk" />

            {/* Header */}
            <div className="relative p-4 border-b border-[#39ff14]/30 flex justify-between items-center bg-[#39ff14]/5">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Bot className="w-5 h-5 text-[#39ff14]" />
                  <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#39ff14] animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-[#39ff14] text-xs tracking-[0.2em] uppercase">SYS.AGENT_V2</h3>
                  <div className="text-[10px] text-[#39ff14]/60">ONLINE :: READY</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#39ff14]/50 hover:text-[#39ff14] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="relative flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-[#39ff14]/20 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-4 text-xs md:text-sm leading-relaxed border ${msg.role === 'user'
                        ? 'bg-[#39ff14] text-neutral-950 border-[#39ff14] font-bold'
                        : 'bg-neutral-900/50 text-[#39ff14] border-[#39ff14]/30'
                      }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                    <div className="mt-2 text-[9px] opacity-50 uppercase tracking-widest text-right">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-neutral-900/50 border border-[#39ff14]/30 p-4 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-[#39ff14] animate-spin" />
                    <span className="text-[#39ff14] text-xs animate-pulse">PROCESSANDO...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="relative p-4 border-t border-[#39ff14]/30 bg-neutral-900/50">
              <div className="relative flex items-center">
                <span className="absolute left-3 text-[#39ff14] text-lg">›</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="DIGITE UM COMANDO..."
                  className="w-full bg-neutral-950 border border-[#39ff14]/30 text-[#39ff14] pl-8 pr-12 py-3 focus:outline-none focus:border-[#39ff14] focus:shadow-[0_0_15px_rgba(57,255,20,0.1)] placeholder:text-[#39ff14]/30 text-xs tracking-wider"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-2 text-[#39ff14] hover:text-white disabled:opacity-50 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="text-center mt-2 flex justify-between px-1">
                <span className="text-[9px] text-[#39ff14]/40">SECURE CONNECTION</span>
                <span className="text-[9px] text-[#39ff14]/40">GEMINI.NET</span>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
