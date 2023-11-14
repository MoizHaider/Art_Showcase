"use client";
import React from "react";

function ProfileDataInputSection({type}) {
  return (
    <>
      <form>
        <label>Name</label>
        <input type="text" name="name" value=""/>
        <label for="title"></label>
      </form>
    </>
  );
}

export default ProfileDataInputSection;
