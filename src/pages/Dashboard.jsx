import React from 'react';
import CompanyDetails from '../components/CompanyDetails';
import PrivacyScore from '../components/PrivacyScore';
import ScoreBreakdown from '../components/ScoreBreakdown';
import SelectedDataBreach from '../components/SelectedDataBreach';
import { convertExcelDateToDateString } from '../utils/dates';


const Dashboard = ({ companyData, companyAnalysis, companyScore }) => {
    const isDataLoaded = companyData?.length > 0 && companyAnalysis?.length > 0;

    const maxNameLength = 45;
    var companyName = isDataLoaded ? companyData[0]['Organization Name'] : '';
    if (companyName.length > maxNameLength) {
        companyName = companyName.slice(0, maxNameLength) + '...';
    }

    const privacyScore = isDataLoaded ? Math.floor(companyScore) : 0;

    const allBreachDates = isDataLoaded ? companyData.map(obj => obj['Date of Breach']) : [];
    const lastBreachDate = allBreachDates.length > 0 ? Math.max(...allBreachDates) : 'N/A';

    return (
        <div className="bg-backgroundBlue min-h-screen w-full bg-cover bg-center bg-no-repeat">
            <div className="mx-10">
                <div className="flex justify-between items-baseline pt-10">
                    <h1 className="font-bold text-5xl">
                        {companyName}
                    </h1>
                    <div className="text-xl text-right">
                        Last Breach Date: {convertExcelDateToDateString(lastBreachDate)}
                    </div>
                </div>
                <div className="flex mt-10 justify-between">
                    <PrivacyScore score={privacyScore} />
                    <ScoreBreakdown />
                    <CompanyDetails isDataLoaded={isDataLoaded} companyAnalysis={companyAnalysis} companyData={companyData} />
                </div>
                <div className="mt-10">
                    <SelectedDataBreach companyData={companyData} />
                </div>
            </div>

        </div>
    )
};

export default Dashboard;
