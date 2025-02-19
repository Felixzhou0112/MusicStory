import { Request, Response } from 'express';

export const getStories = async (req: Request, res: Response) => {
  try {
    // 模拟数据
    const stories = [
      { id: 1, title: "夜曲的故事", content: "这是一个关于夜曲的故事..." },
      { id: 2, title: "平凡之路的故事", content: "这是一个关于平凡之路的故事..." }
    ];
    res.json(stories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching stories" });
  }
};