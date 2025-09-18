import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, FileCheck, AlertTriangle } from 'lucide-react';

export const ComplianceFooter = () => {
  return (
    <div className="space-y-6 bg-muted/20 rounded-xl p-8">
      {/* Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="premium-card p-4 text-center">
          <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
          <h4 className="font-semibold mb-2">SEBI Registered</h4>
          <p className="text-sm text-muted-foreground">Research Analyst & Investment Adviser</p>
          <Badge variant="secondary" className="mt-2">Reg: INH000001234</Badge>
        </Card>

        <Card className="premium-card p-4 text-center">
          <Award className="h-8 w-8 text-primary mx-auto mb-3" />
          <h4 className="font-semibold mb-2">AMFI Registered</h4>
          <p className="text-sm text-muted-foreground">Mutual Fund Distributor</p>
          <Badge variant="secondary" className="mt-2">ARN: 12345</Badge>
        </Card>

        <Card className="premium-card p-4 text-center">
          <FileCheck className="h-8 w-8 text-primary mx-auto mb-3" />
          <h4 className="font-semibold mb-2">IRDA Certified</h4>
          <p className="text-sm text-muted-foreground">Insurance Products Distribution</p>
          <Badge variant="secondary" className="mt-2">License: 123456789</Badge>
        </Card>
      </div>

      {/* Main Disclaimer */}
      <div className="bg-white/50 rounded-lg p-6 border border-warning/20">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
          <div className="space-y-3 text-sm">
            <h4 className="font-semibold text-foreground">Important Disclaimers & Regulatory Information</h4>
            
            <div className="space-y-2 text-muted-foreground leading-relaxed">
              <p>
                <strong>Mutual Fund Investments:</strong> Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future results.
              </p>
              
              <p>
                <strong>Educational Content Only:</strong> This platform provides educational content and category-level guidance only. We do not recommend specific schemes or securities. For personalized investment advice, please consult a SEBI-registered Investment Adviser.
              </p>
              
              <p>
                <strong>Regulatory Compliance:</strong> We maintain strict segregation between our Distribution (execution) and Research (education/analysis) functions as per SEBI guidelines. All investment decisions should be made after careful consideration of your financial situation and risk tolerance.
              </p>
              
              <p>
                <strong>Insurance Products:</strong> Insurance products are issued by respective insurance companies. Premium paid is subject to applicable taxes. Please read policy documents carefully before purchasing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="text-center text-sm text-muted-foreground">
        <p>For grievances, contact: <strong>support@wealthai.com</strong> | Toll-free: <strong>1800-XXX-XXXX</strong></p>
        <p className="mt-1">Registered Office: WealthAI Technologies Pvt. Ltd., Mumbai - 400001</p>
      </div>
    </div>
  );
};