"use client";
import React from "react";

function ProfileDataInputSection({type}) {
  return (
    <>
      <form>
        <label for = "name">Name</label>
        <input type="text" name="name" value=""/>
        <label for="title">Title</label>
        <input type="text" name = "'/>
      </form>
    </>
  );
}

export default ProfileDataInputSection;
