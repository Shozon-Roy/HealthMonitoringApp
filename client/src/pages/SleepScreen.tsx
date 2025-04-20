import React, { useState } from 'react';
import StatusBar from '@/components/StatusBar';
import TabButton from '@/components/ui/tab-button';
import { Link } from 'wouter';

type TabType = 'Day' | 'Week' | 'Month';

interface BarData {
  day: string;
  height: string;
}

const SleepScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Week');
  
  // Data for the sleep chart
  const barData: BarData[] = [
    { day: 'Mon', height: 'h-28' },
    { day: 'Tue', height: 'h-16' },
    { day: 'Wed', height: 'h-32' },
    { day: 'Thu', height: 'h-28' },
    { day: 'Fri', height: 'h-24' },
    { day: 'Sat', height: 'h-12' },
    { day: 'Sun', height: 'h-28' }
  ];
  
  const timeLabels = ['22:00', '00:00', '02:00', '04:00', '06:00', '08:00'];

  return (
    <div className="device-frame bg-white rounded-xl overflow-hidden shadow-lg max-w-sm w-full">
      <StatusBar />
      
      {/* Header */}
      <div className="px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <a className="material-icons-outlined mr-2">chevron_left</a>
          </Link>
          <h1 className="text-lg font-bold">Sleep</h1>
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
      
      {/* Sleep Metrics */}
      <div className="px-4 mt-4">
        <div className="flex items-center mb-2">
          <div className="flex items-center mr-6">
            <span className="w-2 h-2 bg-primary rounded-full mr-1"></span>
            <span className="text-xs">AVG. Time in Bed</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-1"></span>
            <span className="text-xs">AVG. Time Asleep</span>
          </div>
        </div>
        
        <div className="flex justify-between">
          <div className="flex items-end">
            <span className="text-2xl font-bold">8</span>
            <span className="text-xs mb-1 mr-1">hr</span>
            <span className="text-2xl font-bold">25</span>
            <span className="text-xs mb-1">min</span>
          </div>
          <div className="flex items-end">
            <span className="text-2xl font-bold">8</span>
            <span className="text-xs mb-1 mr-1">hr</span>
            <span className="text-2xl font-bold">40</span>
            <span className="text-xs mb-1">min</span>
          </div>
        </div>
        
        {/* Date Range */}
        <div className="flex items-center mt-3 mb-4">
          <span className="material-icons-outlined text-gray-400 text-sm mr-1">date_range</span>
          <span className="text-xs text-gray-500">Oct 04 - Oct 10, 2021</span>
        </div>
      </div>
      
      {/* Sleep Chart */}
      <div className="px-4">
        <div className="relative h-40">
          {/* Time Labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400">
            {timeLabels.map((time, index) => (
              <div key={index}>{time}</div>
            ))}
          </div>
          
          {/* Chart Bars */}
          <div className="ml-12 h-full flex items-end justify-between">
            {barData.map((bar, index) => (
              <div key={index} className={`w-5 ${bar.height} bg-primary rounded-md`}></div>
            ))}
          </div>
          
          {/* Day Labels */}
          <div className="ml-12 mt-2 flex justify-between text-xs text-gray-400">
            {barData.map((bar, index) => (
              <div key={index}>{bar.day}</div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Sleep Schedule */}
      <div className="px-4 mt-6 mb-4">
        <div className="flex items-center justify-between bg-indigo-50 p-3 rounded-xl">
          <div className="flex items-center">
            <span className="material-icons-outlined text-[#7f65e6] mr-2">nightlight</span>
            <span className="text-sm">Sleep Schedule</span>
          </div>
          <span className="text-sm font-semibold">23:30 - 07:30</span>
        </div>
      </div>
      
      {/* Bottom Navigation Indicator */}
      <div className="flex justify-center mb-2">
        <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default SleepScreen;
