import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Plus,
  UserCircle,
  Compass,
} from "lucide-react";

const NavBar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        localStorage.removeItem("user");
        setUser(null);
      }
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500">
              <Compass
                size={22}
                className="text-slate-950"
              />
            </div>

            <span className="text-2xl font-bold text-white">
              Go<span className="text-emerald-400">Journey</span>
            </span>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Explore - everyone can see */}
            <Link
              to="/explore"
              className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/5 hover:text-white sm:block"
            >
              Explore
            </Link>

            {/* ================= LOGGED IN ================= */}
            {user && (
              <>

                {/* Create Trip */}
                <Link
                  to="/create-trip"
                  className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/10 transition hover:bg-emerald-400 active:scale-95"
                >
                  <Plus size={19} />

                  <span className="hidden sm:block">
                    Create Trip
                  </span>
                </Link>

                {/* Profile */}
                <Link
                  to="/profile"
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition hover:border-emerald-400/30 hover:bg-white/10"
                >
                  <UserCircle
                    size={24}
                    className="text-emerald-400"
                  />

                  <span className="max-w-32 truncate text-sm font-semibold text-white">
                    {user.name}
                  </span>
                </Link>

              </>
            )}

            {/* ================= LOGGED OUT ================= */}
            {!user && (
              <Link
                to="/login"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition hover:border-emerald-400/30 hover:bg-white/10"
              >
                <UserCircle
                  size={24}
                  className="text-slate-300"
                />

                <span className="text-sm font-semibold text-slate-300">
                  Sign in
                </span>
              </Link>
            )}

          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;