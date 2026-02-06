import React from 'react';
import './styles/index.css';
import HeaderRegion from './components/HeaderRegion';
import FooterRegion from './components/FooterRegion';
import Dashboard from './components/Dashboard';
import { mockClinics, mockDonors, mockBloodUnits } from './utils/mockData';

const App: React.FC = () => {
  console.log('App rendering...');
  console.log('Clinics:', mockClinics);
  console.log('Donors:', mockDonors);
  console.log('Blood Units:', mockBloodUnits);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F5F5F5' }}>
      <HeaderRegion />
      <main className="flex-1">
        <Dashboard clinics={mockClinics} donors={mockDonors} bloodUnits={mockBloodUnits} />
      </main>
      <FooterRegion />
    </div>
  );
};

export default App;
