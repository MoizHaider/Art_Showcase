"use client"
import React from "react";
import SearchResult from "./SearchResult";

export default function SearchSection() {
    const onSubmitHandler = ()=>{

    }
  return (
// SearchSection.js
<div className="lg:col-span-1 sticky top-0 h-screen p-4 bg-secondary w-[400px]">
  <form onSubmit={onSubmitHandler} className="mb-4">
    <input
      type="text"
      className="w-full border rounded px-2 py-1"
      placeholder="Search"
    />
    <button
      type="submit"
      className="bg-primaryD text-white px-4 py-1 rounded ml-2"
    >
      Search
    </button>
  </form>
  <SearchResult />
</div>
  );
}
