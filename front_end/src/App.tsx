import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HomePage } from './pages/Home';
import { SongsPage } from './pages/Songs';
import { WritePage } from './pages/Write';
import { ProfilePage } from './pages/Profile';
import { PageType } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'songs':
        return <SongsPage />;
      case 'write':
        return <WritePage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar setPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;