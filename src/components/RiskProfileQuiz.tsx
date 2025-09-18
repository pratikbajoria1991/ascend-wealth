import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Shield, Clock, Target, DollarSign } from 'lucide-react';

interface Question {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  lowLabel: string;
  highLabel: string;
}

const questions: Question[] = [
  {
    id: 1,
    title: "Investment Timeline",
    description: "How long do you plan to stay invested?",
    icon: <Clock className="h-6 w-6" />,
    lowLabel: "Short-term (1-3 years)",
    highLabel: "Long-term (10+ years)"
  },
  {
    id: 2,
    title: "Risk Tolerance",
    description: "How comfortable are you with market volatility?",
    icon: <TrendingUp className="h-6 w-6" />,
    lowLabel: "Very Conservative",
    highLabel: "High Risk Appetite"
  },
  {
    id: 3,
    title: "Financial Stability",
    description: "How stable is your current income?",
    icon: <Shield className="h-6 w-6" />,
    lowLabel: "Variable Income",
    highLabel: "Very Stable"
  },
  {
    id: 4,
    title: "Investment Goals",
    description: "What's your primary investment objective?",
    icon: <Target className="h-6 w-6" />,
    lowLabel: "Capital Protection",
    highLabel: "Wealth Creation"
  },
  {
    id: 5,
    title: "Investment Amount",
    description: "How much do you plan to invest initially?",
    icon: <DollarSign className="h-6 w-6" />,
    lowLabel: "Small Amount",
    highLabel: "Large Amount"
  }
];

export const RiskProfileQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(50));
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSliderChange = (value: number[]) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value[0];
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateRiskProfile = () => {
    const average = answers.reduce((sum, answer) => sum + answer, 0) / answers.length;
    if (average <= 30) return "Conservative";
    if (average <= 70) return "Moderate";
    return "Aggressive";
  };

  const getRiskProfileColor = (profile: string) => {
    switch (profile) {
      case "Conservative": return "text-success";
      case "Moderate": return "text-warning";
      case "Aggressive": return "text-destructive";
      default: return "text-primary";
    }
  };

  if (isCompleted) {
    const riskProfile = calculateRiskProfile();
    return (
      <Card className="premium-card p-8 text-center animate-slide-up">
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto gradient-primary rounded-full flex items-center justify-center mb-4">
            <Target className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Risk Assessment Complete!</h3>
          <p className="text-muted-foreground">Based on your responses, here's your investment profile</p>
        </div>

        <div className="bg-muted/30 rounded-xl p-6 mb-6">
          <h4 className="text-lg font-semibold mb-2">Your Risk Profile:</h4>
          <div className={`text-3xl font-bold ${getRiskProfileColor(riskProfile)} mb-4`}>
            {riskProfile} Investor
          </div>
          
          <div className="text-sm text-left space-y-2">
            {riskProfile === "Conservative" && (
              <div>
                <p className="font-medium">Recommended Product Categories:</p>
                <p>• Debt Mutual Funds (Low to Moderate Risk)</p>
                <p>• Government Securities</p>
                <p>• Conservative Hybrid Funds</p>
              </div>
            )}
            {riskProfile === "Moderate" && (
              <div>
                <p className="font-medium">Recommended Product Categories:</p>
                <p>• Balanced Hybrid Funds</p>
                <p>• Large Cap Equity Funds</p>
                <p>• Diversified Debt Funds</p>
              </div>
            )}
            {riskProfile === "Aggressive" && (
              <div>
                <p className="font-medium">Recommended Product Categories:</p>
                <p>• Equity Mutual Funds</p>
                <p>• Small & Mid Cap Funds</p>
                <p>• Sectoral/Thematic Funds</p>
              </div>
            )}
          </div>
        </div>

        <div className="text-xs text-muted-foreground border-t pt-4">
          Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. This platform provides educational content and category-level guidance only. For personalised investment advice, please consult a NISM-registered Investment Adviser.
        </div>

        <Button 
          onClick={() => {
            setIsCompleted(false);
            setCurrentQuestion(0);
            setAnswers(new Array(questions.length).fill(50));
          }}
          variant="outline"
          className="mt-4"
        >
          Retake Assessment
        </Button>
      </Card>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Card className="premium-card p-8 animate-slide-up">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-foreground">Risk Profiling Assessment</h3>
          <span className="text-sm font-medium text-muted-foreground bg-muted/30 px-3 py-1 rounded-full">
            {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <Progress value={progress} className="h-3" />
      </div>

      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto gradient-primary rounded-full flex items-center justify-center mb-4 text-white shadow-glow">
          {question.icon}
        </div>
        <h4 className="text-lg font-semibold mb-2 text-foreground">{question.title}</h4>
        <p className="text-muted-foreground">{question.description}</p>
      </div>

      <div className="space-y-6">
        <div className="px-4 py-2 bg-muted/30 rounded-lg">
          <Slider
            value={[answers[currentQuestion]]}
            onValueChange={handleSliderChange}
            max={100}
            step={1}
            className="w-full"
          />
        </div>

        <div className="flex justify-between text-sm font-medium text-muted-foreground px-2">
          <span className="bg-muted/50 px-3 py-1 rounded-full">{question.lowLabel}</span>
          <span className="bg-muted/50 px-3 py-1 rounded-full">{question.highLabel}</span>
        </div>

        <div className="flex gap-3 pt-6">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex-1"
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            className="flex-1 gradient-primary"
          >
            {currentQuestion === questions.length - 1 ? 'Complete' : 'Next'}
          </Button>
        </div>
      </div>
    </Card>
  );
};