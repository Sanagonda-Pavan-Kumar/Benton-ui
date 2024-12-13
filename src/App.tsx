import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Apartments from './pages/Apartments';
import ApartmentDetails from './pages/ApartmentDetails';
import Tenants from './pages/Tenants';
import Issues from './pages/Issues';
import Payments from './pages/Payments';
import Settings from './pages/Settings';
import { useStore } from './store/useStore';

function App() {
  const { initializeDefaultApartments } = useStore();

  useEffect(() => {
    initializeDefaultApartments();
  }, [initializeDefaultApartments]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="apartments" element={<Apartments />} />
          <Route path="apartments/:id" element={<ApartmentDetails />} />
          <Route path="tenants" element={<Tenants />} />
          <Route path="issues" element={<Issues />} />
          <Route path="payments" element={<Payments />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;