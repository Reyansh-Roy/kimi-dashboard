import React from 'react';
import { Clinic } from '@types/types';
import { ClockIcon } from './Icons';

interface ClinicCardProps {
    clinic: Clinic;
}

const ClinicCard: React.FC<ClinicCardProps> = ({ clinic }) => {
    const getStockBarClass = (count: number): string => {
        if (count <= 2) return 'stock-bar-depleted';
        if (count <= 6) return 'stock-bar-adequate';
        return 'stock-bar-surplus';
    };

    const showExpirationAlert = clinic.expiringUnits.daysUntilExpiry < 3;

    return (
        <div className="panel mb-4">
            {/* Clinic Name */}
            <h3 className="text-header mb-3">{clinic.name}</h3>

            {/* Stock Display */}
            <div className="mb-3">
                <div className="text-data mb-2">
                    <span className="font-semibold">WB: {clinic.inventory.WB}</span> units,{' '}
                    <span className="font-semibold">pRBC: {clinic.inventory.pRBC}</span> units
                </div>

                {/* Stock Level Indicators */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <span className="text-annotation text-secondary w-12">WB:</span>
                        <div className={`stock-bar ${getStockBarClass(clinic.inventory.WB)}`}>
                            {clinic.inventory.WB > 6 && <span className="text-annotation ml-1">+</span>}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-annotation text-secondary w-12">pRBC:</span>
                        <div className={`stock-bar ${getStockBarClass(clinic.inventory.pRBC)}`}>
                            {clinic.inventory.pRBC > 6 && <span className="text-annotation ml-1">+</span>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Age Distribution Blocks */}
            <div className="mb-3">
                <div className="text-annotation text-secondary mb-1">Age Distribution:</div>
                <div className="flex gap-1">
                    <div className="age-block age-block-0-7" title="0-7 days"></div>
                    <div className="age-block age-block-8-14" title="8-14 days"></div>
                    <div className="age-block age-block-15-21" title="15-21 days"></div>
                </div>
                <div className="flex gap-1 mt-1">
                    <span className="text-annotation text-secondary" style={{ width: '40px' }}>0-7d</span>
                    <span className="text-annotation text-secondary" style={{ width: '40px' }}>8-14d</span>
                    <span className="text-annotation text-secondary" style={{ width: '40px' }}>15-21d</span>
                </div>
            </div>

            {/* Expiration Alert */}
            {showExpirationAlert && (
                <div className="flex items-center justify-end gap-2 text-alert">
                    <ClockIcon className="text-alert" />
                    <span className="text-annotation">
                        Expires: {clinic.expiringUnits.daysUntilExpiry}d
                    </span>
                </div>
            )}
        </div>
    );
};

export default ClinicCard;
