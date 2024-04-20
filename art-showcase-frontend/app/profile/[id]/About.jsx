"use client"
import { useState, useEffect } from "react";
import React from "react";
import CreatePostSection from "../../components/profile/CreatePostSection";


export default function About({
  token,
  userId,
  email,
  name,
  profilePicUrl,
  data,
  currentUser
}) {
  const [marginTop, setMarginTop] = useState("0px");
  const [applied, setApplied] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
       
      if (window.innerWidth > 1024) {
        const mainElement = document.querySelector(".about");
        if (mainElement) {
          const rect = mainElement.getBoundingClientRect();
          console.log("rect to", rect.top, " ", applied, " ", marginTop );
          
          if (rect.top <= 70 && !applied) {
            console.log("inside0")
            setApplied(true)
            setMarginTop("70px");
            
          } 
          else if(rect.top <= 70 && applied){console.log("inside1")}
          else if(rect.top > 70 ){
            console.log("inside2")
            setMarginTop("0px");
            setApplied(false)
          }
          else {
            console.log("inside3")
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      className="about text-gray-800 lg:text-primary lg:w-[40%] xl:w-[35%] lg:sticky lg:top-0 lg:h-[100vh] lg:bg-gray-800  p-[1.5rem] overflow-x-hidden"
     
    >
      {/* <EditProfileBtn /> */}

      <div className=" flex justify-end "  style={{ marginTop: marginTop }}>
        {currentUser && (
          <CreatePostSection
            token={token}
            userId={userId}
            email={email}
            name={name}
            profilePicUrl={profilePicUrl}
            data={data}
          />
        )}
      </div>
      <div className="font-bold text-xl xs:text-2xl md:text-3xl">About</div>
      <div>{data.userData.about}</div>
      <div className="bg-gray-400 w-full absolute left-0 right-0 h-[1px] lg:hidden mt-4"></div>
    </main>
  );
}
