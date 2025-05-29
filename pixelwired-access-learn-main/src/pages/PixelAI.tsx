
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';

const PixelAI = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold text-indigo-900">{t('appName')}</h1>
              <p className="text-sm text-gray-600">{t('pixelAI')} Assistant</p>
            </div>
            <div className="flex items-center space-x-4">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('pixelAI')} Assistant</h2>
          <p className="text-xl text-gray-600">Your intelligent learning companion for personalized educational support</p>
        </div>

        {/* Feature Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Meet Pixel, Your AI Learning Assistant</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 text-lg">
              Pixel is an advanced AI assistant designed specifically for students with diverse learning needs. 
              It provides personalized support, answers questions, and helps guide your educational journey with patience and understanding.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">AI Capabilities</h3>
                <ul className="space-y-1 text-green-800">
                  <li>• Natural conversation interface</li>
                  <li>• Subject-specific expertise</li>
                  <li>• Adaptive learning support</li>
                  <li>• Multi-language communication</li>
                  <li>• Voice interaction support</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Learning Support</h3>
                <ul className="space-y-1 text-purple-800">
                  <li>• Homework assistance</li>
                  <li>• Concept explanations</li>
                  <li>• Study planning</li>
                  <li>• Progress tracking</li>
                  <li>• Motivational guidance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How Pixel Helps */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">How Pixel Supports Your Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">Q&A</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Ask Questions Anytime</h3>
                  <p className="text-gray-600">Get instant answers to your academic questions in simple, easy-to-understand language.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">EXP</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Explain Complex Concepts</h3>
                  <p className="text-gray-600">Break down difficult topics into manageable pieces with examples and analogies.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">PLAN</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Create Study Plans</h3>
                  <p className="text-gray-600">Develop personalized study schedules based on your learning style and goals.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Accessibility Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Designed for Accessibility</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Pixel is specifically designed to support students with learning disabilities and diverse learning needs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-700">
                <li>• Adjustable response complexity</li>
                <li>• Visual learning aids</li>
                <li>• Repetition and reinforcement</li>
                <li>• Patient, encouraging tone</li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li>• Audio response options</li>
                <li>• Step-by-step guidance</li>
                <li>• Multiple explanation methods</li>
                <li>• Stress-free learning environment</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PixelAI;
