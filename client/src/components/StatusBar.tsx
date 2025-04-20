import React from 'react';

interface StatusBarProps {
  time?: string;
}

const StatusBar: React.FC<StatusBarProps> = ({ time = "9:41" }) => {
  return (
    <div className="status-bar flex justify-between items-center bg-white px-3 py-1">
      <span className="text-xs font-semibold">{time}</span>
      <div className="flex items-center space-x-1">
        <span className="material-icons-outlined text-xs">signal_cellular_alt</span>
        <span className="material-icons-outlined text-xs">wifi</span>
        <span className="material-icons-outlined text-xs">battery_full</span>
      </div>
    </div>
  );
};

export default StatusBar;
