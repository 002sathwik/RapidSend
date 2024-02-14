"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { app } from "../../../firebaseConfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import FileItem from './_componets/FileItem';

const fileView = ({ params }) => {
  const db = getFirestore(app);
  const [file, setFile] = useState();
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

  return (
    <div className="flex justify-center items-center flex-col ">
      <FileItem  file={file}/>
    </div>
  );
};

export default fileView;
