import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    
  return (
    <div className="Navbar">
        <div className="header">
          <Link to="/Home">
            <div className="icon">Home</div>
          </Link>
          <Link to="/ourtrips">
            <div className="icon">Our Trips</div>
          </Link>
          <Link to="/photogallery">
            <div className="icon">Destinations</div>
          </Link>
          <Link to="/aboutUs">
            <div className="icon">About Us</div>
          </Link>
          <Link to='/skills'>
            <div className="icon">Reviews</div>
          </Link>
          
        </div>
    </div>
  )
}

export default NavBar