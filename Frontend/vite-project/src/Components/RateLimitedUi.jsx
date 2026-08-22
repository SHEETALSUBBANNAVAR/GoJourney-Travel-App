import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

const RateLimitedUi = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg ring-1 ring-slate-200">

        {/* Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
          <AlertTriangle className="h-8 w-8 text-amber-500" />
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-2xl font-bold text-slate-900">
          Too Many Requests
        </h1>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-slate-500">
          You've made too many requests in a short period of time.
          Please wait a moment before trying again.
        </p>

        {/* Info */}
        <div className="mt-6 rounded-xl bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-700">
            Please try again in a few minutes.
          </p>
        </div>

        {/* Button */}
        <button
          onClick={() => window.location.reload()}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </button>

        {/* Small text */}
        <p className="mt-5 text-xs text-slate-400">
          This limit helps keep GoJourney fast and reliable.
        </p>
      </div>
    </div>
  );
};

export default RateLimitedUi;