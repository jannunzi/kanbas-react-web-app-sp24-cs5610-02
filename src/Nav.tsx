import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();
  return (
    <>
      {JSON.stringify(pathname)}
      <nav className="nav nav-pills mt-2">
        <Link
          className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}
          to="/hello"
        >
          Hello World
        </Link>
        <Link
          className={`nav-link ${pathname.includes("Labs") ? "active" : ""}`}
          to="/Labs/a3"
        >
          Labs
        </Link>
        <Link
          className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}
          to="/Kanbas"
        >
          Kanbas
        </Link>
      </nav>
    </>
  );
}

export default Nav;
