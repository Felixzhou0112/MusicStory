import React from 'react';
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import { StoryCard } from '../components/story/StoryCard';
import { stories } from '../data/stories';

export const HomePage: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input className="pl-10" placeholder="搜索歌曲或故事..." />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {stories.map((story, index) => (
          <StoryCard key={index} story={story} />
        ))}
      </div>
    </main>
  );
};