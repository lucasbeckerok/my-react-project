import CartWidget from "../widgets/CartWidget";

const NavBar = () => {
    return (
      <nav className="navBar">
        <ul>
          <li><h3>Hanno | Kiosco Online</h3></li>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Bebidas</a></li>
          <li><a href="#">Golosinas</a></li>
          <li><a href="#">Contacto</a></li>
          <a className="carritoWidget" href="#"><CartWidget/></a>
       </ul>
      </nav>
    )
}

export default NavBar;