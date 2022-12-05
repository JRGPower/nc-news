import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  return location.pathname === "/" ? null : (
    <nav>
      <div>Nav Placeholder</div>
      <Link to="/articles">Back to Articles</Link>
    </nav>
  );
};

export default Nav;
