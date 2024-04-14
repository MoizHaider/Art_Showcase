"use client";
import React from "react";
import Image from "next/image";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function SearchSection() {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [socket, setSocket] = useState(null);
  const [focus, setFocus] = useState(false);
  let typingTimer;
 
  useEffect( () => {

    let newSocket
    if (focus) {
      newSocket = io(`http://localhost:8080`,{
       });
      console.log("new socket ", newSocket)
      setSocket(newSocket);
    }
    return () => newSocket && newSocket.close();
  }, [focus]);

  const handleSearch = (searchQuery) => {
    if (!socket) return;

    setQuery(searchQuery);
    socket.emit("search", searchQuery);
  };

  useEffect(() => {
    if (!socket) return;

    socket.on("searchResults", (data) => {
      setResults(data);
    });

    return () => {
      socket.off("searchResults");
    };
  }, [socket]);
  //console.log("search results ", results)
  return (
    // SearchSection.js
    <div className="w-[70%] relative sm:w-[50%] md:w-[40%] lg:w-full">
      <div className="lg:mb-4 w-full lg:w-full flex gap-4">
        <input
          type="text"
          className="w-full focus:outline-none focus:border-red-400 focus:border-2 px-2 sm:py-1 rounded-full py-[7px] lg:py-2"
          placeholder="Search"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={(e)=>{setFocus(true)}}
           onBlur={(e)=>{setFocus(false)}}
        />
        <button
          type="submit"
          className=" w-[50px] lg:w-fit text-text px-4 py-1 rounded-full border-primary border-2 "
        >
          <Image
            width={30}
            height={30}
            src="/searchIcon.png"
            alt="icon"
            className="object-cover"
          />
        </button>
        
      </div>
      {focus && (
        <div className="bg-gray-200 absolute top-[120%] w-full px-4  rounded-[5px]">
          {results.map((data, index) => {
            return <ResultCards data={data.item} key = {index} />;
          })}
        </div>
      )}
    </div>
  );
}

const ResultCards = ({ data }) => {
  const profileImgUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
console.log(data)
  return (
    <Link href = {`/profile/${data._id}`} className="flex flex-col gap-y-2 mt-2 mb-2">
      <div className="flex items-center gap-2">
        <div>
          {" "}
          <Image
            src = {`${profileImgUrl}/${data.profilePicUrl}`}
            width={50}
            height={50}
            className="rounded-full w-[40px] h-[40px]"
            alt = "image"
          />
        </div>
        <p className="text-xl">{data.name}</p>
      </div>
      <div className="w-full h-[1px] bg-gray-400"></div>
    </Link>
  );
};
