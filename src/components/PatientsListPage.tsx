import { Activity, Heart, User } from 'lucide-react';
import React from 'react';

const PatientListPage: React.FC = () => {
  const patients = [
    { id: 1, name: 'John Doe', status: 'Normal', heartRate: 72, lastActivity: '10 min ago' },
    { id: 2, name: 'Jane Smith', status: 'Alert', heartRate: 110, lastActivity: '5 min ago' },
    { id: 3, name: 'Bob Johnson', status: 'Normal', heartRate: 68, lastActivity: '2 min ago' },
    { id: 4, name: 'Alice Brown', status: 'Normal', heartRate: 75, lastActivity: '15 min ago' },
    { id: 5, name: 'Charlie Davis', status: 'Alert', heartRate: 95, lastActivity: '1 min ago' },
  ];

  return (
    <div className="p-4 pb-20">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">All Patients</h1>
      <ul className="space-y-3">
        {patients.map((patient) => (
          <li key={patient.id} className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <User size={24} className="mr-2 dark:text-gray-300" />
                <span className="font-semibold dark:text-gray-200">{patient.name}</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-sm ${
                patient.status === 'Normal' 
                  ? 'bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-200' 
                  : 'bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}>
                {patient.status}
              </span>
            </div>
            <div className="flex justify-between text-sm dark:text-gray-300">
              <div className="flex items-center">
                <Heart size={16} className="mr-1" />
                <span>{patient.heartRate} bpm</span>
              </div>
              <div className="flex items-center">
                <Activity size={16} className="mr-1" />
                <span>{patient.lastActivity}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientListPage;