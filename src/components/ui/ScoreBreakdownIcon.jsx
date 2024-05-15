import { ReactComponent as BadSVG } from '../../images/downArrow.svg';
import { ReactComponent as GoodSVG } from '../../images/upArrow.svg';
import { ReactComponent as NeutralSVG } from '../../images/neutralLine.svg';
import { BREAKDOWN_EFFECTS } from '../../utils/constants';


const iconColors = {
    green: '#4CAF50',
    yellow: '#FFC107',
    red: '#F44336',
}

const CustomSVGIcon = ({ effect }) => {
    if (effect === BREAKDOWN_EFFECTS.GOOD) {
        return <GoodSVG style={{ fill: iconColors.green, color: iconColors.green }} />
    }
    if (effect === BREAKDOWN_EFFECTS.BAD) {
        return <BadSVG style={{ fill: iconColors.red, color: iconColors.red }} />
    }
    return <NeutralSVG style={{ fill: iconColors.yellow, color: iconColors.yellow }} />
}

const ScoreBreakdownIcon = ({ effect }) => {
    return (
        <CustomSVGIcon effect={effect} />
    )

}

export default ScoreBreakdownIcon;