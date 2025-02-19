import React from 'react';
import { Button } from "@/components/ui/button";
import { PenSquare, Search, Home, Music2, User } from 'lucide-react';
import { PageType } from '../../types';

interface NavbarProps {
  setPage: (page: PageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ setPage }) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-8">
            <button onClick={() => setPage('home')} className="text-xl font-bold">MusicStory</button>
            <div className="flex space-x-4">
              <Button variant="ghost" onClick={() => setPage('home')} className="flex items-center">
                <Home className="w-4 h-4 mr-2" />
                首页
              </Button>
              <Button variant="ghost" onClick={() => setPage('songs')} className="flex items-center">
                <Music2 className="w-4 h-4 mr-2" />
                歌曲
              </Button>
              <Button variant="ghost" onClick={() => setPage('profile')} className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                我的
              </Button>
            </div>
          </div>
          <Button onClick={() => setPage('write')} className="flex items-center bg-blue-600">
            <PenSquare className="w-4 h-4 mr-2" />
            写故事
          </Button>
        </div>
      </div>
    </nav>
  );
};