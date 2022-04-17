import CartWidget from "../widgets/CartWidget";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";

const NavBar = () => {
  const useCartContext = useContext(cartContext);
  const { cart } = useCartContext;

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
            {cart.length === 0 ? null : <NavLink to="/cart">
              <CartWidget/>
            </NavLink>}
          </li>
       </ul>
      </nav>
    )
}

export default NavBar;