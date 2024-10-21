import { AlertTriangle, Heart, User } from 'lucide-react';
import React from 'react';

const AlertScreen: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 dark:text-white">Active Alerts</h1>
            <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                    <AlertTriangle size={24} className="text-red-500 dark:text-red-400 mr-2" />
                    <h2 className="text-lg font-semibold dark:text-red-100">Urgent: Fall Detected</h2>
                </div>
                <div className="flex items-center mb-2 dark:text-red-200">
                    <User size={20} className="mr-2" />
                    <span>Patient: Jane Smith</span>
                </div>
                <p className="mb-2 dark:text-red-200">Fall detected at 2:30 PM. Immediate assistance required.</p>
                <button className="bg-red-500 text-white px-4 py-2 rounded dark:bg-red-700 dark:text-red-100">Respond Now</button>
            </div>
            <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                    <Heart size={24} className="text-yellow-500 dark:text-yellow-400 mr-2" />
                    <h2 className="text-lg font-semibold dark:text-yellow-100">Elevated Heart Rate</h2>
                </div>
                <div className="flex items-center mb-2 dark:text-yellow-200">
                    <User size={20} className="mr-2" />
                    <span>Patient: John Doe</span>
                </div>
                <p className="mb-2 dark:text-yellow-200">Heart rate: 120 bpm. Above normal range.</p>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded dark:bg-yellow-700 dark:text-yellow-100">Check Status</button>
            </div>
        </div>
    );
};

export default AlertScreen;