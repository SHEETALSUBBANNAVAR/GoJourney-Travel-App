import React from "react";
import { Link } from "react-router";

const AuthBrand = () => {
  return (
    <Link to="/" className="text-2xl font-bold text-white">
      Go<span className="text-emerald-400">Journey</span>
    </Link>
  );
};

export default AuthBrand;