import ScoreBreakdownIcon from "./ui/ScoreBreakdownIcon";
import Tooltip from "./ui/Tooltip";

const ScoreBreakdownItem = ({ effect, title, info }) => {

    return (
        <div className="flex justify-between mt-5 relative items-center">
            <ScoreBreakdownIcon effect={effect} />
            <div className="flex mr-5">
                {title}
                <Tooltip title={info} text={"placeholder"} />
            </div>

        </div>
    )

};

export default ScoreBreakdownItem;