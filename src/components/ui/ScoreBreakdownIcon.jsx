import { ReactComponent as BadSVG } from '../../images/downArrow.svg';
import { ReactComponent as GoodSVG } from '../../images/upArrow.svg';
import { ReactComponent as NeutralSVG } from '../../images/neutralLine.svg';
import { BREAKDOWN_EFFECTS } from '../../utils/constants';


const iconColors = {
    green: '#4CAF50',
    lightGreen: '#5bde60',
    yellow: '#FFC107',
    lightRed: '#f74a3e',
    red: '#F44336',
}

const CustomSVGIcon = ({ effect, dark }) => {
    if (effect === BREAKDOWN_EFFECTS.GOOD) {
        const style = dark ? { fill: iconColors.lightGreen, color: iconColors.lightGreen } : { fill: iconColors.green, color: iconColors.green }
        return <GoodSVG style={style} />
    }
    if (effect === BREAKDOWN_EFFECTS.BAD) {
        const style = dark ? { fill: iconColors.lightRed, color: iconColors.lightRed } : { fill: iconColors.red, color: iconColors.red }
        return <BadSVG style={style} />
    }
    return <NeutralSVG style={{ fill: iconColors.yellow, color: iconColors.yellow }} />
}

const ScoreBreakdownIcon = ({ effect, dark }) => {
    return (
        <CustomSVGIcon effect={effect} dark={dark} />
    )

}

export default ScoreBreakdownIcon;