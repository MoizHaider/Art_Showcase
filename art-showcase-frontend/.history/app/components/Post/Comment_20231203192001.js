import React from 'react'
import Image from 'next/image'

function Comment(props) {
  const imgUrl = "http://localhost:8080/" + props.profilePicUrl;

  return (
   <>
    <Image src={imgUrl}/>
   </>
  )
}

export default Comment