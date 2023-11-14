"use client";
import React from "react";

function ProfileDataInputSection({type}) {
  return (
    <>
      <form>
        <label for = "">Name</label>
        <input type="text" name="name" value=""/>
        <label for="title">Title</label>
      </form>
    </>
  );
}

export default ProfileDataInputSection;
