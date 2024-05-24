// import Tooltip from "./ui/Tooltip";
import ScoreBreakdownItem from "./ScoreBreakdownItem";
import { BREAKDOWN_EFFECTS, INFORMATION_COMPROMISED } from "../utils/constants";
import { useState } from "react";

const ScoreBreakdown = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const items = [
        { title: 'Leak Example 1', effect: BREAKDOWN_EFFECTS.NEUTRAL, info: INFORMATION_COMPROMISED.OTHER },
        { title: 'Leak Example 2', effect: BREAKDOWN_EFFECTS.GOOD, info: INFORMATION_COMPROMISED.OTHER },
        // Add more items as needed
    ];

    return (
        <div className="p-5 bg-white rounded-2xl shadow h-64 w-4/12 flex flex-col justify-between">
            <div className="flex justify-between items-center">
                <h2 className="text-md font-bold text-darkGray">Score Breakdown</h2>
                {/* <Tooltip
                    title="Privacy Score"
                    text="The privacy score is a measure of how well a company is protecting user data." /> */}
            </div>


            {hoveredItem != null ?
                <div className="bg-darkGray p-4 rounded-lg h-full mt-2 text-white text-md"
                    onMouseLeave={() => setHoveredItem(null)}>
                    <h3 className="font-bold text-lg">{hoveredItem.title}</h3>
                    <p>{hoveredItem.tooltip}</p>
                </div>

                :
                <div className="h-full w-full bg-white overflow-y-scroll z-0 ml-5 mr-2">
                    {items.map((item, index) => (
                        <ScoreBreakdownItem
                            key={index}
                            title={item.title}
                            effect={item.effect}
                            info={item.info}
                            onTooltipEnter={() => setHoveredItem(item)}
                            onTooltipExit={() => setHoveredItem(null)}
                        />
                    ))}
                </div>}

        </div>
    )

};

export default ScoreBreakdown;