import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./NavbarComponent.css";

function NavbarComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const hideAuthLinks = ["/dashboard", "/bloodtest", "/appointment"].includes(location.pathname);

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>Smart Health</div>
      <ul className="nav-links">
        {!hideAuthLinks && (
          <>
            <li onClick={() => window.dispatchEvent(new CustomEvent("openModal", { detail: "login" }))}>Login</li>
            <li onClick={() => window.dispatchEvent(new CustomEvent("openModal", { detail: "signup" }))}>Signup</li>
            <li onClick={() => {
              if (location.pathname === "/") {
                window.dispatchEvent(new CustomEvent("showSection", { detail: "about" }));
              } else {
                navigate("/", { state: { scrollTo: "about" } });
              }
            }}>About Us</li>
            <li onClick={() => {
              if (location.pathname === "/") {
                window.dispatchEvent(new CustomEvent("showSection", { detail: "contact" }));
              } else {
                navigate("/", { state: { scrollTo: "contact" } });
              }
            }}>Contact Us</li>
          </>
        )}

      </ul>
    </nav>
  );
}


export default NavbarComponent;
