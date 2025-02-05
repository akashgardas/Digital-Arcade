import React from 'react';
import { Trophy, Users, Zap, ArrowRight, TowerControl as GameController } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: GameController,
      title: 'Multiple Games',
      description: 'Access a diverse collection of brain-training games',
    },
    {
      icon: Trophy,
      title: 'Leaderboards',
      description: 'Compete globally and track your progress',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with players worldwide',
    },
    {
      icon: Zap,
      title: 'Instant Play',
      description: 'No downloads required - play instantly',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black">
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 text-transparent bg-clip-text animate-gradient">
            Where Fun Meets Skill!
          </h1>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Level up your mind with our collection of engaging cognitive games designed for the next generation of gamers.
          </p>
          <Link
            to="/games"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-200 transform hover:scale-105"
          >
            Start Playing Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}