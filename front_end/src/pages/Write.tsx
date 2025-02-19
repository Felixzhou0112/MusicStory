import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getRandomImage } from '../utils/image';

export const WritePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>创作新故事</CardTitle>
          <CardDescription>选择一首歌，分享你的故事</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">选择歌曲</label>
              <Input placeholder="搜索歌曲..." />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">故事标题</label>
              <Input placeholder="给你的故事起个标题" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">上传封面</label>
              <div className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:border-blue-500">
                <img
                  src={getRandomImage()}
                  alt="story cover"
                  className="w-full h-48 object-cover mb-2 rounded-lg"
                />
                <p className="text-sm text-gray-500">点击更换封面图片</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">故事内容</label>
              <textarea
                className="w-full h-64 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="在这里写下你的故事..."
              />
            </div>
            <Button className="w-full">发布故事</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};