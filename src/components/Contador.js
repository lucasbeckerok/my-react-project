import { useState } from "react";
import { Button } from "react-bootstrap";

const Contador = () => {

    let [dark, setDark] = useState(false);

    const toggleDarkMode = () => {
        setDark(!dark)
    }
    console.log(dark);
    
    return (
        <div>
            <h1>Contador</h1>
            <p>El tema del sitio es: {dark.toString()}</p>
            <Button onClick={toggleDarkMode}>toggle dark mode</Button>
        </div>
    )
}

export default Contador;