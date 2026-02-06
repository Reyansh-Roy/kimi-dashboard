import React from 'react';

const HeaderRegion: React.FC = () => {
    const currentDateTime = '2024-03-15 14:32';

    return (
        <header className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between">
            {/* Left: Dashboard Title */}
            <div className="text-header">
                Canine Blood Coordination Dashboard
            </div>

            {/* Center: Current DateTime */}
            <div className="text-data text-secondary">
                {currentDateTime}
            </div>

            {/* Right: User Info and Logout */}
            <div className="flex items-center gap-4">
                <span className="text-annotation text-secondary">
                    Logged in: Veterinary Staff—Metro Emergency Center
                </span>
                <button className="btn-outlined-secondary text-annotation">
                    Logout
                </button>
            </div>
        </header>
    );
};

export default HeaderRegion;
