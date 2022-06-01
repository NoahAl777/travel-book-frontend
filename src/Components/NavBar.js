import React from "react";
import { Link } from "react-router-dom"

const NavBar = () => {

  return (
    <div className="NavBar">
      <Link to="/">
        <button className="HomeButton">Home</button>
      </Link>
      <Link to="/destinations/new">
        <button className="NewDestination">New Destination</button>
      </Link>
    </div>
  )
};

export default NavBar;