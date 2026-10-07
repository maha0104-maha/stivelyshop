import React from "react";
import {FiSearch} from "react-icons/fi";

const EmptyState=({title = "No products found",
    message = "We couldn't find anything matching your search."}) => {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center px-4 text-center"role="status">
      {/* icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
        <FiSearch className="h-6 w-6 text-gray-400"aria-hidden="true"/>
      </div>
      <h2 className="mt-5 text-xl font-semibold text-gray-900">
        {title}
      </h2>
      <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
        {message}
      </p>
    </div>
  );
};

export default EmptyState;