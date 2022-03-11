import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
      <nav className="navBar">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Tienda</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
          <a className="carritoWidget"href="#"><CartWidget/></a>
       </ul>
      </nav>
    )
}

export default NavBar;