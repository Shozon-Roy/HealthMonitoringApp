import React, { useState } from 'react';
import StatusBar from '@/components/StatusBar';
import BottomNavigation from '@/components/BottomNavigation';
import { Link } from 'wouter';

type TabType = 'Case' | 'Vaccines' | 'News';

const CovidScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('News');

  return (
    <div className="device-frame bg-white rounded-xl overflow-hidden shadow-lg max-w-sm w-full">
      <StatusBar />
      
      {/* Header */}
      <div className="px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold">Covid-19</h1>
        <div className="flex items-center">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary mr-2">
            <span className="material-icons-outlined text-white text-xs">help_outline</span>
          </div>
          <span className="material-icons-outlined">more_horiz</span>
        </div>
      </div>
      
      {/* Country Selection */}
      <div className="px-4 py-2 flex items-center">
        <div className="flex items-center">
          <svg 
            className="w-6 h-6 rounded-full mr-2" 
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <rect y="0.5" width="512" height="511" fill="#f0f0f0"/>
              <g>
                <rect y="0.5" width="512" height="39.385" fill="#d80027"/>
                <rect y="78.77" width="512" height="39.385" fill="#d80027"/>
                <rect y="157.04" width="512" height="39.385" fill="#d80027"/>
                <rect y="235.31" width="512" height="39.385" fill="#d80027"/>
                <rect y="313.58" width="512" height="39.385" fill="#d80027"/>
                <rect y="391.85" width="512" height="39.385" fill="#d80027"/>
                <rect y="470.12" width="512" height="39.385" fill="#d80027"/>
              </g>
              <rect y="0.5" width="256" height="275.5" fill="#2e4b80"/>
              <g>
                <g>
                  <polygon points="29.867,51.187 32.899,60.481 42.866,60.481 34.852,66.235 37.883,75.529 29.867,69.775 21.851,75.529 24.883,66.235 16.867,60.481 26.834,60.481"/>
                  <polygon points="29.867,90.587 32.899,99.881 42.866,99.881 34.852,105.635 37.883,114.929 29.867,109.175 21.851,114.929 24.883,105.635 16.867,99.881 26.834,99.881"/>
                  <polygon points="29.867,129.987 32.899,139.281 42.866,139.281 34.852,145.035 37.883,154.328 29.867,148.574 21.851,154.328 24.883,145.035 16.867,139.281 26.834,139.281"/>
                  <polygon points="29.867,169.385 32.899,178.679 42.866,178.679 34.852,184.433 37.883,193.727 29.867,187.973 21.851,193.727 24.883,184.433 16.867,178.679 26.834,178.679"/>
                  <polygon points="29.867,208.785 32.899,218.079 42.866,218.079 34.852,223.833 37.883,233.127 29.867,227.373 21.851,233.127 24.883,223.833 16.867,218.079 26.834,218.079"/>
                </g>
                <g>
                  <polygon points="69.267,70.891 72.299,80.185 82.266,80.185 74.25,85.938 77.283,95.233 69.267,89.478 61.25,95.233 64.283,85.938 56.266,80.185 66.234,80.185"/>
                  <polygon points="69.267,110.291 72.299,119.585 82.266,119.585 74.25,125.339 77.283,134.633 69.267,128.879 61.25,134.633 64.283,125.339 56.266,119.585 66.234,119.585"/>
                  <polygon points="69.267,149.691 72.299,158.985 82.266,158.985 74.25,164.739 77.283,174.033 69.267,168.279 61.25,174.033 64.283,164.739 56.266,158.985 66.234,158.985"/>
                  <polygon points="69.267,189.091 72.299,198.385 82.266,198.385 74.25,204.139 77.283,213.433 69.267,207.679 61.25,213.433 64.283,204.139 56.266,198.385 66.234,198.385"/>
                </g>
                <g>
                  <polygon points="108.666,51.187 111.699,60.481 121.666,60.481 113.65,66.235 116.683,75.529 108.666,69.775 100.65,75.529 103.682,66.235 95.667,60.481 105.634,60.481"/>
                  <polygon points="108.666,90.587 111.699,99.881 121.666,99.881 113.65,105.635 116.683,114.929 108.666,109.175 100.65,114.929 103.682,105.635 95.667,99.881 105.634,99.881"/>
                  <polygon points="108.666,129.987 111.699,139.281 121.666,139.281 113.65,145.035 116.683,154.328 108.666,148.574 100.65,154.328 103.682,145.035 95.667,139.281 105.634,139.281"/>
                  <polygon points="108.666,169.385 111.699,178.679 121.666,178.679 113.65,184.433 116.683,193.727 108.666,187.973 100.65,193.727 103.682,184.433 95.667,178.679 105.634,178.679"/>
                  <polygon points="108.666,208.785 111.699,218.079 121.666,218.079 113.65,223.833 116.683,233.127 108.666,227.373 100.65,233.127 103.682,223.833 95.667,218.079 105.634,218.079"/>
                </g>
                <g>
                  <polygon points="148.066,70.891 151.099,80.185 161.066,80.185 153.05,85.938 156.083,95.233 148.066,89.478 140.05,95.233 143.082,85.938 135.067,80.185 145.033,80.185"/>
                  <polygon points="148.066,110.291 151.099,119.585 161.066,119.585 153.05,125.339 156.083,134.633 148.066,128.879 140.05,134.633 143.082,125.339 135.067,119.585 145.033,119.585"/>
                  <polygon points="148.066,149.691 151.099,158.985 161.066,158.985 153.05,164.739 156.083,174.033 148.066,168.279 140.05,174.033 143.082,164.739 135.067,158.985 145.033,158.985"/>
                  <polygon points="148.066,189.091 151.099,198.385 161.066,198.385 153.05,204.139 156.083,213.433 148.066,207.679 140.05,213.433 143.082,204.139 135.067,198.385 145.033,198.385"/>
                </g>
                <g>
                  <polygon points="187.467,51.187 190.5,60.481 200.467,60.481 192.45,66.235 195.483,75.529 187.467,69.775 179.45,75.529 182.483,66.235 174.467,60.481 184.433,60.481"/>
                  <polygon points="187.467,90.587 190.5,99.881 200.467,99.881 192.45,105.635 195.483,114.929 187.467,109.175 179.45,114.929 182.483,105.635 174.467,99.881 184.433,99.881"/>
                  <polygon points="187.467,129.987 190.5,139.281 200.467,139.281 192.45,145.035 195.483,154.328 187.467,148.574 179.45,154.328 182.483,145.035 174.467,139.281 184.433,139.281"/>
                  <polygon points="187.467,169.385 190.5,178.679 200.467,178.679 192.45,184.433 195.483,193.727 187.467,187.973 179.45,193.727 182.483,184.433 174.467,178.679 184.433,178.679"/>
                  <polygon points="187.467,208.785 190.5,218.079 200.467,218.079 192.45,223.833 195.483,233.127 187.467,227.373 179.45,233.127 182.483,223.833 174.467,218.079 184.433,218.079"/>
                </g>
                <g>
                  <polygon points="226.867,70.891 229.899,80.185 239.866,80.185 231.85,85.938 234.883,95.233 226.867,89.478 218.85,95.233 221.883,85.938 213.867,80.185 223.833,80.185"/>
                  <polygon points="226.867,110.291 229.899,119.585 239.866,119.585 231.85,125.339 234.883,134.633 226.867,128.879 218.85,134.633 221.883,125.339 213.867,119.585 223.833,119.585"/>
                  <polygon points="226.867,149.691 229.899,158.985 239.866,158.985 231.85,164.739 234.883,174.033 226.867,168.279 218.85,174.033 221.883,164.739 213.867,158.985 223.833,158.985"/>
                  <polygon points="226.867,189.091 229.899,198.385 239.866,198.385 231.85,204.139 234.883,213.433 226.867,207.679 218.85,213.433 221.883,204.139 213.867,198.385 223.833,198.385"/>
                </g>
              </g>
            </g>
          </svg>
          <span className="text-sm">United States</span>
        </div>
        <span className="ml-auto text-sm text-green-500">44,199,496</span>
      </div>
      
      {/* Tabs */}
      <div className="flex border-b">
        <div 
          className={`flex-1 text-center py-2 text-sm cursor-pointer ${activeTab === 'Case' ? 'border-b-2 border-primary text-primary' : ''}`}
          onClick={() => setActiveTab('Case')}
        >
          Case
        </div>
        <div 
          className={`flex-1 text-center py-2 text-sm cursor-pointer ${activeTab === 'Vaccines' ? 'border-b-2 border-primary text-primary' : ''}`}
          onClick={() => setActiveTab('Vaccines')}
        >
          Vaccines
        </div>
        <div 
          className={`flex-1 text-center py-2 text-sm cursor-pointer ${activeTab === 'News' ? 'border-b-2 border-primary text-primary' : ''}`}
          onClick={() => setActiveTab('News')}
        >
          News
        </div>
      </div>
      
      {/* News Card */}
      <div className="mx-4 my-4 bg-indigo-100 rounded-xl overflow-hidden">
        <div className="p-4">
          <div className="flex justify-center items-center h-32 relative">
            <div className="bg-blue-200 w-24 h-24 rounded-full flex items-center justify-center absolute">
              <div className="flex items-center justify-center">
                <span className="material-icons-outlined text-white">add</span>
              </div>
            </div>
            <svg className="w-32 absolute" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="80" x="50" y="40" fill="#4F46E5" opacity="0.5" rx="8" />
              <path d="M100 50 L120 80 L80 80 Z" fill="#FFF" />
              <circle cx="110" cy="65" r="5" fill="#FFF" />
              <rect width="60" height="15" x="70" y="95" fill="#A5B4FC" rx="4" />
              <rect width="40" height="10" x="80" y="115" fill="#A5B4FC" rx="4" />
            </svg>
          </div>
          <div className="mt-2">
            <h3 className="font-bold text-sm leading-tight">WHO strengthens COVID-19 response by improving regional vac...</h3>
            <p className="text-xs text-gray-600 mt-1">7 September 2021</p>
          </div>
        </div>
      </div>
      
      {/* Latest News */}
      <div className="px-4 mb-4">
        <h3 className="font-bold text-sm mb-3">Latest News</h3>
        <div className="flex items-start mb-4">
          <div className="w-16 h-16 rounded-lg mr-3 bg-gray-200 flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
              <rect width="80" height="80" fill="#A5B4FC" />
              <circle cx="40" cy="30" r="15" fill="#4F46E5" />
              <rect width="50" height="30" x="15" y="40" fill="#4F46E5" rx="4" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold leading-tight">WHO's work towards vaccine equity continues in Africa and...</p>
          </div>
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <BottomNavigation activeTab="covid" />
    </div>
  );
};

export default CovidScreen;
