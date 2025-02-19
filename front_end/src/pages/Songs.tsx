import React from 'react';
import { SongCard } from '../components/song/SongCard';
import { songs } from '../data/songs';

export const SongsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">热门歌曲</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {songs.map((song, index) => (
          <SongCard key={index} song={song} />
        ))}
      </div>
    </div>
  );
};