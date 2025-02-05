import React from 'react';
import { Brain, Heart, Target } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: 'Gardas Akash',
      role: 'Lead Game Designer',
      image: 'https://i.imgur.com/IjI5BVu.jpeg',
    },
    {
      name: 'Shaik Safiullah Sahil Hussain',
      role: 'Cognitive Science Expert',
      image: 'https://i.imgur.com/AKEjoAB.jpeg',
    },
    {
      name: 'Vinjam Bala Krishna Chowdary',
      role: 'Technical Lead',
      image: 'https://static.toiimg.com/thumb/msid-116464911,width-1280,height-720,resizemode-4/116464911.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Our Mission</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Digital Arcade combines cognitive science with engaging gameplay to create an environment where stress relief meets mental development.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Brain,
              title: 'Cognitive Development',
              description: 'Games designed to enhance memory, problem-solving, and critical thinking',
            },
            {
              icon: Heart,
              title: 'Mental Wellness',
              description: 'Stress-relief through engaging and enjoyable gameplay experiences',
            },
            {
              icon: Target,
              title: 'Skill Growth',
              description: 'Progressive challenges that adapt to your skill level',
            },
          ].map((value, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-purple-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <value.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-12">Meet Our Team</h2>
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