import { useState } from "react";
import { Button } from "react-bootstrap";

const DarkMode = () => {

    let [dark, setDark] = useState(false);

    const toggleDarkMode = () => {
        setDark(!dark)
    }
    console.log(dark);

    return (
        <div>
            <h4>Dark Mode</h4>
            <p>Activado? = {dark.toString()}</p>
            {/* <div class="form-check form-switch">
                 <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={toggleDarkMode}></input>
            </div> */}
            <Button onClick={toggleDarkMode}>Dark Mode</Button>
        </div>
    )
}

export default DarkMode;