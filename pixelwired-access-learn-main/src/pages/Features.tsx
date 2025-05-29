
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';
import ThemeToggle from '@/components/ThemeToggle';

const Features = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const features = [
    {
      title: t('textSimplifier'),
      description: t('textSimplifierDesc'),
      route: '/text-simplifier',
      color: 'bg-blue-500'
    },
    {
      title: t('pixelAI'),
      description: t('pixelAIDesc'),
      route: '/pixel-ai',
      color: 'bg-green-500'
    },
    {
      title: t('groupStudy'),
      description: t('groupStudyDesc'),
      route: '/group-study',
      color: 'bg-purple-500'
    },
    {
      title: t('learningGames'),
      description: t('learningGamesDesc'),
      route: '/learning-games',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold text-primary">{t('appName')}</h1>
              <p className="text-sm text-muted-foreground">{t('tagline')}</p>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <LanguageSelector />
              <Button onClick={() => navigate('/login')} variant="outline">
                {t('signIn')}
              </Button>
              <Button onClick={() => navigate('/login')}>
                {t('getStarted')}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t('exploreFeatures')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('featuresDescription')}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center`}>
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 text-base">
                  {feature.description}
                </CardDescription>
                <Button 
                  onClick={() => navigate(feature.route)}
                  className="w-full"
                  size="lg"
                >
                  {t('explore')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-accent rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-accent-foreground mb-4">{t('readyToStart')}</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t('readyDescription')}
          </p>
          <Button 
            onClick={() => navigate('/login')} 
            size="lg"
            className="px-8"
          >
            {t('signUpNow')}
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Features;
