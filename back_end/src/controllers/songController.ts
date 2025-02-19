import { Request, Response } from 'express';

export const getSongs = async (req: Request, res: Response) => {
  try {
    // 模拟数据
    const songs = [
      { id: 1, title: "夜曲", artist: "周杰伦" },
      { id: 2, title: "平凡之路", artist: "朴树" }
    ];
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching songs" });
  }
};