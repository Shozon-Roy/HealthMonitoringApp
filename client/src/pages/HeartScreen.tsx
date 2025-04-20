import React, { useState } from 'react';
import StatusBar from '@/components/StatusBar';
import IconBubble from '@/components/ui/icon-bubble';
import TabButton from '@/components/ui/tab-button';
import { Link } from 'wouter';

type TabType = 'Day' | 'Week' | 'Month';

interface HeartMetric {
  value: number;
  label: string;
  icon: string;
  color: 'primary' | 'secondary' | 'green';
  unit: string;
}

const HeartScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Month');
  
  const metrics: HeartMetric[] = [
    {
      value: 98,
      label: 'Heart Heart Variability',
      icon: 'favorite',
      color: 'primary',
      unit: 'bpm'
    },
    {
      value: 104,
      label: 'Average Heart Rate',
      icon: 'favorite',
      color: 'secondary',
      unit: 'bpm'
    },
    {
      value: 99,
      label: 'Pulse at Rest',
      icon: 'favorite',
      color: 'green',
      unit: 'bpm'
    },
    {
      value: 86,
      label: 'Pulse',
      icon: 'favorite',
      color: 'secondary',
      unit: 'bpm'
    }
  ];

  return (
    <div className="device-frame bg-white rounded-xl overflow-hidden shadow-lg max-w-sm w-full">
      <StatusBar />
      
      {/* Header */}
      <div className="px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <a className="material-icons-outlined mr-2">chevron_left</a>
          </Link>
          <h1 className="text-lg font-bold">Heart</h1>
        </div>
        <span className="material-icons-outlined">settings</span>
      </div>
      
      {/* Tabs */}
      <div className="flex px-4 py-2 space-x-2">
        <TabButton 
          label="Day" 
          active={activeTab === 'Day'} 
          onClick={() => setActiveTab('Day')}
        />
        <TabButton 
          label="Week" 
          active={activeTab === 'Week'} 
          onClick={() => setActiveTab('Week')}
        />
        <TabButton 
          label="Month" 
          active={activeTab === 'Month'} 
          onClick={() => setActiveTab('Month')}
        />
      </div>
      
      {/* Heart Metrics - First Row */}
      <div className="flex px-4 mt-4 space-x-4">
        {metrics.slice(0, 2).map((metric, index) => (
          <div key={index} className="flex-1 bg-white rounded-xl shadow p-3 flex flex-col items-center justify-center">
            <IconBubble icon={metric.icon} color={metric.color} className="mb-2" />
            <h2 className="text-xl font-bold">
              {metric.value} <span className="text-xs text-gray-400">{metric.unit}</span>
            </h2>
            <p className="text-xs text-center">{metric.label}</p>
            <span className="material-icons-outlined text-primary text-sm mt-1">trending_flat</span>
          </div>
        ))}
      </div>
      
      {/* Heart Metrics - Second Row */}
      <div className="flex px-4 mt-4 space-x-4">
        {metrics.slice(2, 4).map((metric, index) => (
          <div key={index} className="flex-1 bg-white rounded-xl shadow p-3 flex flex-col items-center justify-center">
            <IconBubble icon={metric.icon} color={metric.color} className="mb-2" />
            <h2 className="text-xl font-bold">
              {metric.value} <span className="text-xs text-gray-400">{metric.unit}</span>
            </h2>
            <p className="text-xs text-center">{metric.label}</p>
            <span className="material-icons-outlined text-primary text-sm mt-1">trending_flat</span>
          </div>
        ))}
      </div>
      
      {/* More Heart Button */}
      <div className="px-4 mt-6 mb-4">
        <button className="w-full py-3 bg-primary text-white rounded-full font-medium">
          More Heart
        </button>
      </div>
      
      {/* Bottom Navigation Indicator */}
      <div className="flex justify-center mb-2">
        <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default HeartScreen;
