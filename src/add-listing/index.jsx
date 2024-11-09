import Header from "@/components/Header";
import React, { useState } from "react";
import carDetails from "./../Shared/carDetails.json";
import InputField from "./components/InputField";
import DropDownField from "./components/DropDownField";
import TextAreaField from "./components/TextAreaField";
import features from "./../Shared/features.json";
import CheckboxField from "./components/CheckboxField";
import { CarListing } from "./../configs/schema";
import { db } from "./../configs";
import IconField from "./components/IconField";
import UploadImages from "./components/UploadImages";
import { LuLoader2 } from "react-icons/lu";

function AddListing() {
  const [formData, setFormData] = useState({});
  const [featuresData, setFeaturesData] = useState([]);
  const [triggerUploadImages, setTriggerUploadImages] = useState();
  const [loader, setLoader] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleFeatureChange = (name, isChecked) => {
    setFeaturesData((prevData) => {
      if (isChecked) {
        return [...prevData, name];
      } else {
        return prevData.filter((feature) => feature !== name);
      }
    });
    console.log(featuresData);
  };

  const onSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    const dataToSubmit = { ...formData, features: featuresData };
    console.log(dataToSubmit);

    try {
      const result = await db
        .insert(CarListing)
        .values({
          ...formData,
          features: featuresData,
        })
        .returning({ id: CarListing.id });
      if (result) {
        console.log("Data Saved");
        setTriggerUploadImages(result[0]?.id);
        setLoader(false);
      }
    } catch (e) {
      console.log("Error", e);
    }
  };
  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-4xl">Add New List</h2>
        <form className="border-[2px] border-red-50 p-10 rounded-xl mt-10 shadow-md">
          <div>
            <h2 className="font-medium text-xl mb-6">Car Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {carDetails.carDetails.map((item, index) => (
                <div key={index}>
                  <label className="font-medium text-sm flex items-center gap-2 mb-1">
                    <IconField icon={item?.icon} />
                    {item?.label} {item.required && <span className="text-red-500">*</span>}
                  </label>
                  {item.fieldType === "text" || item.fieldType === "number" ? (
                    <InputField item={item} handleInputChange={handleInputChange} />
                  ) : item.fieldType === "dropdown" ? (
                    <DropDownField item={item} handleInputChange={handleInputChange} />
                  ) : item.fieldType === "textarea" ? (
                    <TextAreaField item={item} handleInputChange={handleInputChange} />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-300 my-10"></div>
          <div>
            <h2 className="font-medium text-xl my-10">Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {features.features.map((item, index) => (
                <div key={index} className="flex items-center gap-2 my-3 border rounded-md border-gray-200 p-4 cursor-pointer transition hover:bg-red-100">
                  <CheckboxField item={item} handleFeatureChange={(name, isChecked) => handleFeatureChange(item.name, isChecked)} isChecked={featuresData.includes(item.name)} />
                  <h2>{item.label}</h2>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-300 my-10"></div>
          <UploadImages triggerUploadImages={triggerUploadImages} setLoader={(v) => setLoader(v)} />
          <div className="mt-10 justify-end flex">
            <button type="button" disabled={loader} onClick={(e) => onSubmit(e)} className="relative">
              <a className="group relative inline-flex hover:scale-105 transition-all items-center overflow-hidden rounded bg-red-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-red-500">
                {!loader && (
                  <span className="absolute -start-full transition-all group-hover:start-4">
                    <svg className="size-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                )}
                <span className="text-sm font-medium transition-all group-hover:ms-4">{!loader ? "Submit" : <LuLoader2 className="animate-spin text-lg" />}</span>
              </a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddListing;
