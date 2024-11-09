import React from "react";

function TextAreaField({ item, handleInputChange }) {
  return (
    <div>
      <div>
        <label className="block text-sm font-medium text-gray-700"></label>
        <textarea
          onChange={(e) => handleInputChange(item.name, e.target.value)}
          required={item.required}
          className="w-full rounded-lg border-gray-200 align-top p-4 border shadow-sm sm:text-sm"
          rows="4"
          placeholder="Enter any additional listing notes..."
        ></textarea>
      </div>
    </div>
  );
}

export default TextAreaField;
