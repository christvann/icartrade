import React from "react";

function DropDownField({ item, handleInputChange }) {
  return (
    <div>
      <div>
        <select 
          onChange={(event) => handleInputChange(item.name, event.target.value)}
          required={item.required} 
          className="w-full border rounded-md p-4 px-1 text-gray-700 focus-within:border-red-200 focus-within:ring-1 focus-within:ring-red-200"
        >
          <option value="">{item.label}</option>
          {item?.options?.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DropDownField;
