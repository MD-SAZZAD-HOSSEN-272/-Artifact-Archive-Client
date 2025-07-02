import React from "react";
import { FaHome } from "react-icons/fa";
import { IoAlertCircle } from "react-icons/io5";
import { useNavigate } from "react-router";

const NoData = ({ message = "No data found." }) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center text-gray-500 py-28">
      <IoAlertCircle className="w-14 h-14 mb-4 text-red-400" />
      <p className="text-lg font-semibold mb-6">{message}</p>
      <button
        onClick={goHome}
        className="inline-flex cursor-pointer items-center gap-2 px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition duration-300"
      >
        <FaHome className="w-5 h-5" />
        Go Home
      </button>
    </div>
  );
};

export default NoData;
