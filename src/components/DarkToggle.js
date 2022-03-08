import { useState } from "react";
import { Button } from "react-bootstrap";

const DarkMode = () => {

    let [dark, setDark] = useState(false);

    const toggleDarkMode = () => {
        setDark(!dark)
    }
    // console.log(dark);
    return (
        <div>
            <h6>Dark Mode</h6>
            <p>Activado? = {dark.toString()}</p>
            <Button onClick={toggleDarkMode}>Activar/Desactivar</Button>
        </div>
    )
}

export default DarkMode;