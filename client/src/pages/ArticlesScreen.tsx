import React from 'react';
import StatusBar from '@/components/StatusBar';
import BottomNavigation from '@/components/BottomNavigation';
import { articles } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

const ArticlesScreen: React.FC = () => {
  return (
    <div className="device-frame bg-white rounded-xl overflow-hidden shadow-lg max-w-sm w-full">
      <StatusBar />
      
      {/* Header */}
      <div className="px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold">Articles</h1>
        <div className="flex items-center">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary mr-2">
            <span className="material-icons-outlined text-white text-xs">help_outline</span>
          </div>
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="material-icons-outlined">more_horiz</span>
          </div>
        </div>
      </div>
      
      {/* Search Bar */}
      <div className="px-4 py-2">
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
          <span className="material-icons-outlined text-gray-400 mr-2">search</span>
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="bg-transparent focus:outline-none text-sm w-full"
          />
        </div>
      </div>
      
      {/* Featured Article */}
      <div className="px-4 pt-4">
        <h2 className="text-sm font-bold mb-3">Featured Article</h2>
        <Card className="overflow-hidden mb-4">
          <div className="h-32 bg-indigo-100 flex items-center justify-center relative">
            <span className="material-icons-outlined text-indigo-300 text-5xl">article</span>
            <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
              New
            </div>
          </div>
          <CardContent className="p-3">
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <span>Health</span>
              <span className="mx-1">•</span>
              <span>April 15, 2025</span>
            </div>
            <h3 className="font-bold text-sm leading-tight mb-1">How to maintain healthy lifestyle during pandemic</h3>
            <p className="text-xs text-gray-600 mb-2">Essential tips for staying healthy and active while maintaining social distancing measures...</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mr-1">
                  <span className="material-icons-outlined text-gray-500 text-xs">timer</span>
                </span>
                <span className="text-xs text-gray-500">5 min read</span>
              </div>
              <button className="text-primary text-xs font-medium">Read More</button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent Articles */}
      <div className="px-4 pb-4">
        <h2 className="text-sm font-bold mb-3">Recent Articles</h2>
        {articles.map((article) => (
          <Card key={article.id} className="mb-3">
            <CardContent className="p-0">
              <div className="flex p-3">
                <div className="w-16 h-16 rounded-lg bg-gray-200 overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <span className="material-icons-outlined text-gray-400">article</span>
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex items-center text-xs text-gray-500 mb-1">
                    <span>{article.category}</span>
                    <span className="mx-1">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-medium text-sm leading-tight">{article.title}</h3>
                  <p className="text-xs text-gray-500 truncate mt-1">{article.summary}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Bottom Navigation */}
      <BottomNavigation activeTab="articles" />
    </div>
  );
};

export default ArticlesScreen;