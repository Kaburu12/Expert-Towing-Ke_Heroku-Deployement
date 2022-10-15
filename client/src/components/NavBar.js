import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <nav>
      <div id="nav-bar">
      <ul>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="#">REQUESTS</Link>
      </li>
      <li>
        <Link to="#">CONTACT US</Link>
      </li>
      <li>
        {user ? ( <div>
          <button onClick={handleLogoutClick}>LOGOUT</button>
          <li>
        <Link to="/reques">REQUESTS</Link>
      </li>
          </div>
          
        ) : (
          <div id="login-signup">
            <Link to="/signup">SIGNUP</Link>
            <Link to="/login">LOGIN</Link>
          </div>
        )}
      </li>
      </ul>
      </div>
     
    </nav>
  );
}

export default NavBar;
