import React from "react";
import { BsFuelPump } from "react-icons/bs";
import { MdOutlineSpeed } from "react-icons/md";
import { GiGearStick } from "react-icons/gi";
import { MdOutlineOpenInNew } from "react-icons/md";

function CarItem({ car }) {
  return (
    <div className="group relative rounded-xl p-5 bg-white hover:shadow-xl">
      <h2 className="text-white absolute m-2 px-2 text-sm rounded-full bg-blue-600 items-center">New</h2>
      <img className="transition-opacity group-hover:opacity-50 rounded-t-xl" src={car?.image} width={'100%'} height={250} />
      <div className="p-5">
        <h2 className="font-bold text-amber-950 text-lg mb-2 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">{car?.name}</h2>

        <div className="w-full h-[1px] bg-gray-400 my-3"></div>

        <div className="grid grid-cols-3 mt-5">
          <div className="flex flex-col items-center">
            <BsFuelPump className="text-lg mb-2" />
            <h2>{car.miles} KM</h2>
          </div>
          <div className="flex flex-col items-center">
            <MdOutlineSpeed className="text-lg mb-2" />
            <h2>{car.fuelType}</h2>
          </div>
          <div className="flex flex-col items-center">
            <GiGearStick className="text-lg mb-2" />
            <h2>{car.gearType}</h2>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-400 my-3"></div>

        <div className="flex items-center justify-between">
          <h2 className="font-bold text-lg">IDR {car.price}</h2>
          <h2 className="text-blue-800 text-sm flex gap-2 items-center hover:text-blue-400">
            <MdOutlineOpenInNew /> View Details
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CarItem;
