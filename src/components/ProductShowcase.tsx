import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Shield, Building, Coins, CreditCard, FileText } from 'lucide-react';

interface ProductCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  riskLevel: 'Low' | 'Moderate' | 'High';
  features: string[];
  minInvestment: string;
  lockIn: string;
  taxBenefits: string[];
}

const productCategories: ProductCategory[] = [
  {
    id: 'mutual-funds',
    title: 'Mutual Funds',
    description: 'Diversified investment solutions managed by professional fund managers',
    icon: <TrendingUp className="h-6 w-6" />,
    riskLevel: 'Moderate',
    features: ['Professional Management', 'Diversification', 'SIP Options'],
    minInvestment: '₹500',
    lockIn: 'None (except ELSS)',
    taxBenefits: ['ELSS funds: 80C deduction up to ₹1.5L', 'Long-term capital gains tax exempt up to ₹1L', 'SIP tax benefits']
  },
  {
    id: 'equities',
    title: 'Equity Investments',
    description: 'Direct stock investments for wealth creation and portfolio growth',
    icon: <Building className="h-6 w-6" />,
    riskLevel: 'High',
    features: ['Direct Ownership', 'Dividend Income', 'Capital Appreciation', 'Voting Rights'],
    minInvestment: '₹1',
    lockIn: 'None',
    taxBenefits: ['LTCG tax exempt up to ₹1L annually', 'Dividend income tax-free up to ₹10L', 'No securities transaction tax on delivery']
  },
  {
    id: 'bonds',
    title: 'Bonds & Debentures',
    description: 'Fixed income securities for stable returns and capital preservation',
    icon: <Shield className="h-6 w-6" />,
    riskLevel: 'Low',
    features: ['Fixed Returns', 'Capital Protection', 'Regular Income', 'Credit Rating'],
    minInvestment: '₹10,000',
    lockIn: 'Till Maturity',
    taxBenefits: ['Tax-free bonds available', 'Indexation benefits on capital gains', 'TDS exemption on certain bonds']
  },
  {
    id: 'reits',
    title: 'REITs',
    description: 'Real Estate Investment Trusts for property exposure without direct ownership',
    icon: <Building className="h-6 w-6" />,
    riskLevel: 'Moderate',
    features: ['Real Estate Exposure', 'Regular Dividends', 'Professional Management', 'Liquidity'],
    minInvestment: '₹10,000',
    lockIn: 'None',
    taxBenefits: ['Rental income distributed as dividends', 'LTCG tax benefits after 3 years', 'Indexation benefits available']
  },
  {
    id: 'pms',
    title: 'Portfolio Management',
    description: 'Customized investment solutions for high net worth individuals',
    icon: <Coins className="h-6 w-6" />,
    riskLevel: 'High',
    features: ['Personalized Strategy', 'Direct Ownership', 'Dedicated Manager', 'Custom Reporting'],
    minInvestment: '₹50 Lakhs',
    lockIn: 'As per strategy',
    taxBenefits: ['Direct equity benefits apply', 'Tax loss harvesting strategies', 'Optimized tax-efficient portfolio allocation']
  },
  {
    id: 'insurance',
    title: 'Insurance Products',
    description: 'Life and health insurance solutions for comprehensive financial protection',
    icon: <CreditCard className="h-6 w-6" />,
    riskLevel: 'Low',
    features: ['Life Protection', 'Maturity Benefits', 'Rider Options', 'Flexible Premium'],
    minInvestment: '₹500/month',
    lockIn: 'Policy Term',
    taxBenefits: ['80C deduction up to ₹1.5L', '80D health insurance deduction', 'Maturity proceeds tax-free under 10(10D)']
  }
];

const getRiskColor = (risk: string) => {
  switch (risk) {
    case 'Low': return 'bg-success/10 text-success';
    case 'Moderate': return 'bg-warning/10 text-warning';
    case 'High': return 'bg-destructive/10 text-destructive';
    default: return 'bg-muted';
  }
};

export const ProductShowcase = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Investment Products</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our comprehensive range of financial products designed for different risk profiles and investment goals
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productCategories.map((product) => (
          <Card key={product.id} className="premium-card p-6 hover:shadow-glow group">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 gradient-primary rounded-xl text-white group-hover:animate-pulse-glow">
                {product.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{product.title}</h3>
                  <Badge className={getRiskColor(product.riskLevel)}>
                    {product.riskLevel}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Min Investment</span>
                  <p className="font-medium">{product.minInvestment}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Lock-in</span>
                  <p className="font-medium">{product.lockIn}</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2 text-sm">Key Features</h4>
                <div className="flex flex-wrap gap-1">
                  {product.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2 text-sm text-success">Tax Benefits</h4>
                <div className="space-y-1">
                  {product.taxBenefits.map((benefit, index) => (
                    <div key={index} className="text-xs text-muted-foreground flex items-start gap-1">
                      <span className="text-success mt-0.5">•</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <FileText className="h-4 w-4 mr-2" />
                  Learn More
                </Button>
                <Button size="sm" className="flex-1 gradient-primary">
                  Explore Options
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-muted/30 rounded-xl p-6 text-center">
        <h3 className="font-semibold mb-2">Need Personalized Advice?</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Our AI assistant can help you choose the right product categories based on your risk profile and investment goals.
        </p>
        <Button className="gradient-primary">
          Start AI Consultation
        </Button>
      </div>
    </div>
  );
};