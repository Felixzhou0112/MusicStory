import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music2, User } from 'lucide-react';
import { getRandomImage } from '../../utils/image';
import { Story } from '../../types';

interface StoryCardProps {
  story: Story;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={getRandomImage()}
        alt={story.title}
        className="w-full h-48 object-cover hover:opacity-90 transition-opacity duration-300"
      />
      <CardHeader>
        <CardTitle className="text-lg hover:text-blue-600 cursor-pointer">{story.title}</CardTitle>
        <CardDescription className="flex items-center">
          <Music2 className="w-4 h-4 mr-1" />
          {story.song} - {story.artist}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{story.preview}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {story.author}
          </span>
          <span>{story.likes} 赞</span>
        </div>
      </CardContent>
    </Card>
  );
};