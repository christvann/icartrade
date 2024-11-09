import { storage } from "@/configs/firebaseConfig";
import { CarImages } from "@/configs/schema";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { db } from "@/configs";

function UploadImages({triggerUploadImages,setLoader}) {
  const [selectedFileList, setSelectedFileList] = useState([]);

  useEffect(()=>{
    if(triggerUploadImages){
      UploadImageToServer();
    }
  },[triggerUploadImages])

  const onFileSelected = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      setSelectedFileList((prev) => [...prev, file]);
    }
  };

  const onImageRemove = (image, index) => {
    const result = selectedFileList.filter((item) => item != image);
    setSelectedFileList(result);
  };

  const UploadImageToServer = async() => {
    setLoader(true);
    await selectedFileList.forEach(async(file) => {
      const fileName = Date.now() + '.jpeg';
      const storageRef = ref(storage, 'car-trade/' + fileName);
      const metaData = {
        contentType: 'image/jpeg',
      };
      await uploadBytes(storageRef, file, metaData)
        .then((snapShot) => {
          console.log('Uploaded File');
        }).then(resp => {
          getDownloadURL(storageRef).then(async (downloadUrl) => {
            console.log(downloadUrl);
            await db.insert(CarImages).values({
              imageUrl:downloadUrl,
              carListingId:triggerUploadImages
            })
          })
        })
        setLoader(false);
    })
  }

  return (
    <div>
      <h2 className="text-xl font-medium my-3">Upload Car Image</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {selectedFileList.map((image, index) => (
          <div key={index}>
            <IoMdCloseCircleOutline className="absolute m-2 text-lg text-white cursor-pointer" onClick={() => onImageRemove(image, index)} />
            <img src={URL.createObjectURL(image)} className="w-full h-[130px] object-cover rounded-xl hover:shadow-lg" />
          </div>
        ))}

        <label htmlFor="upload-images">
          <div className="border rounded-xl border-dotted border-red-300 bg-red-100 hover:shadow-md p-10 cursor-pointer">
            <h2 className="text-lg text-red-300 text-center">+</h2>
          </div>
        </label>
        <input type="file" multiple={true} id="upload-images" onChange={onFileSelected} className="opacity-0" />
      </div>
    </div>
  );
}

export default UploadImages;
