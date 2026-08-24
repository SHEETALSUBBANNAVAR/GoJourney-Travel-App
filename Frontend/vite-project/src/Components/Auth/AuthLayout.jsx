import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen px-4 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl backdrop-blur-xl md:grid-cols-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;