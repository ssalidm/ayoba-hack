import React from 'react';
import BusinessOnboarding from '../components/BusinessOnboarding';
import ConversationsList from '../components/ConversationList';
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
                <ConversationsList />
            </div>
            <div className="mt-5">
                <h2>Settings</h2>
                <Settings />
            </div>
            <div className="mt-5">
                <h2>Analytics</h2>
                <Analytics />
            </div>
        </div>
    );
};

export default BusinessDashboard;
