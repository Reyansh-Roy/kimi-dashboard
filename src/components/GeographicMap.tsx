import React from 'react';

interface GeographicMapProps {
    clinics: Array<{
        name: string;
        location: { lat: number; lng: number };
    }>;
}

const GeographicMap: React.FC<GeographicMapProps> = ({ clinics }) => {
    // Normalize coordinates to SVG viewBox (200x150)
    const normalizeCoords = (lat: number, lng: number) => {
        // Simple normalization for demonstration
        // In production, use proper map projection
        const x = ((lng - 80.25) / 0.05) * 50 + 25;
        const y = 150 - ((lat - 13.04) / 0.07) * 120 - 15;
        return { x, y };
    };

    return (
        <svg
            width="200"
            height="150"
            viewBox="0 0 200 150"
            className="border border-gray-300 bg-gray-50"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Simplified map outline (grayscale) */}
            <rect x="0" y="0" width="200" height="150" fill="#F9FAFB" />
            <path
                d="M 20 30 L 180 30 L 180 120 L 20 120 Z"
                stroke="#9CA3AF"
                strokeWidth="1"
                fill="none"
            />
            <path
                d="M 50 30 L 50 120 M 100 30 L 100 120 M 150 30 L 150 120"
                stroke="#E5E7EB"
                strokeWidth="0.5"
            />
            <path
                d="M 20 60 L 180 60 M 20 90 L 180 90"
                stroke="#E5E7EB"
                strokeWidth="0.5"
            />

            {/* Clinic markers */}
            {clinics.map((clinic, index) => {
                const { x, y } = normalizeCoords(clinic.location.lat, clinic.location.lng);
                return (
                    <g key={index}>
                        {/* Marker pin */}
                        <path
                            d={`M ${x} ${y - 12} C ${x - 4} ${y - 12} ${x - 6} ${y - 8} ${x - 6} ${y - 6} C ${x - 6} ${y - 1} ${x} ${y} ${x} ${y} S ${x + 6} ${y - 1} ${x + 6} ${y - 6} C ${x + 6} ${y - 8} ${x + 4} ${y - 12} ${x} ${y - 12} Z`}
                            fill="#2E5AAC"
                        />
                        <circle cx={x} cy={y - 8} r="2" fill="#FFFFFF" />
                    </g>
                );
            })}
        </svg>
    );
};

export default GeographicMap;
