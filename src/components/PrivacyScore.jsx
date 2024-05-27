import Tooltip from "./ui/Tooltip";
import { SCORE_PERCENTILES } from "../utils/constants";

const getColorBasedOnScore = (score) => {
    if (score >= SCORE_PERCENTILES.FIRST) {
        return 'bg-green'; // High score: Green
    } else if (score >= SCORE_PERCENTILES.SECOND) {
        return 'bg-yellow'; // Medium score: Yellow
    } else {
        return 'bg-red'; // Low score: Red
    }
};

const PrivacyScore = ({ score }) => {

    const widthPercentage = `${Math.min(Math.max(score, 0), 100)}%`;

    return (
        <div className="p-5 bg-white rounded-2xl shadow h-64 w-72 flex flex-col justify-between">
            <div className="flex justify-between items-center">
                <h2 className="text-md font-bold text-darkGray">Privacy Score</h2>
                <Tooltip
                    title="Privacy Score"
                    text="The privacy score is a measure of how well a company is protecting user data. It is capped between 0-100." />
            </div>

            <div className="text-center">
                <div className="text-8xl font-bold">{score}</div>
            </div>
            <div className="mt-2 flex items-center">
                <div className="w-full h-3 bg-gray-200 rounded-full">
                    <div
                        className={`h-full rounded-full ${getColorBasedOnScore(score)}`}
                        style={{ width: widthPercentage }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default PrivacyScore;