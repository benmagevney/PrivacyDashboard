import { useState } from "react";
import toolTip from "../../images/tooltip.svg"

const Tooltip = ({ title, text }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="relative flex items-center">
            <img
                src={toolTip} // Replace with your info icon path
                alt="info"
                className="w-5 h-5 ml-2 cursor-pointer"
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
            />
            {visible && (
                <div className="absolute bottom-full mb-2 p-2 w-64 bg-darkGray text-white text-sm rounded shadow-lg z-50">
                    <div className="font-bold">{title}</div>
                    {text}
                </div>

            )}
        </div>
    );
};

export default Tooltip;