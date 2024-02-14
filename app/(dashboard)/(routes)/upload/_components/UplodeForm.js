"use client";
import React, { useEffect, useState } from "react";
import AlertMsg from "./AlertMsg";
import FilePreview from "./FilePreview";
import { app } from './../../../../../firebaseConfig';
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import ProgressBar from "./ProgressBar";
import UploadMsg from "./UploadMsg";
import { useUser } from "@clerk/nextjs";


import { useRouter } from "next/navigation";
import { gennarate } from "../../../../_utils/RandomNumber";


const UplodeForm = ({ uploadBtnClick }) => {
  const { user } = useUser();
  const router=useRouter()
  const [progress, setProgress] = useState();
  const [file, setFile] = useState();
  const [ErrorMsg, setErrorMsg] = useState();
  const[flDocID,setflDocID]=useState();
  const db = getFirestore(app);


  const onFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected File:", selectedFile);

    if (selectedFile && selectedFile.size > 2000000) {
      console.log("Size is Greater Than 2MB");
      setErrorMsg("Max File Size is 2 MB");
      return;
    }
    setErrorMsg(null);
    console.log("Before setting state - selectedFile:", selectedFile);
    setFile(selectedFile);
  };

  const handleUploadClick = () => {
    console.log("File clicked in UplodeForm:", file);

    const metadata = {
      contentType: file.type,
    };

    if (uploadBtnClick) {
      uploadBtnClick(file);
    }

    const storage = getStorage(app); // Move storage initialization here
    const storageRef = ref(storage, "file-upload/" + file?.name);

    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on("state_changed", (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      setProgress(progress);
      progress == 100 &&
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          saveInfo(file, downloadURL);
        });
    });
  };
  const saveInfo = async (file, fileURL) => {
    const DocId=gennarate().toString();
    await setDoc(doc(db, "upFile", DocId), {
      FileName: file?.name,
      FileSize: file?.size,
      FileType: file?.type,
      FileUrl: fileURL,
      FileId:DocId,
      userEmail: user?.primaryEmailAddress.emailAddress,
      userName: user?.fullName,
      password: "",
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + DocId,
    });
    setflDocID(DocId);
    toast.success("uploaded")
  };

  const removemsg = () => {
    setProgress(0);
  };
  useEffect(() => {
    if (progress === 100 && flDocID) {
      console.log(progress);
      // Use setTimeout to allow the progress UI to update before navigating
      setTimeout(() => {
        router.push('/file-preview/' + flDocID);
      }, 0);
    }
  }, [progress, router, flDocID]);
  
  
  return (
    <div>
     <ToastContainer />
      <div className="flex items-center justify-center w-full bg-white">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-100 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-200"
        >
          {" "}
          {progress == 100 ? (
            <UploadMsg removemsg={removemsg} />
          ) : (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-primary dark:text-primary"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm md:text-2xl text-black dark:v">
                <strong className="font-semibold">Click to upload</strong> or{" "}
                <strong className="text-primary">drag</strong> and{" "}
                <strong className="text-primary">drop</strong>
              </p>
              <p className="text-xs text-black dark:text-black">
                SVG, PNG, JPG, or GIF (MAX SIZE: 2MB)
              </p>
            </div>
          )}
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={onFileSelect}
          />
        </label>
      </div>
      {ErrorMsg ? <AlertMsg msg={ErrorMsg} /> : null}
      {file ? (
        <FilePreview file={file} removeFile={() => setFile(null)} />
      ) : null}

      {progress > 0 ? (
        <ProgressBar progress={progress} />
      ) : (
        <button
          disabled={!file}
          className="p-2 text-white md:w-[34%] w-[55%] rounded-full mt-5 disabled:bg-gray-400  cursor-pointer
        bg-primary hover:bg-primary-dark "
          onClick={() => handleUploadClick(file)}
        >
          Upload
        </button>
      )}
    </div>
  );
};

export default UplodeForm;
