import Search from "./Search";
import React from "react";

function Hero() {
  return (
    <div>
      <div className="flex flex-col items-center p-10 py-20 gap-6 h-[630px] rounded-md w-full bg-[#FFC5C6]">
        <h2 className="font-sans text-lg text-[#753839] font-semibold ">Easy to finding cars for rent and for sale</h2>
        <h2 className="font-sans text-[60px] text-[#753839] font-bold ">Find your dream soul for ride</h2>
        <Search />
        <img src="/amg.png" className="hover:scale-105 transition-all"/>
      </div>
    </div>
  );
}

export default Hero;
