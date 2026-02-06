import React from 'react';

// Clock Icon SVG
export const ClockIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M8 4 V8 L11 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

// Document Icon SVG
export const DocumentIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M3 2 H10 L13 5 V14 H3 Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
        />
        <path d="M10 2 V5 H13" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
);

// Map Marker Icon SVG
export const MapMarkerIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg
        width="12"
        height="16"
        viewBox="0 0 12 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M6 0 C2.7 0 0 2.7 0 6 C0 10.5 6 16 6 16 S12 10.5 12 6 C12 2.7 9.3 0 6 0 Z M6 8 C4.9 8 4 7.1 4 6 C4 4.9 4.9 4 6 4 C7.1 4 8 4.9 8 6 C8 7.1 7.1 8 6 8 Z"
            fill="currentColor"
        />
    </svg>
);

// Circle Symbol (for DEA Positive)
export const CircleSymbol: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
);

// Triangle Symbol (for DEA Negative)
export const TriangleSymbol: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M6 1 L11 11 L1 11 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
);

// Checkmark Symbol
export const CheckmarkSymbol: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Question Mark Symbol
export const QuestionSymbol: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M4.5 4.5 C4.5 3.7 5.2 3 6 3 C6.8 3 7.5 3.7 7.5 4.5 C7.5 5.3 6.8 6 6 6 V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="6" cy="9" r="0.5" fill="currentColor" />
    </svg>
);

// X Symbol
export const XSymbol: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M2 2 L10 10 M10 2 L2 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);
