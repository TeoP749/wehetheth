import { User } from 'lucide-react';
import React from 'react';

const PatientList: React.FC = () => {
    const patients = [
        { id: 1, name: 'John Doe', status: 'Normal' },
        { id: 2, name: 'Jane Smith', status: 'Alert' },
        { id: 3, name: 'Bob Johnson', status: 'Normal' },
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 dark:text-white">Patient List</h1>
            <ul>
                {patients.map((patient) => (
                    <li key={patient.id} className="flex items-center justify-between border-b dark:border-gray-700 py-2">
                        <div className="flex items-center">
                            <User size={24} className="mr-2 dark:text-gray-300" />
                            <span className="dark:text-gray-200">{patient.name}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-sm ${patient.status === 'Normal'
                                ? 'bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-200'
                                : 'bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200'
                            }`}>
                            {patient.status}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PatientList;