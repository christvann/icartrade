import React from "react";

function InputField({ item, handleInputChange }) {
  return (
    <div>
      <label className="relative block overflow-hidden rounded-md border border-gray-200 px-2 p-2 pt-3 shadow-sm focus-within:border-red-200 focus-within:ring-1 focus-within:ring-red-200">
        <input
          name={item?.name}
          type={item?.fieldType}
          required={item?.required}
          onChange={(e) => handleInputChange(item.name, e.target.value)}
          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
        <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"></span>
      </label>
    </div>
  );
}

export default InputField;
