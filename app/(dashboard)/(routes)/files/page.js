import { UserButton } from '@clerk/nextjs'
import React from 'react'

const files = () => {
  return (
    <div>
    Files
         <UserButton afterSignOutUrl="/"/>
      
    </div>
  )
}

export default files
