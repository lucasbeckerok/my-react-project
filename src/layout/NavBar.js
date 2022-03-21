import CartWidget from "../widgets/CartWidget";
import { Link , NavLink } from "react-router-dom";


const NavBar = () => {
    return (
      <nav className="navBar">
        <ul>
          <li>
            <NavLink to="/">
            <h4>Hanno | Kiosco Online</h4>
            </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/bebidas">
              Bebidas
            </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/snacks">
              Snacks
            </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/chocolates">
              Chocolates
            </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/cigarrillos">
              Cigarrillos
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <CartWidget/>
            </NavLink>
          </li>
       </ul>
      </nav>
    )
}

export default NavBar;