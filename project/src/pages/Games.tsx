import React from 'react';
import { Brain, Book, Swords, Puzzle, Timer } from 'lucide-react';

export default function Games() {
  const games = [
    {
      title: 'Memory Matrix',
      category: 'Puzzle',
      icon: Puzzle,
      description: 'Test your spatial memory with this engaging pattern recognition game',
      image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Knowledge Quest',
      category: 'Trivia',
      icon: Book,
      description: 'Challenge yourself with questions across various topics',
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Speed Reflex',
      category: 'Action',
      icon: Timer,
      description: 'Test your reaction time with fast-paced challenges',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Logic Labyrinth',
      category: 'Puzzle',
      icon: Brain,
      description: 'Navigate through increasingly complex puzzle scenarios',
      image: 'https://images.unsplash.com/photo-1616161560417-66d4db5892ec?auto=format&fit=crop&q=80&w=1000',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Game Collection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-purple-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <game.icon className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-purple-400">{game.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{game.title}</h3>
                <p className="text-gray-400 mb-4">{game.description}</p>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-200 transform hover:scale-105">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}