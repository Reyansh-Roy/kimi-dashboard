import React from 'react';
import { Donor, DEAStatus, ConsentStatus } from '../types/types';
import {
    CircleSymbol,
    TriangleSymbol,
    CheckmarkSymbol,
    QuestionSymbol,
    XSymbol,
    DocumentIcon,
} from './Icons';

interface DonorTableProps {
    donors: Donor[];
}

const DonorTable: React.FC<DonorTableProps> = ({ donors }) => {
    const getDonationGaugeWidth = (months: number): number => {
        return Math.min((months / 3) * 100, 100);
    };

    const isOverfill = (months: number): boolean => {
        return months > 12;
    };

    const getConsentIcon = (status: ConsentStatus) => {
        switch (status) {
            case ConsentStatus.CURRENT:
                return <CheckmarkSymbol className="text-success" />;
            case ConsentStatus.PENDING:
                return <QuestionSymbol className="text-warning" />;
            case ConsentStatus.WITHDRAWN:
                return <XSymbol className="text-alert" />;
        }
    };

    return (
        <div className="scrollable-table">
            <table className="w-full text-data">
                <thead className="bg-depleted sticky top-0">
                    <tr>
                        <th className="px-2 py-2 text-left text-annotation font-semibold">Donor ID</th>
                        <th className="px-2 py-2 text-left text-annotation font-semibold">Signalment</th>
                        <th className="px-2 py-2 text-left text-annotation font-semibold">DEA 1.1</th>
                        <th className="px-2 py-2 text-left text-annotation font-semibold">Donation History</th>
                        <th className="px-2 py-2 text-right text-annotation font-semibold">Lifetime</th>
                        <th className="px-2 py-2 text-center text-annotation font-semibold">Consent</th>
                        <th className="px-2 py-2 text-center text-annotation font-semibold">Welfare</th>
                    </tr>
                </thead>
                <tbody>
                    {donors.map((donor) => (
                        <tr
                            key={donor.id}
                            className={`border-b border-depleted ${!donor.isEligible ? 'row-ineligible' : ''}`}
                        >
                            {/* Donor ID */}
                            <td className="px-2 py-3">
                                <span className="font-mono-id">{donor.id}</span>
                            </td>

                            {/* Signalment */}
                            <td className="px-2 py-3">
                                {donor.signalment.breed}, {donor.signalment.weight}kg, {donor.signalment.age}y
                            </td>

                            {/* DEA 1.1 Status */}
                            <td className="px-2 py-3">
                                <div className="flex items-center gap-2">
                                    {donor.deaStatus === DEAStatus.POSITIVE && (
                                        <>
                                            <CircleSymbol className="text-primary" />
                                            <span>Positive</span>
                                        </>
                                    )}
                                    {donor.deaStatus === DEAStatus.NEGATIVE && (
                                        <>
                                            <TriangleSymbol className="text-primary" />
                                            <span>Negative</span>
                                        </>
                                    )}
                                    {donor.deaStatus === DEAStatus.UNKNOWN && (
                                        <>
                                            <QuestionSymbol className="text-secondary" />
                                            <span>Unknown</span>
                                        </>
                                    )}
                                </div>
                            </td>

                            {/* Donation History */}
                            <td className="px-2 py-3">
                                <div className="tooltip">
                                    <div className="flex items-center gap-2">
                                        <span>{donor.donationHistory.monthsSinceLastDonation} months</span>
                                        <div className="donation-gauge">
                                            <div
                                                className={`donation-gauge-fill ${isOverfill(donor.donationHistory.monthsSinceLastDonation)
                                                        ? 'donation-gauge-overfill'
                                                        : ''
                                                    }`}
                                                style={{
                                                    width: `${getDonationGaugeWidth(
                                                        donor.donationHistory.monthsSinceLastDonation
                                                    )}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                    {!donor.isEligible && donor.ineligibilityReason && (
                                        <span className="tooltip-text">{donor.ineligibilityReason}</span>
                                    )}
                                </div>
                            </td>

                            {/* Lifetime Donations */}
                            <td className="px-2 py-3 text-right">{donor.lifetimeDonations}</td>

                            {/* Owner Consent */}
                            <td className="px-2 py-3">
                                <div className="flex items-center justify-center gap-2">
                                    <DocumentIcon className="text-secondary" />
                                    {getConsentIcon(donor.ownerConsent)}
                                </div>
                            </td>

                            {/* Welfare Constraints */}
                            <td className="px-2 py-3">
                                <div className="flex items-center justify-center gap-1">
                                    <div
                                        className={`welfare-indicator ${donor.welfareConstraints.screening
                                                ? 'welfare-indicator-filled'
                                                : 'welfare-indicator-empty'
                                            }`}
                                        title="Screening"
                                    ></div>
                                    <div
                                        className={`welfare-indicator ${donor.welfareConstraints.behavioral
                                                ? 'welfare-indicator-filled'
                                                : 'welfare-indicator-empty'
                                            }`}
                                        title="Behavioral"
                                    ></div>
                                    <div
                                        className={`welfare-indicator ${donor.welfareConstraints.veterinary
                                                ? 'welfare-indicator-filled'
                                                : 'welfare-indicator-empty'
                                            }`}
                                        title="Veterinary"
                                    ></div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DonorTable;
