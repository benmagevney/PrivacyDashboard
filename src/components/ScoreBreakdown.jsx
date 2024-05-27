// import Tooltip from "./ui/Tooltip";
import ScoreBreakdownItem from "./ScoreBreakdownItem";
import { BREAKDOWN_EFFECTS, } from "../utils/constants";
import { useState } from "react";
import { SCORE_BREAKDOWN } from "../utils/constants";
import BreakdownTooltip from "./ui/BreakdownTooltip";

export const calculateEffect = (value) => {
    if (value >= 0.67) {
        return BREAKDOWN_EFFECTS.BAD;
    } else if (value >= 0.33) {
        return BREAKDOWN_EFFECTS.NEUTRAL;
    } else {
        return BREAKDOWN_EFFECTS.GOOD;
    }
}

const ScoreBreakdown = ({ isDataLoaded, companyAnalysis }) => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const items = isDataLoaded ?
        Object.entries(SCORE_BREAKDOWN).filter(([, value]) => companyAnalysis[0][value] !== 0).map(([key, value]) => value)
        : [];


    return (
        <div className="p-5 bg-white rounded-2xl shadow h-64 w-4/12 flex flex-col justify-between">
            <div className="flex justify-between items-center">
                <h2 className="text-md font-bold text-darkGray">Score Breakdown</h2>
            </div>


            {hoveredItem != null ?

                <BreakdownTooltip hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} companyAnalysis={companyAnalysis[0]} />

                :
                <div className="h-full w-full bg-white overflow-y-scroll z-0 ml-5 mr-2">
                    {items.map((item, index) => (
                        <ScoreBreakdownItem
                            key={index}
                            title={item}
                            effect={calculateEffect(companyAnalysis[0][`${item} Rank`])}
                            onTooltipEnter={() => setHoveredItem(item)}
                            onTooltipExit={() => setHoveredItem(null)}
                        />
                    ))}
                </div>}

        </div>
    )

};

export default ScoreBreakdown;