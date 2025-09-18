import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Menu, Sparkles, Shield, User, Bell } from 'lucide-react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="p-2 gradient-primary rounded-lg">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-xl">WealthAI</h1>
            <Badge variant="secondary" className="text-xs">SEBI Registered</Badge>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#products" className="text-sm font-medium hover:text-primary transition-smooth">
            Products
          </a>
          <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-smooth">
            Portfolio
          </a>
          <a href="#research" className="text-sm font-medium hover:text-primary transition-smooth">
            Research
          </a>
          <a href="#tools" className="text-sm font-medium hover:text-primary transition-smooth">
            Tools
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>
          <Button className="gradient-primary hidden md:flex">
            Start Investing
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};