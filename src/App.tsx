import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { PropertiesPage } from './pages/PropertiesPage';
import { AddPropertyForm } from './components/forms/AddPropertyForm';
import { PropertyDetails } from './components/property/PropertyDetails';
import { ROUTES } from './config/constants';

export const App: React.FC = () => {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Dashboard />} />
          <Route path={ROUTES.PROPERTIES} element={<PropertiesPage />} />
          <Route path={ROUTES.ADD_PROPERTY} element={<AddPropertyForm />} />
          <Route path={ROUTES.PROPERTY_DETAILS} element={<PropertyDetails />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;