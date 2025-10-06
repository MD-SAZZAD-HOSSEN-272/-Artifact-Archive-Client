import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";
import Swal from "sweetalert2";

const MyArtifact = ({
  artifact,
  setMyArtifact,
  myArtifacts,
  handleUpdateModal,
}) => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        axios
      .delete(`${import.meta.env.VITE_BASE_URL}/delete/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          const remainingData = myArtifacts.filter(
            (artifact) => artifact._id !== id
          );
          setMyArtifact(remainingData);
          Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
          navigate("/all-artifacts");
        }
      })
      .catch((err) => {
        console.log(err);
      });

        
      }
    });
  };

  return (
    <div>
      {/* artifact grid */}

      <div className=" dark:bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 text-white w-full">
        <img
          src={artifact?.photo}
          alt="artifact Image"
          className="w-full h-60 object-cover sepia hover:scale-[1.05] duration-500"
        />

        <div className="p-4">
          <h2 className="text-xl font-semibold">{artifact?.name}</h2>
          <p className="text-sm text-purple-200 mb-4">
            Present Location:{" "}
            <span className="font-medium">{artifact?.location}</span>
          </p>

          <div className="flex flex-col space-y-3 xl:space-y-0 gap-5 justify-between xl:flex-row xl:items-center">
            <div className="flex gap-5 items-center">
              <span className="flex items-center gap-1 text-sm font-semibold px-5 py-2 rounded-xl bg-gradient-to-l from-pink-600 to-pink-400 text-white shadow hover:scale-105 transition">
              ❤️ Likes: {artifact?.likes?.length}
            </span>
            <Link>
              <button
                onClick={() => handleUpdateModal(artifact?._id)}
                className="cursor-pointer px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-md hover:shadow-lg transition duration-300"
              >
                Update
              </button>
            </Link>
            </div>

            <div className="flex gap-5 items-center">
              <button
              onClick={() => handleDelete(artifact._id)}
              className="cursor-pointer px-5 py-2 rounded-full font-semibold bg-[#4a2f25] text-red-300 border border-red-400 hover:bg-[#5a3b30] shadow-md hover:shadow-lg transition duration-300"
            >
              Delete
            </button>

            <Link to={`/artifact-details/${artifact?._id}`}>
              <button className="cursor-pointer text-white bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2 rounded-md text-sm hover:scale-105 transition-transform">
                View Details
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArtifact;
