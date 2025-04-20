import React from 'react';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import StatusBar from '@/components/StatusBar';

const Home: React.FC = () => {
  return (
    <div className="device-frame bg-white rounded-xl overflow-hidden shadow-lg max-w-sm w-full">
      <StatusBar />
      
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Health Monitoring App</h1>
        
        <div className="grid gap-4">
          <Link href="/covid">
            <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg text-center flex items-center justify-center">
              <span className="material-icons-outlined mr-2">coronavirus</span>
              COVID-19 Dashboard
            </button>
          </Link>
          
          <Link href="/heart">
            <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg text-center flex items-center justify-center">
              <span className="material-icons-outlined mr-2">favorite</span>
              Heart Monitoring
            </button>
          </Link>
          
          <Link href="/sleep">
            <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg text-center flex items-center justify-center">
              <span className="material-icons-outlined mr-2">bedtime</span>
              Sleep Analysis
            </button>
          </Link>
          
          <Link href="/doctors">
            <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg text-center flex items-center justify-center">
              <span className="material-icons-outlined mr-2">medical_services</span>
              Doctors
            </button>
          </Link>
          
          <Link href="/articles">
            <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg text-center flex items-center justify-center">
              <span className="material-icons-outlined mr-2">article</span>
              Articles
            </button>
          </Link>
          
          <Link href="/health">
            <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg text-center flex items-center justify-center">
              <span className="material-icons-outlined mr-2">favorite_border</span>
              Health
            </button>
          </Link>
          
          <Link href="/profile">
            <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg text-center flex items-center justify-center">
              <span className="material-icons-outlined mr-2">person_outline</span>
              Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
