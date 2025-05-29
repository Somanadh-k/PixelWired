
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const GroupStudy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold text-indigo-900">PixelWired</h1>
              <p className="text-sm text-gray-600">Group Study</p>
            </div>
            <Button onClick={() => navigate('/dashboard')} variant="outline">
              Back to Dashboard
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Group Study</h2>
          <p className="text-xl text-gray-600">Collaborate with classmates in virtual study rooms designed for inclusive learning</p>
        </div>

        {/* Feature Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Virtual Study Rooms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 text-lg">
              Our Group Study feature creates inclusive virtual environments where students can collaborate effectively, 
              regardless of their learning differences. Study together while maintaining individual accessibility needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Collaboration Tools</h3>
                <ul className="space-y-1 text-purple-800">
                  <li>• Shared digital whiteboards</li>
                  <li>• Real-time document editing</li>
                  <li>• Voice and video chat</li>
                  <li>• Screen sharing capabilities</li>
                  <li>• Study session recording</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-2">Accessibility Features</h3>
                <ul className="space-y-1 text-orange-800">
                  <li>• Individual audio controls</li>
                  <li>• Text-to-speech for shared content</li>
                  <li>• Visual focus indicators</li>
                  <li>• Adjustable interface elements</li>
                  <li>• Break time reminders</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Study Room Types */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Types of Study Rooms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">HW</span>
                </div>
                <h3 className="font-semibold mb-2">Homework Help</h3>
                <p className="text-gray-600 text-sm">Work together on assignments with peer support and guidance</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">EXAM</span>
                </div>
                <h3 className="font-semibold mb-2">Exam Preparation</h3>
                <p className="text-gray-600 text-sm">Collaborative review sessions with shared study materials</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">PROJ</span>
                </div>
                <h3 className="font-semibold mb-2">Project Work</h3>
                <p className="text-gray-600 text-sm">Coordinate group projects with organized task management</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">How Group Study Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Create or Join a Room</h3>
                  <p className="text-gray-600">Start a new study session or join existing rooms based on subject or topic.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Set Your Preferences</h3>
                  <p className="text-gray-600">Customize your accessibility settings and communication preferences.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Collaborate and Learn</h3>
                  <p className="text-gray-600">Work together using shared tools while maintaining your individual learning needs.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Benefits of Group Study</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">For All Students</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Enhanced understanding through peer explanation</li>
                  <li>• Improved motivation and accountability</li>
                  <li>• Development of teamwork skills</li>
                  <li>• Diverse perspectives on problems</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">For Students with Learning Differences</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Reduced isolation and increased confidence</li>
                  <li>• Multiple learning modalities in one session</li>
                  <li>• Peer support and understanding</li>
                  <li>• Flexible participation options</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Coming Soon */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Coming Soon</CardTitle>
            <CardDescription>Group Study rooms are being developed</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              We are building comprehensive virtual study rooms that prioritize accessibility and inclusive collaboration. 
              These features will help you connect with classmates while maintaining your individual learning preferences.
            </p>
            <Button disabled className="w-full md:w-auto">
              Feature In Development
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default GroupStudy;
