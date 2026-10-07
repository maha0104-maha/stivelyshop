import React from "react";
import {FiAlertCircle,FiRefreshCw } from "react-icons/fi";
const ErrorState=({title="Something went wrong",
  message ="We couldn't load the data.Please try again",
  onRetry,
}) => {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center px-4 text-center"role="alert" >
      {/*  icon */}
      <FiAlertCircle className="h-12 w-12 text-gray-400"aria-hidden="true"/>
      <h2 className="mt-4 text-xl font-semibold text-gray-900">
        {title}
      </h2>
      <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
        {message}
      </p>
      {onRetry && (
        <div className="mt-5">
          <Button>
            <FiRefreshCw className="mr-2 inline-block" />
            Try Again
          </Button>
        </div>
      )}
    </div>
  );
};

export default ErrorState;