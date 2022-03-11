import { useState } from "react";

const DarkMode = () => {

    let [dark, setDark] = useState(false);

    const toggleDarkMode = () => {
        setDark(!dark)
    }
    return (
        <div>
            <h6>Dark Mode</h6>
            <p>Activado? = {dark.toString()}</p>
            <button onClick={toggleDarkMode}>Activar/Desactivar</button>
        </div>
    )
}

export default DarkMode;