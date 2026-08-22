import React from "react";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between">

          
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-blue-600"
          >
            GoJourney
          </Link>

          
          <Link
            to="/create-trip"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <PlusIcon className="size-5" />
            <span>Create Trip</span>
          </Link>

        </div>
      </div>
    </header>
  );
};

export default NavBar;