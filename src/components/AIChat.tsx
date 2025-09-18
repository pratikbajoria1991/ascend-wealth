import React, { useState } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI financial advisor. I can help you understand mutual funds, equities, bonds, and other investment products. Would you like to start with a quick risk assessment to get personalized recommendations?",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "Thank you for your question! As a moderate investor, you might consider diversified mutual funds or balanced hybrid funds. However, let me provide category-level guidance only. \n\nMutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. This platform provides educational content and category-level guidance only. For personalised investment advice, please consult a SEBI-registered Investment Adviser.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <Card className="premium-card h-[600px] flex flex-col">
      <div className="p-6 border-b border-border/50 gradient-primary text-white rounded-t-xl">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">AI Financial Assistant</h3>
            <p className="text-white/80 text-sm">Get personalized investment guidance</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            {!message.isUser && (
              <div className="p-2 bg-primary/10 rounded-lg self-start">
                <Bot className="h-4 w-4 text-primary" />
              </div>
            )}
            <div
              className={`max-w-[80%] p-3 rounded-lg transition-smooth ${
                message.isUser
                  ? 'bg-primary text-white'
                  : 'bg-muted text-foreground'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString()}
              </p>
            </div>
            {message.isUser && (
              <div className="p-2 bg-accent/20 rounded-lg self-start">
                <User className="h-4 w-4 text-accent-foreground" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-border/50">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about mutual funds, SIPs, or investment strategies..."
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1"
          />
          <Button onClick={handleSend} size="icon" className="gradient-primary shadow-glow">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};