"use client";
import React from "react";

function ProfileDataInputSection({type}) {
  const onSubmitHandler = ()=>{

  }
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div>
          
        </div>
        <label for = "name">Name</label>
        <input type="text" name="name" value=""/>

        <label for="title">Title</label>
        <label >Upload Profile Image</label>
        <imput type = "file" name = "profileImg" value = ""/>
        <label >Upload Background Image</label>
        <input type="file" name="backgroundImg" value=""/>
        <input type="text" name = "title" value=""/>
        <label for="about"></label>
        <input type="text" name="about" value=""/>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default ProfileDataInputSection;
