import React from "react";
import { Link } from "react-router";

const Artifact = ({ artifact }) => {
  return (
    <div className=" dark:bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-xl hover:scale-[1.01] transition-all duration-300 text-white w-full">
      <img
        src={artifact?.photo}
        alt="Artifact Image"
        className="w-full h-60 object-cover sepia hover:scale-[1.05] duration-500"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold">{artifact?.name}</h2>
        <p className="text-sm text-purple-200 mb-4">
          Present Location:{" "}
          <span className="font-medium">{artifact?.location}</span>
        </p>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-1 text-sm font-semibold px-3 py-1 rounded-xl bg-gradient-to-l from-pink-600 to-pink-400 text-white shadow hover:scale-105 transition">
            ❤️ Likes: {artifact?.likes?.length}
          </span>

          <Link to={`/artifact-details/${artifact?._id}`}>
            <button className="text-white bg-gradient-to-r cursor-pointer from-indigo-600 to-purple-600 px-4 py-1 rounded-md text-sm hover:scale-105 transition-transform">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Artifact;
