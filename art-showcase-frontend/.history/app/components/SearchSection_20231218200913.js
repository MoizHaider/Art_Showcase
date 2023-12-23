"use client"
import React from "react";
import SearchResult from "./SearchResult";

export default function SearchSection() {
    const onSubmitHandler = ()=>{

    }
  return (
    <div>
      <form onSubmit = {onSubmitHandler}>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      <SearchResult/>
    </div>
  );
}
