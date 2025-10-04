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
import advisorWoman from '@/assets/advisor-woman.png';
import teamCollaboration from '@/assets/team-collaboration.jpg';
import financialPresentation from '@/assets/financial-presentation.jpg';

const Index = () => {
  const [activeSection, setActiveSection] = useState<'chat' | 'quiz' | 'products' | 'portfolio'>('chat');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#475569] text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-2">
                <p className="text-sm text-white/60 uppercase tracking-wider">Welcome to WealthAI</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Enabling Your Path to Financial Growth and Success
                </h1>
              </div>
              
              <p className="text-lg text-white/80 max-w-xl leading-relaxed">
                Empowering your financial journey with the right tools and expert guidance – helping you grow, 
                invest wisely, and achieve your financial goals with confidence.
              </p>
              
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-glow px-10 py-6 text-lg rounded-full"
                onClick={() => setActiveSection('chat')}
              >
                Get Started
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
            
            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src={advisorWoman} 
                  alt="Professional Financial Advisor" 
                  className="w-full max-w-md h-auto object-contain drop-shadow-2xl animate-float"
                />
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
      <section className="bg-muted/20 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="premium-card p-8 hover:shadow-glow group border-none bg-card/50 backdrop-blur">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Right Time. Every Time.</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Maximize your investment potential with perfectly timed market entries. 
                Our AI analyzes market trends to help you invest when conditions are optimal.
              </p>
            </Card>

            <Card className="premium-card p-8 hover:shadow-glow group border-none bg-card/50 backdrop-blur">
              <div className="w-16 h-16 gradient-success rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Elite Talent, United Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Our team of certified financial experts and AI specialists work together 
                to deliver exceptional wealth management solutions tailored to your goals.
              </p>
            </Card>

            <Card className="premium-card p-8 hover:shadow-glow group border-none bg-card/50 backdrop-blur">
              <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategic Insights</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Gain deep market intelligence and actionable insights that empower you 
                to make informed decisions and stay ahead of market movements.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={teamCollaboration} 
                  alt="Team Collaboration" 
                  className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                />
                <img 
                  src={financialPresentation} 
                  alt="Financial Presentation" 
                  className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 mt-8"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
            
            {/* Content */}
            <div className="space-y-8">
              <div>
                <p className="text-sm text-primary uppercase tracking-wider mb-2">About us</p>
                <h2 className="text-4xl font-bold mb-4">
                  Trusted guidance for financial growth
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Strategic Financial Planning
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We build personalized financial strategies designed to align with your specific 
                    goals and risk tolerance, ensuring sustainable growth and security.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Boost Your Sales
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Grow revenue with smart, targeted campaigns – from new sales to scaling 
                    existing ones. Our platform integrates advanced tools to drive sales success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Steps Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#475569] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm text-white/60 uppercase tracking-wider mb-2">Registration</p>
            <h2 className="text-4xl font-bold mb-4">Our Easy Steps For Registration</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We make onboarding simple and designed with your convenience in mind. 
              Each step is carefully crafted to ensure a smooth, efficient, and secure 
              registration process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="space-y-4 text-center">
              <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                <span className="text-2xl font-bold">01</span>
              </div>
              <h3 className="text-lg font-semibold">Sign Up & Log In</h3>
              <p className="text-white/70 text-sm">Create your account with basic details and secure login credentials</p>
            </div>
            
            <div className="space-y-4 text-center">
              <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                <span className="text-2xl font-bold">02</span>
              </div>
              <h3 className="text-lg font-semibold">User Configuration</h3>
              <p className="text-white/70 text-sm">Set up your profile preferences and investment goals</p>
            </div>
            
            <div className="space-y-4 text-center">
              <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                <span className="text-2xl font-bold">03</span>
              </div>
              <h3 className="text-lg font-semibold">Complete Your Profile</h3>
              <p className="text-white/70 text-sm">Add financial details and complete KYC verification</p>
            </div>
            
            <div className="space-y-4 text-center">
              <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                <span className="text-2xl font-bold">04</span>
              </div>
              <h3 className="text-lg font-semibold">Enjoy Our Service</h3>
              <p className="text-white/70 text-sm">Start investing with AI-powered guidance and expert support</p>
            </div>
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