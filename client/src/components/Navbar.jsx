import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"} id="notice">Notice Board</Link >
      <Link to={"/"} id="home">Home</Link >
      <Link to={"/admin"} id="admin">Admin</Link >
    </div>
  );
};

export default Navbar;
