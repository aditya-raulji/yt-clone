import React from "react";

function Loading() {
  return (
    <div>
      <span className="flex items-center justify-center h-screen text-3xl">
      <div className=" flex items-end justify-end h-screen "><div class="flex flex-col items-center space-y-4">
      <div class="relative flex items-center justify-center w-16 h-16">
      <div class="absolute w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p class="text-lg font-semibold text-gray-300 animate-pulse">Loading...</p>
      </div></div>
     <img src="https://cdn.dribbble.com/users/2077073/screenshots/8069486/media/784c639cb9cc22970a3c180cad8d15a4.gif"  alt="" />
        
        <div className=" flex items-end justify-end h-screen"><div class="flex flex-col items-center space-y-4">
      <div class="relative flex items-center justify-center w-16 h-16">
      <div class="absolute w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p class="text-lg font-semibold text-gray-300 animate-pulse">Loading...</p>
      </div></div>


  

      </span>
    </div>
  );
}

export default Loading;
