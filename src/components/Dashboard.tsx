import React from 'react';
import InventoryPanel from './InventoryPanel';
import DonorPanel from './DonorPanel';
import RequestPanel from './RequestPanel';
import { Clinic, Donor, BloodUnit } from '../types/types';

interface DashboardProps {
    clinics: Clinic[];
    donors: Donor[];
    bloodUnits: BloodUnit[];
}

const Dashboard: React.FC<DashboardProps> = ({ clinics, donors, bloodUnits }) => {
    return (
        <div
            className="grid gap-4 p-4"
            style={{
                gridTemplateColumns: '30% 40% 30%',
                height: 'calc(100vh - 140px)', // Account for header and footer
            }}
        >
            {/* Left Panel: Regional Inventory Overview */}
            <div className="overflow-hidden">
                <InventoryPanel clinics={clinics} />
            </div>

            {/* Center Panel: Donor Availability Status */}
            <div className="overflow-hidden">
                <DonorPanel donors={donors} />
            </div>

            {/* Right Panel: Compatibility & Requests */}
            <div className="overflow-hidden">
                <RequestPanel bloodUnits={bloodUnits} />
            </div>
        </div>
    );
};

export default Dashboard;
