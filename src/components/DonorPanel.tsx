import React, { useState } from 'react';
import { Donor, DEAStatus, FilterState } from '../types/types';
import DonorTable from './DonorTable';

interface DonorPanelProps {
    donors: Donor[];
}

const DonorPanel: React.FC<DonorPanelProps> = ({ donors }) => {
    const [filters, setFilters] = useState<FilterState>({
        deaStatus: 'All',
        minWeight: 'All',
        welfareEligibleOnly: false,
    });

    const filteredDonors = donors.filter((donor) => {
        // DEA Status filter
        if (filters.deaStatus !== 'All' && donor.deaStatus !== filters.deaStatus) {
            return false;
        }

        // Minimum Weight filter
        if (filters.minWeight !== 'All' && donor.signalment.weight < filters.minWeight) {
            return false;
        }

        // Welfare Eligible Only filter
        if (filters.welfareEligibleOnly && !donor.isEligible) {
            return false;
        }

        return true;
    });

    return (
        <div className="panel h-full flex flex-col">
            <h2 className="text-header mb-4 font-semibold">Donor Availability Status</h2>

            {/* Filter Bar */}
            <div className="flex gap-4 mb-4 flex-wrap">
                {/* DEA Status Dropdown */}
                <div className="flex flex-col">
                    <label className="text-annotation text-secondary mb-1">DEA 1.1 Status</label>
                    <select
                        className="text-data border border-secondary rounded px-2 py-1"
                        value={filters.deaStatus}
                        onChange={(e) =>
                            setFilters({
                                ...filters,
                                deaStatus: e.target.value as DEAStatus | 'All',
                            })
                        }
                    >
                        <option value="All">All</option>
                        <option value={DEAStatus.POSITIVE}>Positive</option>
                        <option value={DEAStatus.NEGATIVE}>Negative</option>
                        <option value={DEAStatus.UNKNOWN}>Unknown</option>
                    </select>
                </div>

                {/* Minimum Weight Dropdown */}
                <div className="flex flex-col">
                    <label className="text-annotation text-secondary mb-1">Minimum Weight</label>
                    <select
                        className="text-data border border-secondary rounded px-2 py-1"
                        value={filters.minWeight}
                        onChange={(e) =>
                            setFilters({
                                ...filters,
                                minWeight: e.target.value === 'All' ? 'All' : parseInt(e.target.value),
                            })
                        }
                    >
                        <option value="All">All</option>
                        <option value="15">15kg+</option>
                        <option value="20">20kg+</option>
                        <option value="25">25kg+</option>
                    </select>
                </div>

                {/* Welfare Eligible Only Checkbox */}
                <div className="flex items-end">
                    <label className="flex items-center gap-2 text-data cursor-pointer">
                        <input
                            type="checkbox"
                            checked={filters.welfareEligibleOnly}
                            onChange={(e) =>
                                setFilters({
                                    ...filters,
                                    welfareEligibleOnly: e.target.checked,
                                })
                            }
                            className="w-4 h-4"
                        />
                        <span>Welfare Eligible Only</span>
                    </label>
                </div>
            </div>

            {/* Donor Table */}
            <div className="flex-1 overflow-hidden">
                <DonorTable donors={filteredDonors} />
            </div>

            {/* Results Count */}
            <div className="mt-2 text-annotation text-secondary">
                Showing {filteredDonors.length} of {donors.length} donors
            </div>
        </div>
    );
};

export default DonorPanel;
