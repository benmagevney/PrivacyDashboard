import SelectDropdown from './ui/SelectDropdown';
import DataRow from './DataRow';
import InformationBreachedList from './InformationBreachedList';
import { icons } from '../images/icons';
import { useState, useEffect } from 'react';
import VerticalLine from './ui/VerticalLine';
import { convertExcelDateToDateString, getDifferenceInDays } from '../utils/dates';

const SelectedDataBreach = ({ companyData }) => {
    const [selectedBreach, setSelectedBreach] = useState(0);
    const [selectedBreachData, setSelectedBreachData] = useState(null);

    const options = companyData ? companyData.map((company, index) => {
        return {
            value: index,
            label: convertExcelDateToDateString(company['Date of Breach'])
        };
    }) : [];

    useEffect(() => {
        if (companyData) {
            setSelectedBreachData(companyData[selectedBreach]);
        }
    }, [selectedBreach, companyData]);

    const daysToRespond = selectedBreachData ? getDifferenceInDays(selectedBreachData["Date of Breach"], selectedBreachData["Date Reported"]) : null;
    const washingtoniansAffected = selectedBreachData ? selectedBreachData["Number of Washingtonians Affected"].toLocaleString() : 0;

    const WASHINGTON_POPULATION = 7786000;
    const AMERICA_POPULATION = 333300000;
    const estimatedAmericansAffected = selectedBreachData ? Math.floor(selectedBreachData["Number of Washingtonians Affected"] / WASHINGTON_POPULATION * AMERICA_POPULATION) : 0;

    return (
        <div className="p-5 bg-white rounded-2xl shadow min-h-72 w-full">
            <header className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-darkGray">Selected Data Breach</h2>
                <div className="flex items-center">
                    <div className="mr-5 text-darkGray font-bold">
                        Select Incident
                    </div>
                    <SelectDropdown options={options} selectedOption={selectedBreach} onChange={setSelectedBreach} />
                </div>
            </header>
            {selectedBreachData &&
                <div className="flex justify-between">
                    <div className="w-96 ml-5 mr-10 h-full flex flex-col justify-between">
                        <DataRow title="Date Reported" metric={convertExcelDateToDateString(selectedBreachData["Date Reported"])} icon={icons.calendar} />
                        <DataRow title="Days to Respond" metric={`${daysToRespond} Days`} icon={icons.clock} />
                        <DataRow title="Washingtonians Affected" metric={washingtoniansAffected} icon={icons.person} />
                        <DataRow title="Estimated Americans Affected" metric={estimatedAmericansAffected.toLocaleString()} icon={icons.globe} />
                    </div>
                    <VerticalLine />
                    <div className="ml-10 mt-2">
                        <InformationBreachedList information={selectedBreachData['Information Compromised']} />
                    </div>

                </div>}

        </div>
    )

}

export default SelectedDataBreach;