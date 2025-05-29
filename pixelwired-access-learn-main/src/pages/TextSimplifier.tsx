
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';
import ThemeToggle from '@/components/ThemeToggle';

const TextSimplifier = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold text-primary">{t('appName')}</h1>
              <p className="text-sm text-muted-foreground">{t('textSimplifier')}</p>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <LanguageSelector />
              <Button onClick={() => navigate('/dashboard')} variant="outline">
                {t('backToDashboard')}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t('textSimplifier')}</h2>
          <p className="text-xl text-muted-foreground">Transform complex academic content into easy-to-understand language</p>
        </div>

        {/* Feature Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">What is Text Simplifier?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-lg">
              The Text Simplifier is an AI-powered tool designed to make complex academic content accessible to all learners. 
              It breaks down difficult concepts, simplifies vocabulary, and restructures sentences to improve comprehension.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Key Features</h3>
                <ul className="space-y-1 text-blue-800">
                  <li>• AI-powered text simplification</li>
                  <li>• Multiple complexity levels</li>
                  <li>• Maintains original meaning</li>
                  <li>• Supports multiple subjects</li>
                  <li>• Audio narration available</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Benefits</h3>
                <ul className="space-y-1 text-green-800">
                  <li>• Improved reading comprehension</li>
                  <li>• Reduced cognitive load</li>
                  <li>• Better learning outcomes</li>
                  <li>• Increased confidence</li>
                  <li>• Accessible to all learners</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Input Text</h3>
                <p className="text-gray-600 text-sm">Paste or type the complex text you want to simplify</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">AI Processing</h3>
                <p className="text-gray-600 text-sm">Our AI analyzes and simplifies the content while preserving meaning</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Simplified Output</h3>
                <p className="text-gray-600 text-sm">Receive clear, easy-to-understand text with audio option</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default TextSimplifier;
