import { useState } from "react";
import toolTip from "./tooltip.svg";

const Tooltip = ({ text }) => {
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
                <div className="absolute bottom-full mb-2 p-2 w-48 bg-darkGray text-white text-sm rounded shadow-lg">
                    {text}
                </div>
            )}
        </div>
    );
};

export default Tooltip;