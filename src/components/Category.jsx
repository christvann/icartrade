import React from "react";
import Data from "@/Shared/Data";

function Category() {
  return (
    <div className="mt-40">
      <h2 className="font-bold text-3xl text-center mb-6">Find your type</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20">
        {Data.Category.map((category, index) => (
          <div className="border-[2px] rounded-xl p-5 items-center flex flex-col hover:scale-105 transition-all hover:shadow-lg hover:bg-[#FFB0B1] cursor-pointer">
            <img src={category.icon} width={35} height={35} />
            <h2 className="mt-2">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
