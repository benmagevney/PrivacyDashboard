import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
    const elRef = useRef(null);

    if (!elRef.current) {
        elRef.current = document.createElement('div');
    }

    useEffect(() => {
        const portalRoot = document.body;
        portalRoot.appendChild(elRef.current);

        return () => {
            portalRoot.removeChild(elRef.current);
        };
    }, []);

    return createPortal(<div>{children}</div>, elRef.current);
};

export default Portal;
