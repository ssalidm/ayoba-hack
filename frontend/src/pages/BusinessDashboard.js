import React from 'react';
import BusinessOnboarding from '../components/BusinessOnboarding';
import ConversationList from '../components/ConversationList';
import Settings from '../components/Settings';
import Analytics from '../components/Analytics';

const BusinessDashboard = () => {
    return (
        <div className="container mt-5">
            <h1>Business Dashboard</h1>
            <div className="mt-5">
                <BusinessOnboarding />
            </div>
            <div className="mt-5">
                <h2>Conversations</h2>
                <ConversationList />
            </div>

        </div>
    );
};

export default BusinessDashboard;
