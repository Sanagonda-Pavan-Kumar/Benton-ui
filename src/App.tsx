import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { PropertiesPage } from './pages/PropertiesPage';
import { AddPropertyForm } from './components/forms/AddPropertyForm';
import { PropertyDetails } from './components/property/PropertyDetails';
import { ROUTES } from './config/constants';
import '@fontsource/poppins';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleLogout = () => {
    setIsDropdownOpen(false);
    console.log("User logged out");
  };

  return (
    <header className="bg-[#3b4755] text-white fixed top-0 w-full shadow-md z-10">
      <div className="container mx-auto flex items-center justify-between p-2">
        <h1 className="text-2xl font-bold"></h1>
        <div className="relative">
          <button
            onClick={handleToggleDropdown}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded flex items-center"
          >
            <span className='text-sm'>Admin</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="pt-10">
        <DashboardLayout>
          <Routes>
            <Route path={ROUTES.HOME} element={<Dashboard />} />
            <Route path={ROUTES.PROPERTIES} element={<PropertiesPage />} />
            <Route path={ROUTES.ADD_PROPERTY} element={<AddPropertyForm />} />
            <Route path={ROUTES.PROPERTY_DETAILS} element={<PropertyDetails />} />
          </Routes>
        </DashboardLayout>
      </div>
    </Router>
  );
};

export default App;
