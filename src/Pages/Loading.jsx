import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#3d2b1f]">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-pink-600 border-t-transparent"></div>
    </div>
  );
};

export default Loading;
