import { Bell, Home, Moon, Sun, Users } from 'lucide-react';
import React, { useState } from 'react';
import AlertListPage from './components/AlertListPage';
import AlertScreen from './components/AlertScreen';
import HomeScreen from './components/HomeScreen';
import PatientList from './components/PatientList';
import PatientListPage from './components/PatientsListPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HomeScreen />
            <PatientList />
            <AlertScreen />
          </>
        );
      case 'patients':
        return <PatientListPage />;
      case 'alerts':
        return <AlertListPage />;
      default:
        return (
          <>
            <HomeScreen />
            <PatientList />
            <AlertScreen />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md">
        <div className="p-4 flex justify-end">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        {renderPage()}
        <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-around py-2">
            <button onClick={() => setCurrentPage('home')} className="flex flex-col items-center text-gray-600 dark:text-gray-300">
              <Home size={24} />
              <span className="text-xs mt-1">Home</span>
            </button>
            <button onClick={() => setCurrentPage('patients')} className="flex flex-col items-center text-gray-600 dark:text-gray-300">
              <Users size={24} />
              <span className="text-xs mt-1">Patients</span>
            </button>
            <button onClick={() => setCurrentPage('alerts')} className="flex flex-col items-center text-gray-600 dark:text-gray-300">
              <Bell size={24} />
              <span className="text-xs mt-1">Alerts</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;