import React, {  useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DownloadCloud } from "lucide-react";
import Image from "next/image";


const FileItem = ({ file }) => {
  const[password,setPassord]=useState();
  return (
    
    <section>
      <header>
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8"> {/* Decreased px-8 and py-8 */}
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
             <a href='/'> <div className="flex items-center justify-center">
                <Image src="/logo.svg" alt="Logo" width={80} height={80} />
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl ml-1 sm:ml-2">
                  <i>RapidSend!</i>
                </h1>
              </div></a>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
             <a href="/"><button
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
              >
                <span className="text-sm font-medium"> View Website </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button></a> 
            </div>
          </div>
        </div>
      </header>
      <div className="  mx-auto max-w-screen-lg px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="mx-auto max-w-screen-md px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">

              <form
                action=""
                className=" border  bg-white mb-0 mt-1 space-y-8 rounded-lg p-6 shadow-lg lg:p-8"
              >
                
                <h1 className="text-primary font-bold text-2xl md:text-4xl text-center ">Downlod Your File </h1>

                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                  {file?.userName} has sent you a file which was uploaded through RapidSend!
                </p>

                <p className="text-black text-center">
   ⚡ {file?.FileType}/{(file?.FileSize / (1024 * 1024)).toFixed(2)} MB
</p>

                <div>
                  

                  <div className="relative">
                  {file?.password.length>3?  <input
                      type="password"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter password"
                      onChange={(e)=>setPassord(e.target.value)}
                    />:null}

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  onClick={()=>window.open(file?.FileUrl)}
                  disabled={file?.password!=password}
                  className=" disabled:bg-gray-300 w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white flex items-center justify-center"
                >
                  <div className="flex flex-row items-center">
                    <div>
                      <DownloadCloud />
                    </div>
                    <div className="ml-2">Download</div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          <div className="  gap-4 md:grid-cols-1 lg:grid-cols-2 md:mt-9 md:p-8">
  <img
    alt="Student"
    src="https://img.freepik.com/free-vector/download-concept-illustration_114360-6362.jpg?size=626&ext=jpg&ga=GA1.1.1247198137.1697257699&semt=ais"
    className="h-70 w-full  lg:col-span-1" // Decreased the height to h-40
  />
</div>

        </div>
      </div>
    </section>
  );
};

export default FileItem;
