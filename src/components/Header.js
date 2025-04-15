import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header 
    style={{ 
      backgroundColor: "#333", 
      color: "#fff", 
      padding: "10px", 
      textAlign: "center" }}>
        
            <h1>Online Mall</h1>
            <nav>
                <Link to="/" style={{ color: "#fff", margin: "0 10px" }}>
                Home</Link>
                <Link to="/products" style={{ color: "#fff", margin: "0 10px" }}>
                Products</Link>
                <Link to="/cart" style={{ color: "#fff", margin: "0 10px" }}>
                Cart</Link>
            </nav>
        </header>
  )
}

export default Header;
