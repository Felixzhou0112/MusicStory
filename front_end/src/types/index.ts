export interface Story {
    title: string;
    song: string;
    artist: string;
    author: string;
    likes: number;
    preview: string;
  }
  
  export interface Song {
    title: string;
    artist: string;
    stories: number;
  }
  
  export type PageType = 'home' | 'songs' | 'write' | 'profile';