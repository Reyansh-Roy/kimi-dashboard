export enum DEAStatus {
    POSITIVE = 'Positive',
    NEGATIVE = 'Negative',
    UNKNOWN = 'Unknown'
}

export enum ComponentType {
    WB = 'WB',
    PRBC = 'pRBC',
    PLATELET_RICH_PLASMA = 'Platelet Rich Plasma'
}

export enum UrgencyLevel {
    ROUTINE = 'Routine',
    URGENT = 'Urgent',
    EMERGENCY = 'Emergency'
}

export enum ConsentStatus {
    CURRENT = 'current',
    PENDING = 'pending',
    WITHDRAWN = 'withdrawn'
}

export interface Clinic {
    id: string;
    name: string;
    location: { lat: number; lng: number };
    inventory: {
        WB: number;
        pRBC: number;
    };
    ageDistribution: {
        days0to7: number;
        days8to14: number;
        days15to21: number;
    };
    expiringUnits: {
        count: number;
        daysUntilExpiry: number;
    };
}

export interface WelfareConstraints {
    screening: boolean;
    behavioral: boolean;
    veterinary: boolean;
}

export interface Donor {
    id: string;
    signalment: {
        breed: string;
        weight: number;
        age: number;
    };
    deaStatus: DEAStatus;
    donationHistory: {
        monthsSinceLastDonation: number;
    };
    lifetimeDonations: number;
    ownerConsent: ConsentStatus;
    welfareConstraints: WelfareConstraints;
    isEligible: boolean;
    ineligibilityReason?: string;
}

export interface TransfusionRequest {
    id: string;
    patientId: string;
    componentType: ComponentType;
    requiredDEAStatus: DEAStatus;
    urgencyLevel: UrgencyLevel;
}

export interface BloodUnit {
    id: string;
    sourceClinic: string;
    transportTime: number;
    collectionDate: string;
    storageLocation: string;
    deaStatus: DEAStatus;
    componentType: ComponentType;
    isCompatible: boolean;
    compatibilityNote: string;
}

export interface FilterState {
    deaStatus: DEAStatus | 'All';
    minWeight: number | 'All';
    welfareEligibleOnly: boolean;
}
