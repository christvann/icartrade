import Data from "@/Shared/Data";
import React from "react";
import { RiSearch2Line } from "react-icons/ri";

function Seacrh() {
  return (
    <div className="md:flex md:flex-row rounded-md md:p-4 md:rounded-full items-center bg-white p-2 px-5 gap-10 w-[60%]">
      <form class="w-[180px] mx-auto">
        <select
          id="cars"
          class="border cursor-pointer hover:scale-105 hover:text-[#FF5255] transition-all border-gray-300 text-gray-900 outline-none md:border-none shadow-none text-lg rounded-lg focus:ring-[#4B4A3D] focus:border-[#4B4A3D] block w-full p-2.5 dark:bg-gray-700 dark:border-[#4B4A3D] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4B4A3D] dark:focus:border-[#4B4A3D]"
        >
          <option selected className="font-sans font-semibold text-lg">
            Choose a cars
          </option>
          <option value>Brand New</option>
          <option value>Classic</option>
        </select>
      </form>
      <form class="w-[180px] mx-auto">
        <select
          id="car makes"
          class="border cursor-pointer hover:scale-105 transition-all hover:text-[#FF5255] border-gray-300 text-gray-900 outline-none md:border-none shadow-none text-lg rounded-lg focus:ring-[#4B4A3D] focus:border-[#4B4A3D] block w-full p-2.5 dark:bg-gray-700 dark:border-[#4B4A3D] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4B4A3D] dark:focus:border-[#4B4A3D]"
        >
          <option selected className="font-sans font-semibold text-lg">
            Car Makes
          </option>
          {Data.CarMakes.map((maker, index) => (
            <option value={maker.name}>{maker.name}</option>
          ))}
        </select>
      </form>
      <form class="w-[180px] mx-auto">
        <select
          id="price"
          class="border cursor-pointer hover:scale-105 transition-all hover:text-[#FF5255] border-gray-300 text-gray-900 outline-none md:border-none shadow-none text-lg rounded-lg focus:ring-[#4B4A3D] focus:border-[#4B4A3D] block w-full p-2.5 dark:bg-gray-700 dark:border-[#4B4A3D] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4B4A3D] dark:focus:border-[#4B4A3D]"
        >
          <option selected className="font-sans font-semibold text-lg">
            Price
          </option>
          {Data.Pricing.map((price, index) => (
            <option value={price.amount}>{price.amount}</option>
          ))}
        </select>
      </form>
      <div className="w-10 h-10 flex rounded-full bg-[#FF5255] hover:scale-105 transition-all hover:bg-[#FFC5C6] cursor-pointer items-center px-3">
        <RiSearch2Line className="text-white" />
      </div>
    </div>
  );
}

export default Seacrh;
