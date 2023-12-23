import React from 'react'
import Image from "ne"

export default function SearchResult() {
  return (
<div className="mb-4">
  <div className="mb-2">
    {/* Image area */}
    <Image  alt="Image" width={100} height={100} />
  </div>
  <div className="font-bold">User Name</div>
</div>
  )
}
