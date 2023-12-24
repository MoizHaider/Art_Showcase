import React from "react";

const LoadingSpinner = () => {
  return (

      <div className="text-center text-white">
        <svg
          className="w-16 h-16 animate-spin text-"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >

          <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="currentColor"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
            r="30"
            strokeDasharray="150.93361431346415 56.97787143782138"
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