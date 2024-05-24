import { BREAKDOWN_EFFECTS } from "../../utils/constants";

const Severity = ({ severity }) => {

    const colors = {
        green: '#4CAF50',
        yellow: '#FFC107',
        red: '#F44336',
    }

    const getSeverityColor = (severity) => {
        switch (severity) {
            case BREAKDOWN_EFFECTS.GOOD:
                return colors.green;
            case BREAKDOWN_EFFECTS.NEUTRAL:
                return colors.yellow;
            case BREAKDOWN_EFFECTS.BAD:
                return colors.red;
            default:
                return colors.yellow;
        }
    }

    const getSeverityName = (severity) => {
        switch (severity) {
            case BREAKDOWN_EFFECTS.GOOD:
                return "Low";
            case BREAKDOWN_EFFECTS.NEUTRAL:
                return "Neutral";
            case BREAKDOWN_EFFECTS.BAD:
                return "High";
            default:
                return "Neutral";
        }
    }

    return (
        <div style={{ color: getSeverityColor(severity), fontWeight: 'bold' }}>
            {getSeverityName(severity)}
        </div>
    )

}

export default Severity;