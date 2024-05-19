import SelectDropdown from './ui/SelectDropdown';
import DataRow from './DataRow';
import InformationBreachedList from './InformationBreachedList';
import { icons } from '../images/icons';
import { useState } from 'react';
import VerticalLine from './ui/VerticalLine';

const SelectedDataBreach = () => {

    const [selectedBreach, setSelectedBreach] = useState('option1');
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];


    return (
        <div className="p-5 bg-white rounded-2xl shadow h-72 w-full">
            <header className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-darkGray">Selected Data Breach</h2>
                <div className="flex items-center">
                    <div className="mr-5 text-darkGray font-bold">
                        Select Incident
                    </div>
                    <SelectDropdown options={options} selectedOption={selectedBreach} onChange={setSelectedBreach} />
                </div>
            </header>
            <div className="flex ">
                <div className="w-96 ml-5 mr-10 h-full flex flex-col justify-between">
                    <DataRow title="Date Reported" metric="02/22/24" icon={icons.calendar} />
                    <DataRow title="Days to Respond" metric="500 Days" icon={icons.clock} />
                    <DataRow title="Washingtonians Affected" metric="100,000" icon={icons.person} />
                    <DataRow title="Estimated Americans Affected" metric="02/22/24" icon={icons.globe} />
                </div>
                <VerticalLine />
                <div className="ml-10 mt-2">
                    <InformationBreachedList />
                </div>

            </div>


        </div>
    )

}

export default SelectedDataBreach;