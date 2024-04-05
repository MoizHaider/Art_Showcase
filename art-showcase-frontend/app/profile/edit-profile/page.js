
import ProfileDataInputSection from '@/app/components/profile/ProfileDataInputSection'
import React from 'react'
import { redirect } from "next/navigation";
import { cookies } from 'next/headers';


function CreateProfile() {
//------------------ not logged in redirect logic ------------------------------------------------

let isToken =  cookies().get("token");
  if (!isToken) {
    redirect("/login");
  }
  const isTokenVal = cookies().get("token").value;
  if (!isTokenVal) {
    // Redirect user to login page
    redirect("/login");
  }

//------------------------------------------------------------------------------------------------
  return (
    <div><ProfileDataInputSection type = "edit"/></div>
  )
}

export default CreateProfile