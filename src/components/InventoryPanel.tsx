import React from 'react';
import { Clinic } from '../types/types';
import ClinicCard from './ClinicCard';
import GeographicMap from './GeographicMap';

interface InventoryPanelProps {
    clinics: Clinic[];
}

const InventoryPanel: React.FC<InventoryPanelProps> = ({ clinics }) => {
    return (
        <div className="panel h-full overflow-y-auto">
            <h2 className="text-header mb-4 font-semibold">Regional Inventory Overview</h2>

            {/* Clinic Cards */}
            <div className="mb-4">
                {clinics.map((clinic) => (
                    <ClinicCard key={clinic.id} clinic={clinic} />
                ))}
            </div>

            {/* Geographic Map */}
            <div className="mt-4">
                <h3 className="text-data mb-2 font-medium">Clinic Locations</h3>
                <GeographicMap clinics={clinics} />
            </div>
        </div>
    );
};

export default InventoryPanel;
