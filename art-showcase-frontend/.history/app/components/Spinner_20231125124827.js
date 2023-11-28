import React from "react";

const LoadingSpinner = () => {
  return (

      <div className="text-center text-white">
        <svg
          className="w-16 h-16 animate-spin text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <path d="M 50 50 m -30, 0 a 30,30 0 1,0 60,0 a 30,30 0 1,0 -60,0" fill="none" stroke="url(#gradient)" stroke-width="3"></path>
          <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            r="30"
            strokeDasharray="124.93361431346415 56.97787143782138"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              values="0 50 50;360 50 50"
            ></animateTransform>
          </circle>
        </svg>
        <p className="text-sky-400 text-2xl mt-3">Loading...</p>
      </div>
   
  );
};

export default LoadingSpinner;