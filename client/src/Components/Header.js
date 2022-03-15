import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

export default function Header() {
  return (
    <div className="Header">
      <div className="BankName">
        <NavLink to="/">KRASP</NavLink>
      </div>
      <div className="Header_Options">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/transfer-money">
          <p>Transfer Money</p>
        </NavLink>
      </div>
    </div>
  );
}
