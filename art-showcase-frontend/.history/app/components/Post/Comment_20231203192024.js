import React from 'react'
import Image from 'next/image'

function Comment(props) {
  const imgUrl = "http://localhost:8080/" + props.profilePicUrl;

  return (
   <>
    <Image src={imgUrl} width = {50} height = {50} />
    <div>
      
    </div>
   </>
  )
}

export default Comment