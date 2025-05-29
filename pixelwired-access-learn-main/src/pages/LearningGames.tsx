
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const LearningGames = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold text-indigo-900">PixelWired</h1>
              <p className="text-sm text-gray-600">Learning Games</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Games</h2>
          <p className="text-xl text-gray-600">Interactive educational games designed to make learning engaging and accessible</p>
        </div>

        {/* Feature Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Gamified Learning Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 text-lg">
              Our Learning Games transform educational content into engaging, interactive experiences. 
              Each game is carefully designed to accommodate different learning styles and abilities while making education fun and effective.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-2">Game Features</h3>
                <ul className="space-y-1 text-orange-800">
                  <li>• Adaptive difficulty levels</li>
                  <li>• Progress tracking and rewards</li>
                  <li>• Multi-sensory feedback</li>
                  <li>• Collaborative and solo modes</li>
                  <li>• Subject-specific content</li>
                </ul>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <h3 className="font-semibold text-pink-900 mb-2">Accessibility Design</h3>
                <ul className="space-y-1 text-pink-800">
                  <li>• Visual and audio cues</li>
                  <li>• Customizable interfaces</li>
                  <li>• Flexible timing options</li>
                  <li>• Clear instructions and hints</li>
                  <li>• Stress-free environments</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Game Categories */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Game Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">ABC</span>
                </div>
                <h3 className="font-semibold mb-2">Language Arts</h3>
                <p className="text-gray-600 text-sm">Word games, reading comprehension, and vocabulary building</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">123</span>
                </div>
                <h3 className="font-semibold mb-2">Mathematics</h3>
                <p className="text-gray-600 text-sm">Number games, problem-solving, and mathematical concepts</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold">SCI</span>
                </div>
                <h3 className="font-semibold mb-2">Science</h3>
                <p className="text-gray-600 text-sm">Interactive experiments and scientific discovery games</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 font-bold">MEM</span>
                </div>
                <h3 className="font-semibold mb-2">Memory Games</h3>
                <p className="text-gray-600 text-sm">Pattern recognition and memory enhancement activities</p>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-red-600 font-bold">LOG</span>
                </div>
                <h3 className="font-semibold mb-2">Logic Puzzles</h3>
                <p className="text-gray-600 text-sm">Critical thinking and problem-solving challenges</p>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg text-center">
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-indigo-600 font-bold">SOC</span>
                </div>
                <h3 className="font-semibold mb-2">Social Skills</h3>
                <p className="text-gray-600 text-sm">Collaborative games and communication activities</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Benefits */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Educational Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">ENG</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Enhanced Engagement</h3>
                  <p className="text-gray-600">Games naturally motivate students to participate and stay focused on learning objectives.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">RET</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Improved Retention</h3>
                  <p className="text-gray-600">Interactive gameplay helps students remember concepts better through experiential learning.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">CONF</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Builds Confidence</h3>
                  <p className="text-gray-600">Success in games creates positive associations with learning and boosts self-esteem.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Adaptive Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Adaptive Learning Technology</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Our games automatically adjust to each student's learning pace and style:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Automatic Adjustments</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Difficulty scaling based on performance</li>
                  <li>• Personalized hint systems</li>
                  <li>• Flexible time limits</li>
                  <li>• Alternative input methods</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Learning Support</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Visual and auditory feedback</li>
                  <li>• Progress celebration</li>
                  <li>• Mistake-friendly environment</li>
                  <li>• Multiple solution paths</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Coming Soon */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Coming Soon</CardTitle>
            <CardDescription>Learning Games are being developed</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              We are creating a comprehensive library of educational games that make learning fun while supporting students with diverse learning needs. 
              Each game will be thoroughly tested for accessibility and educational effectiveness.
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

export default LearningGames;
