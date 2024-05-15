import React from 'react';
import CompanyDetails from '../components/CompanyDetails';
import PrivacyScore from '../components/PrivacyScore';
import ScoreBreakdown from '../components/ScoreBreakdown';
import SelectedDataBreach from '../components/SelectedDataBreach';


const Dashboard = () => {

    return (
        <div className="bg-backgroundBlue min-h-screen w-full bg-cover bg-center bg-no-repeat">
            <div className="mx-10">
                <div className="flex justify-between items-baseline pt-10">
                    <h1 className="font-bold text-5xl">
                        Company Name
                    </h1>
                    <text className="text-xl">
                        Last Breach Date: 10/10/2021
                    </text>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    <PrivacyScore score={65} />
                    <ScoreBreakdown />
                    <CompanyDetails />
                </div>
                <div className="mt-10">
                    <SelectedDataBreach />
                </div>
            </div>

        </div>
    )
};

export default Dashboard;
