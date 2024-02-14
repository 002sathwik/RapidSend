"use client "
import React from 'react'
import UplodeForm from "./_components/UplodeForm";

const upload = () => {
 
    
  return (
    <div className='p-4 px-8 md:px-28   items-center text-center'>
    <h2 className=' text-2xl md:text-[35px] text-center m-5'>Start 
    <strong  className='text-primary'> Uploading </strong>Files and <strong className='text-primary'>Share</strong>  it</h2>
    <UplodeForm  />

    </div>
  )
}

export default upload
