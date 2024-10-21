import { Activity, AlertTriangle, Heart, ThermometerIcon, User } from 'lucide-react';
import React from 'react';

const AlertListPage: React.FC = () => {
  const alerts = [
    { id: 1, type: 'Fall', patient: 'Jane Smith', time: '2:30 PM', details: 'Fall detected. Immediate assistance required.' },
    { id: 2, type: 'Heart Rate', patient: 'John Doe', time: '3:15 PM', details: 'Heart rate: 120 bpm. Above normal range.' },
    { id: 3, type: 'Temperature', patient: 'Alice Brown', time: '1:45 PM', details: 'Temperature: 39°C. Fever detected.' },
    { id: 4, type: 'Inactivity', patient: 'Bob Johnson', time: '11:20 AM', details: 'No activity detected for 3 hours.' },
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'Fall':
        return <AlertTriangle size={24} className="text-red-500" />;
      case 'Heart Rate':
        return <Heart size={24} className="text-red-500" />;
      case 'Temperature':
        return <ThermometerIcon size={24} className="text-red-500" />;
      case 'Inactivity':
        return <Activity size={24} className="text-red-500" />;
      default:
        return <AlertTriangle size={24} className="text-red-500" />;
    }
  };

  return (
    <div className="p-4 pb-20">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">All Alerts</h1>
      <ul className="space-y-3">
        {alerts.map((alert) => (
          <li key={alert.id} className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                {getAlertIcon(alert.type)}
                <span className="font-semibold ml-2 dark:text-gray-200">{alert.type}</span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">{alert.time}</span>
            </div>
            <p className="text-sm mb-1 dark:text-gray-300"><User size={16} className="inline mr-1" /> {alert.patient}</p>
            <p className="text-sm dark:text-gray-300">{alert.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertListPage;