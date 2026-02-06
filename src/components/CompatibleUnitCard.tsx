import React from 'react';
import { BloodUnit } from '../types/types';

interface CompatibleUnitCardProps {
    unit: BloodUnit;
}

const CompatibleUnitCard: React.FC<CompatibleUnitCardProps> = ({ unit }) => {
    return (
        <div
            className={`border border-secondary rounded p-3 ${unit.isCompatible ? 'compatibility-compatible' : 'compatibility-caution'
                }`}
            style={{ height: '180px' }}
        >
            {/* Unit ID */}
            <div className="font-mono-id font-semibold mb-2">{unit.id}</div>

            {/* Source Clinic and Transport Time */}
            <div className="text-data mb-2">
                <div>{unit.sourceClinic}</div>
                <div className="inline-block bg-primary text-white px-2 py-1 rounded text-annotation mt-1">
                    {unit.transportTime} min transport
                </div>
            </div>

            {/* Collection Date */}
            <div className="text-annotation text-secondary mb-1">
                Collected: {unit.collectionDate}
            </div>

            {/* Storage Location */}
            <div className="text-annotation text-secondary mb-2">
                Storage: {unit.storageLocation}
            </div>

            {/* Compatibility Display */}
            <div
                className={`text-annotation font-medium mb-3 ${unit.isCompatible ? 'text-success' : 'text-warning'
                    }`}
            >
                {unit.compatibilityNote}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
                <button className="btn-outlined flex-1">Request Transfer</button>
                <button className="btn-outlined-secondary flex-1">Contact Clinic</button>
            </div>
        </div>
    );
};

export default CompatibleUnitCard;
