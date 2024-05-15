// import Tooltip from "./ui/Tooltip";
import ScoreBreakdownItem from "./ScoreBreakdownItem";
import { BREAKDOWN_EFFECTS, INFORMATION_COMPROMISED } from "../utils/constants";

const ScoreBreakdown = () => {

    return (
        <div className="p-5 bg-white rounded-2xl shadow h-64 w-4/12 flex flex-col justify-between">
            <div className="flex justify-between items-center">
                <h2 className="text-md font-bold text-darkGray">Score Breakdown</h2>
                {/* <Tooltip
                    title="Privacy Score"
                    text="The privacy score is a measure of how well a company is protecting user data." /> */}
            </div>

            <div className="h-full w-full bg-white overflow-y-scroll overflow-x-scroll z-0 ml-5 mr-2">
                <ScoreBreakdownItem
                    title="Leak Example"
                    effect={BREAKDOWN_EFFECTS.NEUTRAL}
                    info={INFORMATION_COMPROMISED.OTHER}
                />
                <ScoreBreakdownItem
                    title="Leak Example"
                    effect={BREAKDOWN_EFFECTS.GOOD}
                    info={INFORMATION_COMPROMISED.OTHER}
                />
                <ScoreBreakdownItem
                    title="Leak Example"
                    effect={BREAKDOWN_EFFECTS.GOOD}
                    info={INFORMATION_COMPROMISED.OTHER}
                />
                <ScoreBreakdownItem
                    title="Leak Example"
                    effect={BREAKDOWN_EFFECTS.GOOD}
                    info={INFORMATION_COMPROMISED.OTHER}
                />
                <ScoreBreakdownItem
                    title="Leak Example"
                    effect={BREAKDOWN_EFFECTS.GOOD}
                    info={INFORMATION_COMPROMISED.OTHER}
                />
                <ScoreBreakdownItem
                    title="Leak Example"
                    effect={BREAKDOWN_EFFECTS.GOOD}
                    info={INFORMATION_COMPROMISED.OTHER}
                />
                <ScoreBreakdownItem
                    title="Leak Example"
                    effect={BREAKDOWN_EFFECTS.GOOD}
                    info={INFORMATION_COMPROMISED.OTHER}
                />
            </div>
        </div>
    )

};

export default ScoreBreakdown;