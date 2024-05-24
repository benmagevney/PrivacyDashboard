import ScoreBreakdownIcon from "./ui/ScoreBreakdownIcon";
import toolTip from "../images/tooltip.svg"


const ScoreBreakdownItem = ({ effect, title, onTooltipEnter }) => {

    return (
        <div className="flex justify-between mt-5 relative items-center"

        >
            <ScoreBreakdownIcon effect={effect} />
            <div className="flex mr-5 text-right">
                {title}
                <img
                    src={toolTip} // Replace with your info icon path
                    alt="info"
                    className="w-5 h-5 ml-2 cursor-pointer"
                    onMouseEnter={onTooltipEnter}
                />
            </div>

        </div>
    )

};

export default ScoreBreakdownItem;