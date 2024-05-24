import React, { useState } from 'react';
import { getInformationItems } from '../utils/dataUtils';
import { INFORMATION_COMPROMISED } from '../utils/constants';
import Severity from './ui/Severity';

const InformationBreachedList = ({ information }) => {
    const [selectedItem, setSelectedItem] = useState(0);

    const items = information ? getInformationItems(information) : [];
    const selectedItemTitle = items[selectedItem];
    const selectedItemData = Object.values(INFORMATION_COMPROMISED).filter(item => item.title === selectedItemTitle)[0];

    const handleSelect = (index) => {
        setSelectedItem(index);
    };

    return (
        <div className="flex">
            <div className="flex flex-col">
                <h2 className="text-lg">
                    Information Compromised: {items.length} Items
                </h2>
                <ul className="mt-2 max-h-40 overflow-y-auto rounded-lg w-72">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className={`p-4 cursor-pointer ${selectedItem === index ? 'bg-backgroundBlue text-black' : 'bg-gray-100'
                                } hover:bg-blue-100`}
                            onClick={() => handleSelect(index)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-3 ml-10 w-96 mr-10">
                <h3 className="font-bold text-right align-right font-size text-xl">
                    {selectedItemTitle}
                </h3>
                <div className="flex justify-between mt-2">
                    Severity:
                    <Severity severity={selectedItemData.severity} />

                </div>
                <div className="mt-2">
                    Actions to Take:
                    <ul className="list-disc list-inside ml-5">
                        {selectedItemData.actions.map((action, index) => (
                            <li key={index} className="mb-2 ">
                                {action}
                            </li>
                        ))}


                    </ul>
                </div>

            </div>

        </div>

    );
};

export default InformationBreachedList;
