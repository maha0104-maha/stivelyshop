import React from "react";
import {Link} from "react-router-dom";
import EmptyState from "../components/EmptyState";
const NotFound=()=>{
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <EmptyState
        title="Page Not Found"
        message="The page you're looking for doesn't exist or may have been moved"/>
      <div className="flex justify-center">
        <Link
          to="/"
          className="rounded-full bg-gray-900 px-5 py-2.5 text-xs font-medium text-white transition hover:bg-gray-700">
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;