import React from "react";

const ErrorLayout = () => {
  return (
    <div className="min-h-screen flex flex-col py-10 justify-center items-center bg-[#3d2b1f] text-white px-6">
      <h1 className="text-8xl font-extrabold text-pink-500 drop-shadow-lg mb-4">
        404
      </h1>
      <h2 className="text-3xl font-bold mb-2">Page Not Found</h2>
      <p className="text-lg text-gray-300 max-w-md text-center mb-6">
        The page you're looking for doesn't exist or has been moved. Maybe it's
        an artifact lost in time.
      </p>

      <a
        href="/"
        className="inline-block px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition shadow-lg"
      >
        Go Back Home
      </a>

      <div className="mt-10 opacity-60">
        <img
          src="https://img.freepik.com/free-vector/error-colored-isometric-composition-signs-tools-materials-solving-problems-errors-computer-vector-illustration_1284-67437.jpg?uid=R198821472&ga=GA1.1.1540942795.1731320437&semt=ais_hybrid&w=740"
          alt="Lost Artifact Illustration"
          className="w-72 rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default ErrorLayout;
