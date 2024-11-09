import React from "react";

function CheckboxField({ item, handleFeatureChange }) {
  return (
    <div>
      <fieldset>
        <legend className="sr-only">Checkboxes</legend>
        <div className="space-y-2">
          <label className="flex cursor-pointer items-start p-4 transition hover:bg-red-100">
            <div className="flex items-center">
              &#8203;
              <input 
                type="checkbox" 
                onChange={(event) => handleFeatureChange(item.name, event.target.checked)} 
                className="size-4 cursor-pointer" 
              />
            </div>
          </label>
        </div>
      </fieldset>
    </div>
  );
}

export default CheckboxField;
