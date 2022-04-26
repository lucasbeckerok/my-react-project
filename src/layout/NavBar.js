import CartWidget from "../widgets/CartWidget";
import { NavLink, Link } from "react-router-dom";
import { cartContext } from "../context/CartContext";
import { authContext } from "../context/AuthContext"
import React, { useContext } from 'react';

const NavBar = () => {
  const useCartContext = useContext(cartContext);
  const useAuthContext = useContext(authContext);
  const { cart } = useCartContext;
  const { usuario } = useAuthContext;

  return (

    <ul className="topnav" id="myTopnav">

      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <li className="topnav_home"><h4>Hanno | Kiosco Online</h4></li>
      </NavLink>

      <NavLink to="/categoria/bebidas" style={{ textDecoration: 'none' }}>
        <li>Bebidas</li>
      </NavLink>

      <NavLink to="/categoria/snacks" style={{ textDecoration: 'none' }}>
        <li>Snacks</li>
      </NavLink>

      <NavLink to="/categoria/chocolates" style={{ textDecoration: 'none' }}>
        <li>Chocolates</li>
      </NavLink>

      <NavLink to="/categoria/cigarrillos" style={{ textDecoration: 'none' }}>
        <li>Cigarrillos</li>
      </NavLink>

      {usuario != null ? <NavLink to="/user" style={{ textDecoration: 'none' }}><li>Mi Cuenta</li></NavLink> : <NavLink to="/signup" style={{ textDecoration: 'none' }}><li>Registrate</li></NavLink>}

      {cart.length === 0 ? null : <NavLink to="/cart" style={{ textDecoration: 'none' }}><li className="topnav_carrito"><CartWidget /></li></NavLink>}

    </ul>
  )
}

export default NavBar;