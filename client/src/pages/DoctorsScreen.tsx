import React from 'react';
import StatusBar from '@/components/StatusBar';
import BottomNavigation from '@/components/BottomNavigation';
import { doctors } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const DoctorsScreen: React.FC = () => {
  return (
    <div className="device-frame bg-white rounded-xl overflow-hidden shadow-lg max-w-sm w-full">
      <StatusBar />
      
      {/* Header */}
      <div className="px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold">Doctors</h1>
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
            placeholder="Search doctors, specialties..." 
            className="bg-transparent focus:outline-none text-sm w-full"
          />
        </div>
      </div>
      
      {/* Categories */}
      <div className="px-4 pt-3 pb-1 flex overflow-x-auto hide-scrollbar">
        <div className="flex space-x-2">
          <Badge variant="outline" className="bg-primary text-white py-1 px-3 rounded-full whitespace-nowrap">
            All Doctors
          </Badge>
          <Badge variant="outline" className="bg-white border-gray-200 text-gray-700 py-1 px-3 rounded-full whitespace-nowrap">
            Cardiologist
          </Badge>
          <Badge variant="outline" className="bg-white border-gray-200 text-gray-700 py-1 px-3 rounded-full whitespace-nowrap">
            Neurologist
          </Badge>
          <Badge variant="outline" className="bg-white border-gray-200 text-gray-700 py-1 px-3 rounded-full whitespace-nowrap">
            Pediatrician
          </Badge>
          <Badge variant="outline" className="bg-white border-gray-200 text-gray-700 py-1 px-3 rounded-full whitespace-nowrap">
            Dermatologist
          </Badge>
        </div>
      </div>
      
      {/* Doctors List */}
      <div className="px-4 py-3 overflow-y-auto flex-1">
        {doctors.map((doctor) => (
          <Card key={doctor.id} className="mb-4">
            <CardContent className="p-0">
              <div className="flex p-3">
                <div className="w-16 h-16 rounded-lg bg-gray-200 overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <span className="material-icons-outlined text-3xl text-gray-400">person</span>
                </div>
                <div className="ml-3 flex-1">
                  <h3 className="font-medium text-sm">{doctor.name}</h3>
                  <p className="text-xs text-gray-500">{doctor.specialty}</p>
                  <div className="flex items-center mt-1">
                    <span className="material-icons-outlined text-yellow-400 text-xs">star</span>
                    <span className="text-xs ml-1">{doctor.rating}</span>
                    <span className="text-xs text-gray-400 ml-1">({doctor.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-primary">{doctor.availability}</span>
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center justify-center">
                  <button className="w-8 h-8 rounded-full border border-primary flex items-center justify-center">
                    <span className="material-icons-outlined text-primary text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Bottom Navigation */}
      <BottomNavigation activeTab="doctors" />
    </div>
  );
};

export default DoctorsScreen;