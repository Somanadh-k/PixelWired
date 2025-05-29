import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';
import ThemeToggle from '@/components/ThemeToggle';
import { Upload } from 'lucide-react';

const Dashboard = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

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

  if (!isAuthenticated) {
    return null;
  }

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
              <span className="text-foreground">{t('welcome')}, {user?.name}</span>
              <Button onClick={handleLogout} variant="outline">
                {t('signOut')}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">{t('learningDashboard')}</h2>
          <p className="text-muted-foreground">{t('dashboardDescription')}</p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <Upload className="w-4 h-4 mr-2" />
                  {t('uploadContent')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 bg-card rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">{t('gettingStarted')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">{t('forNewUsers')}</h4>
              <ul className="space-y-1 text-sm">
                <li>• Start with the Text Simplifier to convert complex materials</li>
                <li>• Use Pixel AI for personalized learning assistance</li>
                <li>• Join Group Study sessions to collaborate with peers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">{t('accessibilityFeatures')}</h4>
              <ul className="space-y-1 text-sm">
                <li>• Dyslexia-friendly fonts and layouts</li>
                <li>• Audio narration for all content</li>
                <li>• High contrast mode available</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
