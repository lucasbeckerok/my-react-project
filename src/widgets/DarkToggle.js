import { useState } from "react";

const DarkMode = () => {

    let [dark, setDark] = useState(false);

    const toggleDarkMode = () => {
        setDark(!dark)
    }
    return (
        <div id="containerDarkToggle">
            <h5>Tema:</h5>
            {/* <h6>Activado? = {dark.toString()}</h6> */}
            <button onClick={toggleDarkMode}>{dark ? "Dark Theme" : "Light Mode"}</button>
        </div>
    )
}

export default DarkMode;