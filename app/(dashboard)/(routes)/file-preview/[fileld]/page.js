"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftCircle } from "lucide-react";
import { app } from "./../../../../../firebaseConfig";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalApi from "./../../../../_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";

const FilePreview = ({ params }) => {
  const [password, setPassword] = useState("");
  const [isPasswordEnable, setIsPasswordEnable] = useState(false);
  const db = getFirestore(app);
  const [file, setFile] = useState();
  const [email, setEmail] = useState();
  const { user } = useUser();

  useEffect(() => {
    if (params?.fileld) {
      getfileInfo();
    }
  }, [params?.fileld]);

  const getfileInfo = async () => {
    try {
      const docRef = doc(db, "upFile", params?.fileld);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setFile(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  };

  const handleEnablePasswordChange = (e) => {
    setIsPasswordEnable(e.target.checked);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onPasswordSave = async () => {
    const docRef = doc(db, "upFile", params?.fileld);
    await updateDoc(docRef, {
      password: password,
    });
    toast.success("Password saved successfully!");
  };

  const sendEmail = () => {
    const data = {
      emailToSend: email, // Ensure email is set
      userName: user?.fullName,
      fileName: file?.FileName,
      fileSize: file?.FileSize,
      fileType: file?.FileType,
      shortUrl: file?.shortUrl,
    };
    GlobalApi.SendEmail(data).then((resp) => {
      console.log(resp);
    });
  };
  

  return (
    <div className="flex  flex-row-reverse md:flex-col items-center justify-center py-1 m-4">
      <ToastContainer />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-2 lg:px-10 text-center">
        <div className="border border-black border-dotted overflow-hidden w-full sm:w-5/6 max-w-7xl h-full sm:h-4/6">
          <div className="flex flex-col sm:flex-row w-full h-full">
            <div className="w-full sm:w-1/2 p-8">
              <form className="mb-8 text-left">
                <div className="flex items-center mb-6">
                  <div>
                    <ArrowLeftCircle />
                  </div>
                  <div className="ml-2">
                    <Link href="/upload">Go To Upload</Link>
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="shortUrl" className="text-black block mb-2">
                    ShortUrl
                  </label>
                  <input
                    type="text"
                    value={file?.shortUrl}
                    name="shortUrl"
                    disabled
                    className="w-full p-3 rounded border border-black"
                  />
                </div>
                <div className="mb-6">
                  <div className="mb-3">
                    <input
                      type="checkbox"
                      onChange={handleEnablePasswordChange}
                    />
                    <label className="ml-2">Enable Password?</label>
                  </div>
                  {isPasswordEnable && (
                    <div className="flex gap-3 items-center">
                      <div className="border border-black rounded-md w-full p-2">
                        <input
                          type="password"
                          className="w-full p-2 border rounded outline-none"
                          onChange={handlePasswordChange}
                        />
                      </div>
                      <button
                        className="p-2 border border-black bg-primary text-white rounded-md disabled:bg-gray-300 hover:bg-blue-600"
                        disabled={password.length < 4}
                        onClick={onPasswordSave}
                      >
                        Save
                      </button>
                    </div>
                  )}
                </div>
                <div className="border border-black p-2 w-full text-left">
                  <div className="mb-6">
                    <label htmlFor="email" className="text-black block mb-2">
                      Enter Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-3 rounded border border-black"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      type="submit"
                      onClick={() => sendEmail()}
                      className="bg-primary border mt-6 border-black text-white px-8 py-3 inline-block font-semibold w-full"
                    >
                      Send Mail
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="w-full sm:w-1/2 border border-black text-black flex items-center justify-center flex-col py-8 sm:py-20 px-8 sm:px-12">
              <Image src={file?.FileUrl} width={200} height={200} />
              <h2 className="mt-4">{file?.FileName}</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FilePreview;
