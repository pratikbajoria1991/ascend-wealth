import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
  gradient?: 'primary' | 'success' | 'accent';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  badge,
  gradient = 'primary'
}) => {
  const gradientClass = {
    primary: 'gradient-primary',
    success: 'gradient-success',
    accent: 'gradient-accent'
  }[gradient];

  return (
    <Card className="premium-card p-6 hover:shadow-glow group transition-spring">
      <div className="flex items-start gap-4">
        <div className={`p-3 ${gradientClass} rounded-xl text-white group-hover:animate-pulse-glow flex-shrink-0`}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-lg">{title}</h3>
            {badge && (
              <Badge variant="secondary" className="text-xs">
                {badge}
              </Badge>
            )}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};