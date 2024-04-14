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
          console.log("rect to", rect.top);
          if (rect.top <= 70 && !applied) {
            setMarginTop("70px");
            setApplied(true)
          } 
          else if(rect.top <= 100 && applied){}
          else if(rect.top > 70 && applied){
            setMarginTop("0px");
            setApplied(false)
          }
          else {
            
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
      className="text-gray-800 lg:text-primary lg:w-[40%] xl:w-[35%] lg:sticky lg:top-0 lg:h-[100vh] lg:bg-gray-800  p-[1.5rem]"
     
    >
      {/* <EditProfileBtn /> */}

      <div className="about flex justify-end "  style={{ marginTop: marginTop }}>
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
