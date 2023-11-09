import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <h3>GitHub Search</h3>

      <nav>
        <Link to="/" className="mr-2">
          Home
        </Link>
        <Link to="/favourites">Favourites</Link>
      </nav>
    </header>
  );
};

export default Navigation;
