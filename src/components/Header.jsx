import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <h2>NC News</h2>
      </Link>
    </div>
  );
};

export default Header;
