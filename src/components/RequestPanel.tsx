import React, { useState } from 'react';
import { BloodUnit, ComponentType, DEAStatus, UrgencyLevel } from '../types/types';
import CompatibleUnitCard from './CompatibleUnitCard';

interface RequestPanelProps {
    bloodUnits: BloodUnit[];
}

const RequestPanel: React.FC<RequestPanelProps> = ({ bloodUnits }) => {
    const [patientId, setPatientId] = useState('');
    const [componentType, setComponentType] = useState<ComponentType>(ComponentType.PRBC);
    const [requiredDEA, setRequiredDEA] = useState<DEAStatus>(DEAStatus.NEGATIVE);
    const [urgency, setUrgency] = useState<UrgencyLevel>(UrgencyLevel.ROUTINE);

    const getUrgencyClass = (level: UrgencyLevel): string => {
        switch (level) {
            case UrgencyLevel.ROUTINE:
                return 'urgency-routine';
            case UrgencyLevel.URGENT:
                return 'urgency-urgent';
            case UrgencyLevel.EMERGENCY:
                return 'urgency-emergency';
        }
    };

    // Filter units based on selected criteria
    const compatibleUnits = bloodUnits.filter(
        (unit) => unit.componentType === componentType
    );

    return (
        <div className="panel h-full flex flex-col">
            <h2 className="text-header mb-4 font-semibold">Compatibility & Requests</h2>

            {/* Active Request Form */}
            <div className="mb-6 pb-6 border-b border-depleted">
                <h3 className="text-data font-semibold mb-3">Active Request</h3>

                {/* Patient ID Input */}
                <div className="mb-3">
                    <label className="text-annotation text-secondary block mb-1">Patient ID</label>
                    <input
                        type="text"
                        placeholder="Enter patient identifier"
                        value={patientId}
                        onChange={(e) => setPatientId(e.target.value)}
                        className="w-full text-data border border-secondary rounded px-2 py-1"
                    />
                </div>

                {/* Component Type Selection */}
                <div className="mb-3">
                    <label className="text-annotation text-secondary block mb-1">Component Type</label>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-data cursor-pointer">
                            <input
                                type="radio"
                                name="componentType"
                                value={ComponentType.WB}
                                checked={componentType === ComponentType.WB}
                                onChange={(e) => setComponentType(e.target.value as ComponentType)}
                            />
                            <span>WB (Whole Blood)</span>
                        </label>
                        <label className="flex items-center gap-2 text-data cursor-pointer">
                            <input
                                type="radio"
                                name="componentType"
                                value={ComponentType.PRBC}
                                checked={componentType === ComponentType.PRBC}
                                onChange={(e) => setComponentType(e.target.value as ComponentType)}
                            />
                            <span>pRBC (Packed Red Blood Cells)</span>
                        </label>
                        <label className="flex items-center gap-2 text-data cursor-pointer">
                            <input
                                type="radio"
                                name="componentType"
                                value={ComponentType.PLATELET_RICH_PLASMA}
                                checked={componentType === ComponentType.PLATELET_RICH_PLASMA}
                                onChange={(e) => setComponentType(e.target.value as ComponentType)}
                            />
                            <span>Platelet Rich Plasma</span>
                        </label>
                    </div>
                </div>

                {/* Required DEA Status */}
                <div className="mb-3">
                    <label className="text-annotation text-secondary block mb-1">Required DEA Status</label>
                    <select
                        className="w-full text-data border border-secondary rounded px-2 py-1"
                        value={requiredDEA}
                        onChange={(e) => setRequiredDEA(e.target.value as DEAStatus)}
                    >
                        <option value={DEAStatus.POSITIVE}>Positive</option>
                        <option value={DEAStatus.NEGATIVE}>Negative</option>
                        <option value={DEAStatus.UNKNOWN}>Universal Donor Preferred</option>
                    </select>
                </div>

                {/* Urgency Level */}
                <div className="mb-3">
                    <label className="text-annotation text-secondary block mb-1">Urgency Level</label>
                    <div className="space-y-2">
                        <div className={`${getUrgencyClass(UrgencyLevel.ROUTINE)}`}>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="urgency"
                                    value={UrgencyLevel.ROUTINE}
                                    checked={urgency === UrgencyLevel.ROUTINE}
                                    onChange={(e) => setUrgency(e.target.value as UrgencyLevel)}
                                />
                                <span>Routine</span>
                            </label>
                        </div>
                        <div className={`${getUrgencyClass(UrgencyLevel.URGENT)}`}>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="urgency"
                                    value={UrgencyLevel.URGENT}
                                    checked={urgency === UrgencyLevel.URGENT}
                                    onChange={(e) => setUrgency(e.target.value as UrgencyLevel)}
                                />
                                <span>Urgent</span>
                            </label>
                        </div>
                        <div className={`${getUrgencyClass(UrgencyLevel.EMERGENCY)}`}>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="urgency"
                                    value={UrgencyLevel.EMERGENCY}
                                    checked={urgency === UrgencyLevel.EMERGENCY}
                                    onChange={(e) => setUrgency(e.target.value as UrgencyLevel)}
                                />
                                <span>Emergency</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Compatible Units */}
            <div className="flex-1 overflow-y-auto">
                <h3 className="text-data font-semibold mb-3">Compatible Units</h3>
                <div className="space-y-2">
                    {compatibleUnits.map((unit) => (
                        <CompatibleUnitCard key={unit.id} unit={unit} />
                    ))}
                </div>
                {compatibleUnits.length === 0 && (
                    <div className="text-annotation text-secondary text-center py-4">
                        No compatible units found for selected criteria
                    </div>
                )}
            </div>
        </div>
    );
};

export default RequestPanel;
