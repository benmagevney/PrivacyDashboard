// import Tooltip from "./ui/Tooltip";
import ScoreBreakdownItem from "./ScoreBreakdownItem";
import { BREAKDOWN_EFFECTS, } from "../utils/constants";
import { useState } from "react";
import { SCORE_BREAKDOWN } from "../utils/constants";

const ScoreBreakdown = ({ isDataLoaded, companyAnalysis }) => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const items = isDataLoaded ?
        Object.entries(SCORE_BREAKDOWN).filter(([, value]) => companyAnalysis[0][value] !== 0).map(([key, value]) => value)
        : [];

    const weights = items.map(item => companyAnalysis[0][`${item} Rank`]);

    function getPercentile(percentile) {
        weights.sort((a, b) => a - b);
        const index = (percentile / 100) * (weights.length - 1);
        const lower = Math.floor(index);
        const upper = lower + 1;
        const weight = index % 1;

        if (upper >= weights.length) {
            return weights[lower];
        }
        return weights[lower] * (1 - weight) + weights[upper] * weight;
    }

    const calculateEffect = (value) => {
        if (value >= getPercentile(67)) {
            return BREAKDOWN_EFFECTS.BAD;
        } else if (value >= getPercentile(33)) {
            return BREAKDOWN_EFFECTS.NEUTRAL;
        } else {
            return BREAKDOWN_EFFECTS.GOOD;
        }
    }


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
                    <h3 className="font-bold text-lg">{hoveredItem}</h3>
                    <p>{hoveredItem.tooltip}</p>
                </div>

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