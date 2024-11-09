import React from "react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-4xl">My List</h2>
          <Link to={"/add-listing"}>
            <button>
              <a className="group relative inline-block focus:outline-none focus:ring" href="#">
                <span className="absolute inset-0 translate-x-0 translate-y-0 bg-red-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>
                <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">+ Add New List</span>
              </a>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
