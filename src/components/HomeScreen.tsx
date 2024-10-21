import { User } from 'lucide-react';
import React from 'react';

const HomeScreen: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 dark:text-white">Welcome, Caretaker</h1>
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg mb-4">
                <h2 className="text-lg font-semibold mb-2 dark:text-blue-100">Quick Stats</h2>
                <div className="flex justify-between">
                    <div>
                        <p className="text-sm dark:text-blue-200">Total Patients</p>
                        <p className="text-2xl font-bold dark:text-white">12</p>
                    </div>
                    <div>
                        <p className="text-sm dark:text-blue-200">Active Alerts</p>
                        <p className="text-2xl font-bold text-red-500 dark:text-red-400">2</p>
                    </div>
                </div>
            </div>
            <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-2 dark:text-green-100">Recent Activity</h2>
                <ul>
                    <li className="flex items-center mb-2 dark:text-green-200">
                        <User size={20} className="mr-2" />
                        <span>John Doe's heart rate normalized</span>
                    </li>
                    <li className="flex items-center dark:text-green-200">
                        <User size={20} className="mr-2" />
                        <span>Fall alert for Jane Smith resolved</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HomeScreen;