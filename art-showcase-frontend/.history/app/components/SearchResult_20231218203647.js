import React from 'react'
import Image from "next/image"

export default function SearchResult() {
  return (

  <div className="mb-2 flex bg-primary h-[]">
    <Image  alt="Image" width={100} height={100} />
    <div className="font-bold">User Name</div>
  </div>


  )
}
