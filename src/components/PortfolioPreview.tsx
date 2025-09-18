import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, PieChart, Calendar, Target, DollarSign, ArrowUp } from 'lucide-react';

export const PortfolioPreview = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Portfolio Dashboard Preview</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get comprehensive insights into your investments with AI-powered analytics and personalized recommendations
        </p>
      </div>

      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="premium-card p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-success/10 rounded-lg">
              <DollarSign className="h-5 w-5 text-success" />
            </div>
            <span className="text-sm text-muted-foreground">Total Portfolio</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">₹2,45,670</span>
            <Badge className="bg-success/10 text-success">
              <ArrowUp className="h-3 w-3 mr-1" />
              +12.5%
            </Badge>
          </div>
        </Card>

        <Card className="premium-card p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Current Returns</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">₹27,345</span>
            <Badge className="bg-success/10 text-success">+15.2%</Badge>
          </div>
        </Card>

        <Card className="premium-card p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-warning/10 rounded-lg">
              <Calendar className="h-5 w-5 text-warning" />
            </div>
            <span className="text-sm text-muted-foreground">Monthly SIP</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">₹15,000</span>
            <Badge variant="secondary">Active</Badge>
          </div>
        </Card>

        <Card className="premium-card p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Target className="h-5 w-5 text-accent-foreground" />
            </div>
            <span className="text-sm text-muted-foreground">Goals</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">3</span>
            <Badge variant="secondary">On Track</Badge>
          </div>
        </Card>
      </div>

      {/* Portfolio Allocation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="premium-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <PieChart className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold">Asset Allocation</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-primary rounded-sm"></div>
                <span className="text-sm">Equity Funds</span>
              </div>
              <div className="text-right">
                <span className="font-medium">60%</span>
                <p className="text-xs text-muted-foreground">₹1,47,402</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-success rounded-sm"></div>
                <span className="text-sm">Debt Funds</span>
              </div>
              <div className="text-right">
                <span className="font-medium">25%</span>
                <p className="text-xs text-muted-foreground">₹61,418</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-warning rounded-sm"></div>
                <span className="text-sm">Hybrid Funds</span>
              </div>
              <div className="text-right">
                <span className="font-medium">15%</span>
                <p className="text-xs text-muted-foreground">₹36,851</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="premium-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold">Financial Goals</h3>
          </div>
          
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">House Down Payment</h4>
                <Badge className="bg-success/10 text-success">85%</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Target: ₹25 Lakhs by Dec 2025</p>
              <div className="w-full bg-muted rounded-full h-2 mt-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div className="border-l-4 border-warning pl-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Child Education</h4>
                <Badge variant="secondary">45%</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Target: ₹50 Lakhs by Dec 2030</p>
              <div className="w-full bg-muted rounded-full h-2 mt-2">
                <div className="bg-warning h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            
            <div className="border-l-4 border-success pl-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Retirement Fund</h4>
                <Badge variant="secondary">25%</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Target: ₹2 Crores by Dec 2040</p>
              <div className="w-full bg-muted rounded-full h-2 mt-2">
                <div className="bg-success h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="text-center">
        <Button className="gradient-primary shadow-glow">
          View Complete Dashboard
        </Button>
      </div>
    </div>
  );
};