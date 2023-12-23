"use client"
import React from "react";

export default function SearchSection() {

  return (
    <div>
      <form onSubmit = {onSubmitHandler}>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
