import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import "../styles/navbar.css";


const Navbar = () => {

  const location = useLocation();

  return (
    <div className="navbar">
      <Link to={"/"} id="notice" style={{fontWeight:"bold"}}>Notice Board</Link >
      <Link to={"/"} id="home">Home</Link >
      <Link to={"/admin"} id="admin">Admin</Link >
      {location.pathname === "/admin" && (
        <div style={{display:"flex" , position:"absolute" , right:"2.5rem"}}>
          {/* <SignedOut>
            <SignInButton />
          </SignedOut> */} 
          {
            // upper comment will be shown as testing for future reference
            //will take care later on before testing
          }
          <SignedIn>
            <UserButton />
          </SignedIn> 
          </div>
      )}
       
      
    </div>
  );
};

export default Navbar;
