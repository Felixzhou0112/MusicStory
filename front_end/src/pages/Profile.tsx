import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getRandomImage } from '../utils/image';

export const ProfilePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Card className="max-w-2xl mx-auto mb-6">
        <CardHeader>
          <CardTitle>个人主页</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <img
              src={getRandomImage()}
              alt="avatar"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold">音乐故事家</h3>
            <p className="text-gray-500 mb-4">已创作 12 个故事 · 获得 328 个赞</p>
            <Button>编辑资料</Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-bold">我的故事</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((_, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={getRandomImage()}
                alt={`story ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-lg">我的第 {index + 1} 个故事</CardTitle>
                <CardDescription>创作于 2024/03/18</CardDescription>
              </CardHeader>
              <CardContent>             
                <div className="flex justify-between text-sm text-gray-500">
                  <span>32 赞</span>
                  <Button variant="outline" size="sm">编辑</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};