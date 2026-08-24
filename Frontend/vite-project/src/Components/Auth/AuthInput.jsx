import React from "react";

const AuthInput = ({
  label,
  type = "text",
  placeholder,
  icon: Icon,
  value,
  onChange,
  name,
}) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <div className="relative">
        {Icon && (
          <Icon
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />
        )}

        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-white outline-none placeholder:text-slate-500 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
        />
      </div>
    </div>
  );
};

export default AuthInput;