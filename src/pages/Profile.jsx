import React from "react";
import { Link} from "react-router-dom";
import EmptyState from "../components/EmptyState";
const Profile=()=>{
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <EmptyState
        title="Profile Page Not Created Yet"
        message="This page is not available yet. You can browse products from the search page."
      />
      <div className="flex justify-center">
        <Link
          to="/search"
          className="rounded-full bg-gray-900 px-5 py-2.5 text-xs font-medium text-white hover:bg-gray-700">
          Browse Products
        </Link>
      </div>
    </main>
  );
};
export default Profile;
