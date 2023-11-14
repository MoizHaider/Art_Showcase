"use client";
import React from "react";

function ProfileDataInputSection({ type }) {
  const onSubmitHandler = () => {};
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label for="name">Name</label>
          <input type="text" name="name"/>
        </div>
        <div>
          <label for="title">Title</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label>Upload Profile Image</label>
          <input type="file" name="profileImg" onChange = {}/>
          <label>Upload Background Image</label>
          <input type="file" name="backgroundImg" />
        </div>
        <label for="about"></label>
        <input type="text" name="about"/>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default ProfileDataInputSection;
