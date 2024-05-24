import DataRow from "./DataRow";
import { getInformationItems } from '../utils/dataUtils';
import { getDifferenceInDays } from '../utils/dates';


const CompanyDetails = ({ isDataLoaded, companyAnalysis, companyData }) => {
    const numBreaches = isDataLoaded ? companyData.length : 0;
    const numAffected = isDataLoaded ? companyData.reduce((acc, curr) => acc + curr["Number of Washingtonians Affected"], 0) : 0;

    const allDaysToRespond = isDataLoaded ? companyData.map(obj => getDifferenceInDays(obj['Date of Breach'], obj["Date Reported"])) : [];
    const averageDaysToRespond = allDaysToRespond.length > 0 ? Math.floor(allDaysToRespond.reduce((acc, curr) => acc + curr, 0) / allDaysToRespond.length) : 0;

    const allInformation = isDataLoaded ? companyData.flatMap(obj => getInformationItems(obj['Information Compromised'])) : [];
    const uniqueInformation = [...new Set(allInformation)].length;


    return (
        <div className="p-5 bg-white rounded-2xl shadow h-64 w-4/12 flex flex-col">
            <div className="flex justify-between items-center">
                <h2 className="text-md font-bold text-darkGray">Company Breakdown</h2>
                {/* <Tooltip
                    title="Privacy Score"
                    text="The privacy score is a measure of how well a company is protecting user data." /> */}
            </div>
            <div className="ml-5 mr-2">
                <DataRow title="Total Breaches" metric={numBreaches} />
                <DataRow title="Average Days to Respond" metric={`${averageDaysToRespond} days`} />
                <DataRow title="Washingtonians Affected" metric={numAffected.toLocaleString()} />
                <DataRow title="Unique Information Breached" metric={`${uniqueInformation} items`} />
            </div>

        </div>
    )
};

export default CompanyDetails;