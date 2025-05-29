
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'hi' | 'te';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    appName: 'PixelWired',
    tagline: 'Accessible Learning Platform',
    signIn: 'Sign In',
    getStarted: 'Get Started',
    backToDashboard: 'Back to Dashboard',
    signOut: 'Sign Out',
    
    // Features page
    exploreFeatures: 'Explore Our Learning Features',
    featuresDescription: 'Discover powerful tools designed to make learning accessible and engaging for students with diverse learning needs.',
    readyToStart: 'Ready to Start Learning?',
    readyDescription: 'Join thousands of students who are already using PixelWired to enhance their learning experience. Sign up today and unlock all features.',
    signUpNow: 'Sign Up Now',
    explore: 'Explore',
    
    // Dashboard
    learningDashboard: 'Learning Dashboard',
    dashboardDescription: 'Choose a tool to enhance your learning experience',
    welcome: 'Welcome',
    uploadContent: 'Upload Content',
    gettingStarted: 'Getting Started',
    forNewUsers: 'For New Users',
    accessibilityFeatures: 'Accessibility Features',
    
    // Features
    textSimplifier: 'Text Simplifier',
    textSimplifierDesc: 'Convert complex academic content into easy-to-understand language suitable for all learning levels.',
    pixelAI: 'Pixel AI',
    pixelAIDesc: 'Your personal AI learning assistant that helps answer questions and guides your studies.',
    groupStudy: 'Group Study',
    groupStudyDesc: 'Collaborate with classmates in virtual study rooms with shared resources and tools.',
    learningGames: 'Learning Games',
    learningGamesDesc: 'Interactive educational games designed to make learning fun and engaging for all students.',
  },
  hi: {
    // Header
    appName: 'PixelWired',
    tagline: 'सुलभ शिक्षा मंच',
    signIn: 'साइन इन',
    getStarted: 'शुरू करें',
    backToDashboard: 'डैशबोर्ड पर वापस',
    signOut: 'साइन आउट',
    
    // Features page
    exploreFeatures: 'हमारी शिक्षा सुविधाओं का अन्वेषण करें',
    featuresDescription: 'विविध शिक्षा आवश्यकताओं वाले छात्रों के लिए शिक्षा को सुलभ और आकर्षक बनाने के लिए डिज़ाइन किए गए शक्तिशाली उपकरणों की खोज करें।',
    readyToStart: 'सीखना शुरू करने के लिए तैयार हैं?',
    readyDescription: 'हजारों छात्रों के साथ जुड़ें जो पहले से ही अपने शिक्षा अनुभव को बेहतर बनाने के लिए PixelWired का उपयोग कर रहे हैं। आज ही साइन अप करें और सभी सुविधाओं को अनलॉक करें।',
    signUpNow: 'अभी साइन अप करें',
    explore: 'अन्वेषण करें',
    
    // Dashboard
    learningDashboard: 'शिक्षा डैशबोर्ड',
    dashboardDescription: 'अपने शिक्षा अनुभव को बेहतर बनाने के लिए एक उपकरण चुनें',
    welcome: 'स्वागत',
    uploadContent: 'सामग्री अपलोड करें',
    gettingStarted: 'शुरुआत करना',
    forNewUsers: 'नए उपयोगकर्ताओं के लिए',
    accessibilityFeatures: 'पहुंच सुविधाएं',
    
    // Features
    textSimplifier: 'टेक्स्ट सरलीकरण',
    textSimplifierDesc: 'जटिल शैक्षणिक सामग्री को सभी शिक्षा स्तरों के लिए समझने योग्य भाषा में बदलें।',
    pixelAI: 'Pixel AI',
    pixelAIDesc: 'आपका व्यक्तिगत AI शिक्षा सहायक जो प्रश्नों के उत्तर देने और आपकी पढ़ाई का मार्गदर्शन करने में मदद करता है।',
    groupStudy: 'समूह अध्ययन',
    groupStudyDesc: 'साझा संसाधनों और उपकरणों के साथ आभासी अध्ययन कक्षों में सहपाठियों के साथ सहयोग करें।',
    learningGames: 'शिक्षा खेल',
    learningGamesDesc: 'सभी छात्रों के लिए शिक्षा को मजेदार और आकर्षक बनाने के लिए डिज़ाइन किए गए इंटरैक्टिव शैक्षिक खेल।',
  },
  te: {
    // Header
    appName: 'PixelWired',
    tagline: 'అందుబాటులో ఉన్న అభ్యాస వేదిక',
    signIn: 'సైన్ ఇన్',
    getStarted: 'ప్రారంభించండి',
    backToDashboard: 'డ్యాష్‌బోర్డ్‌కు తిరిగి',
    signOut: 'సైన్ అవుట్',
    
    // Features page
    exploreFeatures: 'మా అభ్యాస లక్షణాలను అన్వేషించండి',
    featuresDescription: 'వైవిధ్యమైన అభ్యాస అవసరాలు ఉన్న విద్యార్థుల కోసం అభ్యాసాన్ని అందుబాటులో మరియు ఆకర్షణీయంగా చేయడానికి రూపొందించబడిన శక్తివంతమైన సాధనాలను కనుగొనండి।',
    readyToStart: 'నేర్చుకోవడం ప్రారంభించడానికి సిద్ధంగా ఉన్నారా?',
    readyDescription: 'వారి అభ్యాస అనుభవాన్ని మెరుగుపరచుకోవడానికి PixelWired ఉపయోగిస్తున్న వేలాది విద్యార్థులతో చేరండి। ఈరోజే సైన్ అప్ చేసి అన్ని లక్షణాలను అన్‌లాక్ చేయండి।',
    signUpNow: 'ఇప్పుడే సైన్ అప్ చేయండి',
    explore: 'అన్వేషించండి',
    
    // Dashboard
    learningDashboard: 'అభ్యాస డ్యాష్‌బోర్డ్',
    dashboardDescription: 'మీ అభ్యాస అనుభవాన్ని మెరుగుపరచడానికి ఒక సాధనాన్ని ఎంచుకోండి',
    welcome: 'స్వాగతం',
    uploadContent: 'కంటెంట్ అప్‌లోడ్ చేయండి',
    gettingStarted: 'ప్రారంభించడం',
    forNewUsers: 'కొత్త వినియోగదారుల కోసం',
    accessibilityFeatures: 'అందుబాటు లక్షణాలు',
    
    // Features
    textSimplifier: 'టెక్స్ట్ సరళీకరణ',
    textSimplifierDesc: 'సంక్లిష్టమైన విద్యా కంటెంట్‌ను అన్ని అభ్యాస స్థాయిలకు అనుకూలమైన సులభంగా అర్థమయ్యే భాషలోకి మార్చండి।',
    pixelAI: 'Pixel AI',
    pixelAIDesc: 'మీ వ్యక్తిగత AI అభ్యాస సహాయకుడు ప్రश్నలకు సమాధానాలు ఇవ్వడంలో మరియు మీ అధ్యయనాలకు మార్గదర్శనం చేయడంలో సహాయపడుతుంది।',
    groupStudy: 'గ్రూప్ స్టడీ',
    groupStudyDesc: 'భాగస్వామ్య వనరులు మరియు సాధనాలతో వర్చువల్ స్టడీ రూమ్‌లలో క్లాస్‌మేట్‌లతో సహకరించండి।',
    learningGames: 'అభ్యాస ఆటలు',
    learningGamesDesc: 'అన్ని విద్యార్థుల కోసం అభ్యాసాన్ని సరదాగా మరియు ఆకర్షణీయంగా చేయడానికి రూపొందించబడిన ఇంటరాక్టివ్ విద్యా ఆటలు।',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('pixelwired_language') as Language;
    if (savedLanguage && ['en', 'hi', 'te'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('pixelwired_language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
