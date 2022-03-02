import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav>
            <h1>Hanno | Tienda Online</h1>
            <ul>
                <a>Inicio</a>
                <a>Tienda</a>
                <a>Contacto</a>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default NavBar;