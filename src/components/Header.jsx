import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center shadow-md p-5">
      <Link to={"/"}>
        <img className="hover:scale-105 transition-all cursor-pointer" src="/logo.svg" width={50} height={10} />
      </Link>
      <ul className="hidden md:flex gap-16">
        <Link to={"/"}>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-slate-700">Home</li>
        </Link>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-slate-700">Search</li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-slate-700">New</li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-slate-700">Preowned</li>
      </ul>

      {isSignedIn ? (
        <div className="flex items-center gap-4">
          <UserButton />
          <Link to={"/profile"}>
            <button class="group relative inline-block overflow-hidden border border-[#FF090D] rounded-sm px-4 py-[7px] focus:outline-none focus:ring" href="#">
              <span class="absolute inset-y-0 left-0 w-[2px] bg-[#FF090D] transition-all group-hover:w-full group-active:bg-slate-500"></span>
              <span class="relative text-sm font-medium text-[#FF090D] transition-colors group-hover:text-white">Submit Listing</span>
            </button>
          </Link>
        </div>
      ) : (
        <button>Submit Listing</button>
      )}
    </div>
  );
}

export default Header;
