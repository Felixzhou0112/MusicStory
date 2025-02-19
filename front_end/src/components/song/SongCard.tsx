import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getRandomImage } from '../../utils/image';
import { Song } from '../../types';

interface SongCardProps {
  song: Song;
}

export const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <img
        src={getRandomImage()}
        alt={song.title}
        className="w-full h-48 object-cover hover:opacity-90 transition-opacity duration-300"
      />
      <CardHeader>
        <CardTitle className="hover:text-blue-600 cursor-pointer">{song.title}</CardTitle>
        <CardDescription>{song.artist}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-blue-600">{song.stories} 个故事</p>
      </CardContent>
    </Card>
  );
};