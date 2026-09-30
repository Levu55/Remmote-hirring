import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/Button';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'agent'|'user', text: string}[]>([
    { role: 'agent', text: 'Hi there! Looking for a specific job or need help hiring?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'agent', text: 'Thanks for reaching out! One of our team members will get back to you shortly.' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl w-80 sm:w-96 overflow-hidden flex flex-col h-[500px]">
          <div className="bg-yellow-400 p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-slate-900">Remote Hirring Support</h3>
              <p className="text-xs text-slate-700">Typically replies in a few minutes</p>
            </div>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="text-slate-900 hover:bg-yellow-500 p-1 rounded-full transition-colors cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-950">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-slate-900 text-white rounded-br-none' 
                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSend} className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex gap-2">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-1 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button type="submit" disabled={!input.trim()} aria-label="Send message" className="bg-yellow-400 text-slate-900 p-2.5 rounded-full disabled:opacity-50 hover:bg-yellow-500 transition-colors cursor-pointer">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          aria-label="Open support chat"
          className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 p-4 rounded-full shadow-lg shadow-yellow-400/20 transition-transform hover:scale-105 flex items-center justify-center cursor-pointer"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
