import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
function Header() {
  const items = useSelector((state) => state.cart.item);
  return (
    <div className="Header">
      <span className="HeaderText">GINGOBA</span>
      <button className="SignUpButton">
        <Link to="/cart">Cart {items.length}</Link>{" "}
      </button>
      <button className="SignUpButton">Sign Up</button>
    </div>
  );
}
export default Header;
