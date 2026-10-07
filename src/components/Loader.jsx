import React from "react";
const Loader=({message = "Loading..."}) => {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center"role="status"aria-live="polite">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-gray-900"></div>
      <p className="mt-4 text-sm text-gray-500">
        {message}
      </p>
    </div>
  );
};

export default Loader;