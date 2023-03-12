import { useDarkMode } from "context/darkMode";
import React from "react";

const TriggerDarkMode = () => {
    const {darkMode, setDarkMode} = useDarkMode();
    return (
        <button
        onClick={() => {
            setDarkMode(!darkMode);
        }}
        >
        {`${darkMode ? "Desactivar" : "Activar"} modo Dark`}
        </button>
    );
};

export default TriggerDarkMode;
