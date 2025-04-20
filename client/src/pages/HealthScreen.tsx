import React from 'react';
import StatusBar from '@/components/StatusBar';
import BottomNavigation from '@/components/BottomNavigation';
import { healthMetrics } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const HealthScreen: React.FC = () => {
  return (
    <div className="device-frame bg-white rounded-xl overflow-hidden shadow-lg max-w-sm w-full">
      <StatusBar />
      
      {/* Header */}
      <div className="px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold">Health</h1>
        <div className="flex items-center">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary mr-2">
            <span className="material-icons-outlined text-white text-xs">help_outline</span>
          </div>
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="material-icons-outlined">more_horiz</span>
          </div>
        </div>
      </div>
      
      {/* Today's Summary */}
      <div className="px-4 py-2">
        <Card className="bg-gradient-to-r from-primary/20 to-primary/10 mb-4">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold">Today's Summary</h2>
              <span className="text-xs text-gray-600">April 20, 2025</span>
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2">
                  <span className="material-icons-outlined text-white text-sm">favorite</span>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Average BPM</p>
                  <p className="font-bold">85 <span className="text-xs font-normal text-gray-500">bpm</span></p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2">
                  <span className="material-icons-outlined text-white text-sm">directions_walk</span>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Steps</p>
                  <p className="font-bold">8,745</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2">
                  <span className="material-icons-outlined text-white text-sm">local_fire_department</span>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Calories</p>
                  <p className="font-bold">1,850</p>
                </div>
              </div>
            </div>
            
            <button className="w-full text-center text-xs text-primary font-medium flex items-center justify-center">
              View Details
              <span className="material-icons-outlined text-xs ml-1">arrow_forward</span>
            </button>
          </CardContent>
        </Card>
      </div>
      
      {/* Health Metrics */}
      <div className="px-4 pb-4">
        <h2 className="text-sm font-bold mb-3">Health Metrics</h2>
        <div className="grid grid-cols-1 gap-3">
          {healthMetrics.map((metric) => (
            <Card key={metric.id} className="overflow-hidden">
              <CardContent className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2`}>
                      <span className="material-icons-outlined text-white text-sm">{metric.icon}</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">{metric.name}</p>
                      <p className="font-bold">{metric.value} <span className="text-xs font-normal text-gray-500">{metric.unit}</span></p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className={`material-icons-outlined text-sm ${
                      metric.trend === 'up' ? 'text-green-500' : 
                      metric.trend === 'down' ? 'text-red-500' : 
                      'text-gray-500'
                    }`}>
                      {metric.trend === 'up' ? 'trending_up' : 
                       metric.trend === 'down' ? 'trending_down' : 
                       'trending_flat'}
                    </span>
                  </div>
                </div>
                
                <Progress 
                  value={typeof metric.value === 'number' ? 
                    ((metric.id === 'steps' && metric.value > 10000) ? 100 : 
                     (metric.id === 'steps') ? metric.value / 100 : 
                     (metric.id === 'calories' && metric.value > 2000) ? 100 : 
                     (metric.id === 'calories') ? metric.value / 20 : 
                     (metric.id === 'weight') ? 70 : 
                     (metric.id === 'water') ? 60 : 70) : 60}
                  className="h-1"
                />
                
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-400">Daily Target</span>
                  <span className="text-xs text-gray-400">
                    {metric.id === 'steps' ? '10,000' : 
                     metric.id === 'water' ? '2L' : 
                     metric.id === 'calories' ? '2,000 cal' : 
                     metric.id === 'weight' ? 'On track' : ''}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <BottomNavigation activeTab="health" />
    </div>
  );
};

export default HealthScreen;