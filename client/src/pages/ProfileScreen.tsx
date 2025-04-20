import React from 'react';
import StatusBar from '@/components/StatusBar';
import BottomNavigation from '@/components/BottomNavigation';
import { userProfile } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const ProfileScreen: React.FC = () => {
  return (
    <div className="device-frame bg-white rounded-xl overflow-hidden shadow-lg max-w-sm w-full">
      <StatusBar />
      
      {/* Header */}
      <div className="px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold">Profile</h1>
        <div className="flex items-center">
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="material-icons-outlined">settings</span>
          </div>
        </div>
      </div>
      
      {/* Profile Card */}
      <div className="px-4 py-2">
        <Card className="mb-4 bg-gradient-to-r from-primary/10 to-primary/5">
          <CardContent className="p-4">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                <span className="material-icons-outlined text-3xl text-gray-400">person</span>
              </div>
              <div className="ml-4">
                <h2 className="font-bold">{userProfile.name}</h2>
                <p className="text-xs text-gray-600">{userProfile.email}</p>
                <div className="flex items-center mt-1">
                  <button className="text-xs bg-primary text-white rounded-full px-3 py-1 flex items-center">
                    Edit Profile
                    <span className="material-icons-outlined text-xs ml-1">edit</span>
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Personal Information */}
      <div className="px-4 pb-2">
        <h2 className="text-sm font-bold mb-3">Personal Information</h2>
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-gray-500">Date of Birth</p>
                <p className="text-sm font-medium">{userProfile.dob}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Blood Type</p>
                <p className="text-sm font-medium">{userProfile.bloodType}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Height</p>
                <p className="text-sm font-medium">{userProfile.height} cm</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Weight</p>
                <p className="text-sm font-medium">{userProfile.weight} kg</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Medical Information */}
      <div className="px-4 pb-4">
        <h2 className="text-sm font-bold mb-3">Medical Information</h2>
        <Card>
          <CardContent className="p-4">
            <div className="mb-3">
              <p className="text-xs text-gray-500 mb-1">Allergies</p>
              <div className="flex flex-wrap gap-2">
                {userProfile.allergies.map((allergy, index) => (
                  <div key={index} className="text-xs bg-red-100 text-red-600 rounded-full px-2 py-1">
                    {allergy}
                  </div>
                ))}
              </div>
            </div>
            
            <Separator className="my-3" />
            
            <div>
              <p className="text-xs text-gray-500 mb-1">Medications</p>
              <div className="flex flex-wrap gap-2">
                {userProfile.medications.map((medication, index) => (
                  <div key={index} className="text-xs bg-blue-100 text-blue-600 rounded-full px-2 py-1">
                    {medication}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Quick Actions */}
      <div className="px-4 pb-4">
        <h2 className="text-sm font-bold mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-white border border-gray-200 rounded-xl p-3 flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
              <span className="material-icons-outlined text-primary text-sm">description</span>
            </div>
            <span className="text-xs font-medium">Medical Records</span>
          </button>
          <button className="bg-white border border-gray-200 rounded-xl p-3 flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
              <span className="material-icons-outlined text-primary text-sm">local_pharmacy</span>
            </div>
            <span className="text-xs font-medium">Prescriptions</span>
          </button>
          <button className="bg-white border border-gray-200 rounded-xl p-3 flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
              <span className="material-icons-outlined text-primary text-sm">calendar_today</span>
            </div>
            <span className="text-xs font-medium">Appointments</span>
          </button>
          <button className="bg-white border border-gray-200 rounded-xl p-3 flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
              <span className="material-icons-outlined text-primary text-sm">help_outline</span>
            </div>
            <span className="text-xs font-medium">Help Center</span>
          </button>
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <BottomNavigation activeTab="profile" />
    </div>
  );
};

export default ProfileScreen;