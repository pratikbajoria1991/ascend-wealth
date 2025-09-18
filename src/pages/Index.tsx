import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { AIChat } from '@/components/AIChat';
import { RiskProfileQuiz } from '@/components/RiskProfileQuiz';
import { ProductShowcase } from '@/components/ProductShowcase';
import { PortfolioPreview } from '@/components/PortfolioPreview';
import { ComplianceFooter } from '@/components/ComplianceFooter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Sparkles, TrendingUp, Shield, Users, Bot, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-financial.jpg';

const Index = () => {
  const [activeSection, setActiveSection] = useState<'chat' | 'quiz' | 'products' | 'portfolio'>('chat');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={heroImage} 
            alt="Premium Financial Technology" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative gradient-hero">
          <div className="container mx-auto px-4 py-20 text-center text-white">
            <Badge className="bg-white/20 text-white mb-6 animate-float">
              <Sparkles className="h-4 w-4 mr-2" />
              AI-Powered Financial Advisory
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              Your Wealth,
              <br />
              <span className="gradient-accent bg-clip-text text-transparent">
                Amplified by AI
              </span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Experience professional wealth management with our AI-powered platform. 
              Get personalized investment guidance, risk assessment, and comprehensive 
              financial product discovery designed for modern investors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-glow px-8 py-6 text-lg"
                onClick={() => setActiveSection('chat')}
              >
                <Bot className="h-5 w-5 mr-2" />
                Start AI Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
                onClick={() => setActiveSection('quiz')}
              >
                Take Risk Assessment
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                NISM Registered
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                10,000+ Investors
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                ₹500+ Crores AUM
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        {/* Section Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={activeSection === 'chat' ? 'default' : 'outline'}
            onClick={() => setActiveSection('chat')}
            className={activeSection === 'chat' ? 'gradient-primary' : ''}
          >
            <Bot className="h-4 w-4 mr-2" />
            AI Assistant
          </Button>
          <Button
            variant={activeSection === 'quiz' ? 'default' : 'outline'}
            onClick={() => setActiveSection('quiz')}
            className={activeSection === 'quiz' ? 'gradient-primary' : ''}
          >
            <Shield className="h-4 w-4 mr-2" />
            Risk Assessment
          </Button>
          <Button
            variant={activeSection === 'products' ? 'default' : 'outline'}
            onClick={() => setActiveSection('products')}
            className={activeSection === 'products' ? 'gradient-primary' : ''}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Products
          </Button>
          <Button
            variant={activeSection === 'portfolio' ? 'default' : 'outline'}
            onClick={() => setActiveSection('portfolio')}
            className={activeSection === 'portfolio' ? 'gradient-primary' : ''}
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Portfolio
          </Button>
        </div>

        {/* Dynamic Content */}
        <div className="animate-slide-up">
          {activeSection === 'chat' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">AI Financial Assistant</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Get instant answers about mutual funds, SIPs, equities, and investment strategies. 
                  Our AI provides category-level guidance tailored to your needs.
                </p>
              </div>
              <AIChat />
            </div>
          )}

          {activeSection === 'quiz' && (
            <div className="max-w-2xl mx-auto">
              <RiskProfileQuiz />
            </div>
          )}

          {activeSection === 'products' && <ProductShowcase />}

          {activeSection === 'portfolio' && <PortfolioPreview />}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose WealthAI?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional wealth management made simple with cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="premium-card p-8 text-center hover:shadow-glow group">
              <div className="w-16 h-16 mx-auto gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-Powered Guidance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get personalized investment recommendations based on your risk profile, 
                goals, and market conditions using advanced AI algorithms.
              </p>
            </Card>

            <Card className="premium-card p-8 text-center hover:shadow-glow group">
              <div className="w-16 h-16 mx-auto gradient-success rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">NISM Compliant</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fully regulated platform with proper segregation of research and 
                distribution functions, ensuring transparency and compliance.
              </p>
            </Card>

            <Card className="premium-card p-8 text-center hover:shadow-glow group">
              <div className="w-16 h-16 mx-auto gradient-accent rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Comprehensive Analytics</h3>
              <p className="text-muted-foreground leading-relaxed">
                Track your portfolio performance, analyze trends, and make 
                informed decisions with professional-grade analytics tools.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Investment Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of investors who trust WealthAI for their financial growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary shadow-glow px-8 py-6 text-lg"
                onClick={() => setActiveSection('chat')}
              >
                Start Your Investment Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-lg"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Footer */}
      <footer className="bg-muted/20 py-12">
        <div className="container mx-auto px-4">
          <ComplianceFooter />
        </div>
      </footer>
    </div>
  );
};

export default Index;