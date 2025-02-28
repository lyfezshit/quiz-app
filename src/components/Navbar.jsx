import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col items justify-center min bg-pink-200 p-2">
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
};
export default Navbar;
