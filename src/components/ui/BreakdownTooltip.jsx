import { WEIGHTS, SCORE_BREAKDOWN, TOOLTIPS, BREAKDOWN_EFFECTS } from "../../utils/constants";
import ScoreBreakdownIcon from "./ScoreBreakdownIcon";
import { calculateEffect } from "../ScoreBreakdown";

const iconColors = {
    green: '#5bde60',
    yellow: '#FFC107',
    red: '#F44336',
}

const BreakdownTooltip = ({ hoveredItem, setHoveredItem, companyAnalysis }) => {
    console.log(companyAnalysis);
    const weight = hoveredItem === SCORE_BREAKDOWN.DAYS_SINCE_BREACH || hoveredItem === SCORE_BREAKDOWN.DAYS_TO_REPORT ?
        Math.pow(1.0005, -companyAnalysis[SCORE_BREAKDOWN.DAYS_SINCE_BREACH] + companyAnalysis[SCORE_BREAKDOWN.DAYS_TO_REPORT]) :
        hoveredItem === SCORE_BREAKDOWN.NUMBER_OF_WASHINGTONIANS_AFFECTED ?
            1.5 * companyAnalysis[`${SCORE_BREAKDOWN.NUMBER_OF_WASHINGTONIANS_AFFECTED} Rank`] :
            WEIGHTS[hoveredItem];
    const rank = companyAnalysis[`${hoveredItem} Rank`];
    // 1.0005(-days_since_breachi + days_to_reporti)

    const getPenalty = () => {
        const penalty = TOOLTIPS[hoveredItem].penalty
        if (penalty === BREAKDOWN_EFFECTS.GOOD) {
            return <h4 style={{ color: iconColors.green, fontWeight: "bold", }}>Low</h4>
        } else if (penalty === BREAKDOWN_EFFECTS.NEUTRAL) {
            return <h4 style={{ color: iconColors.yellow, fontWeight: "bold" }}>Medium</h4>
        } else if (penalty === BREAKDOWN_EFFECTS.BAD) {
            return <h4 style={{ color: iconColors.red, fontWeight: "bold" }}>High</h4>
        } else {
            if (rank >= 0.67) {
                return <h4 style={{ color: iconColors.red, fontWeight: "bold" }}>High</h4>
            }
            if (rank >= 0.33) {
                return <h4 style={{ color: iconColors.yellow, fontWeight: "bold" }}>Medium</h4>
            }
            return <h4 style={{ color: iconColors.green, fontWeight: "bold" }}>Low</h4>
        }

    }

    return (
        <div className="bg-darkGray p-4 rounded-lg h-full mt-2 text-white text-md"
            onMouseLeave={() => setHoveredItem(null)}>
            <h3 className="font-bold text-lg">{hoveredItem}</h3>
            <div className="flex mt-2 mb-2 items-center">
                <ScoreBreakdownIcon effect={calculateEffect(rank)} dark={true} />
                <h4 className="ml-5">Top {(rank * 100).toFixed(2)}% Percentile</h4>
            </div>
            <div className="flex mt-2 mb-2 items-center">
                {getPenalty()}
                <h4 className="ml-5">Penalty</h4>
            </div>
            <p>
                {TOOLTIPS[hoveredItem].text}
            </p>
        </div>
    )
}

export default BreakdownTooltip;