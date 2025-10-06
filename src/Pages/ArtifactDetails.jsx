import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Loading from "./Loading";
import { Helmet } from "react-helmet-async";

const ArtifactDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [singleArtifact, setSingleArtifact] = useState({});
  const [like, setLike] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)
  // console.log(id);
  useEffect(() => {
    axios(`${import.meta.env.VITE_BASE_URL}/artifact/${id}`)
      .then((res) => {
        setSingleArtifact(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

      window.scrollTo(0, 0)
  }, [id]);

  useEffect(() => {
    if (singleArtifact?.likes && user?.email) {
      setLike(singleArtifact?.likes.includes(user?.email));
    }
  }, [singleArtifact, user]);

  console.log(singleArtifact, id);

  const handleLike = () => {
    const email = user?.email;
    axios
      .patch(`${import.meta.env.VITE_BASE_URL}/likes/${id}`, { email })
      .then((res) => {
        setLike(res.data.like);
        axios(`${import.meta.env.VITE_BASE_URL}/artifact/${id}`).then((res) =>
          setSingleArtifact(res.data)
        );
      })
      .catch((err) => {
        console.log(err);
      });

    like &&
      axios
        .delete(`${import.meta.env.VITE_BASE_URL}/likes/${id}`)
        .then((res) => {
          console.log("delete collection", res.data);
        })
        .catch((err) => {
          console.log(err);
        });

    like ||
      axios
        .post(`${import.meta.env.VITE_BASE_URL}/likes`, {
          email: email,
          likeId: id,
          adderEmail: singleArtifact.adderEmail,
          adderName: singleArtifact.adderName,
          photo: singleArtifact.photo,
          location: singleArtifact.location,
          likes: singleArtifact.likes,
        })
        .then((res) => {
          console.log("new collections", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Helmet>
        <title>Artifact Details</title>
      </Helmet>
      <button
        onClick={() => navigate(-1)}
        className="text-2xl font-semibold cursor-pointer px-5 mt-5 py-3 bg-gradient-to-r from-pink-600 to-pink-400 rounded-xl"
      >
        Go Back
      </button>
      <div className="card card-side mt-5 dark:bg-gray-800 bg-opacity-90 backdrop-blur-md text-white shadow-lg rounded-2xl px-6 flex justify-between items-center w-full max-w-6xl mx-auto transition-all duration-300 hover:shadow-2xl flex-col lg:flex-row">
        <figure className="lg:w-1/2 px-10 py-4">
          <img
            className="rounded-2xl h-full shadow-md"
            src={singleArtifact.photo}
            alt="Artifact"
          />
        </figure>

        {/* Right Side: Details */}
        <div className="card-body lg:w-1/2 space-y-4">
          <p className="text-lg font-medium">
            💗 Likes:{" "}
            <span className="font-semibold text-pink-400">
              {singleArtifact?.likes?.length}
            </span>
          </p>

          <div className="overflow-x-auto">
            <table className="table text-white">
              <tbody>
                <tr>
                  <td className="text-base font-bold">Adder Email:</td>
                  <td className="text-base font-semibold">
                    {singleArtifact.adderEmail}
                  </td>
                </tr>
                <tr>
                  <td className="text-base font-bold">Adder Name:</td>
                  <td className="text-base font-semibold">
                    {singleArtifact.adderName}
                  </td>
                </tr>
                {/* Example fields – replace with real ones */}
                <tr>
                  <td className="text-base font-bold">Artifact Name:</td>
                  <td className="text-base font-semibold">
                    {singleArtifact.name}
                  </td>
                </tr>
                <tr>
                  <td className="text-base font-bold">Type:</td>
                  <td className="text-base font-semibold">
                    {singleArtifact.type}
                  </td>
                </tr>
                <tr>
                  <td className="text-base font-bold">Current Location:</td>
                  <td className="text-base font-semibold">
                    {singleArtifact.location}
                  </td>
                </tr>
                <tr>
                  <td className="text-base font-bold">Category:</td>
                  <td className="text-base font-semibold">
                    {singleArtifact.type}
                  </td>
                </tr>
                <tr>
                  <td className="text-base font-bold">Context:</td>
                  <td className="text-base font-semibold">
                    {singleArtifact.context}
                  </td>
                </tr>
                <tr>
                  <td className="text-base font-bold">Created:</td>
                  <td className="text-base font-semibold">
                    {singleArtifact.created}
                  </td>
                </tr>
                <tr>
                  <td className="text-base font-bold">Short description:</td>
                  <td className="text-base font-semibold">
                    {singleArtifact.description}
                  </td>
                </tr>
                <tr>
                  <td className="text-base font-bold">Discovered at:</td>
                  <td className="text-base font-semibold">
                    {singleArtifact.discovered_at}
                  </td>
                </tr>
                <tr>
                  <td className="text-base font-bold">Discovered by:</td>
                  <td className="text-base font-semibold">
                    {singleArtifact.discovered_by}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="card-actions justify-end mt-4">
            <button
              onClick={handleLike}
              className={`px-6 py-2 text-white font-semibold rounded-full shadow-md transition 
          ${
            like
              ? "bg-gradient-to-r from-pink-600 to-pink-400"
              : "bg-gradient-to-r from-purple-600 to-violet-500 hover:scale-105"
          }`}
            >
              {like ? "Liked 💖" : "Like 💗"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;
