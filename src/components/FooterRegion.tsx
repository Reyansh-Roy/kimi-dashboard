import React from 'react';

const FooterRegion: React.FC = () => {
    return (
        <footer className="w-full bg-depleted px-6 py-4 text-center">
            <div className="text-annotation text-secondary space-y-1">
                <div>Rajalakshmi Institute of Technology—Department of Computer Science and Engineering</div>
                <div>Prototype v0.2—Not for Clinical Use</div>
                <div>Operates under DAHD 2025 Guidelines and PCA Act 1960</div>
            </div>
        </footer>
    );
};

export default FooterRegion;
