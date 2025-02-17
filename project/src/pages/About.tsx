import React from 'react';
import { Brain, Heart, Target, Code, Zap } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: 'Gardas Akash',
      role: 'class topperrr(10 GPA)',
      image: 'https://i.imgur.com/IjI5BVu.jpeg',
    },
    {
      name: 'Shaik Safiullah Sahil Hussain',
      role: 'just a chill guy',
      image: 'https://i.imgur.com/AKEjoAB.jpeg',
    },
    {
      name: 'Vinjam Bala Krishna Chowdary',
      role: 'andagaadu',
      image: 'https://static.toiimg.com/thumb/msid-116464911,width-1280,height-720,resizemode-4/116464911.jpg',
    },
  ];

  const benefits = [
    {
      icon: Brain,
      title: 'Cognitive Enhancment',
      description: 'Our games are specifically designd to improve memory, problem-solving abilities, and logical thinking skills.',
    },
    {
      icon: Heart,
      title: 'Stress Relief',
      description: 'Take meaningfull breaks from intensive coding sessions to reduce mental fatigue and maintain productivity.',
    },
    {
      icon: Code,
      title: 'Algorithm Visualisation',
      description: 'Learn and understand complex algorithms through interactive gameplay and visual representations.',
    },
    {
      icon: Target,
      title: 'Skill Developement',
      description: 'Enhance your programming abilities through games that mirror common coding challenges.',
    },
    {
      icon: Zap,
      title: 'Quick Mental Refresh',
      description: 'Perfect for short breaks between coding sessions to maintain mental clarity and focus.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Our Mision</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Digital Arcade combines cognitive science with engaging gameplay to create an environment where developers can take meaningful breaks while enhancing their problem-solving abilities. This is the first phase of our project at CVR College of Engineering, specifically designed to help our coding batch students take relaxing breaks between their rigorous programming sessions.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Digital Arcde?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-purple-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <benefit.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-12">Meet Our Teem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-purple-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 p-6"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-purple-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}