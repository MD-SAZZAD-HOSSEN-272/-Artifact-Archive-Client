import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import NoData from "./NoData";
import Artifact from "../Components/Artifact";
import { Link } from "react-router";
import Loading from "./Loading";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import Aos from "aos";

const MyLikePage = () => {
  const { user } = useContext(AuthContext);
  const [myLikes, setMyLikes] = useState([]);
  const axiosSecure = useAxiosSecure()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Aos.init({
      duration: 2000,

    })
  },[])

  useEffect(() => {
    if(user){
      axiosSecure(`/likes/?email=${user?.email}`)
      .then((res) => {
        setMyLikes(res.data);
        setLoading(false);
        // setTimeout(() => {
        //   console.log(res.data);
          
        // }, 2000)
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
    }
  }, [setMyLikes, user?.email, user]);

  console.log(myLikes);

  if (loading) {
    return <Loading></Loading>;
  }

  console.log(myLikes);

  // if(myLikes.length === 0) {
  //   return <NoData></NoData>;
  // }

  return (
    <>
      {
        myLikes.length === 0 ? <NoData></NoData> : <div>
      <Helmet><title>Like Artifacts</title></Helmet>
      <h1 className="text-5xl text-center font-bold"> My Like Artifacts</h1>
      <div data-aos='fade-down' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {myLikes.map((like) => (
          <div key={like._id} className="dark:bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 text-white w-full">
            <img
              src={like?.photo}
              alt="artifact Image"
              className="w-full h-60 object-cover sepia hover:scale-[1.05] duration-500"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold">{like?.name}</h2>
              <p className="text-sm text-purple-200 mb-4">
                Present Location:{" "}
                <span className="font-medium">{like?.location}</span>
              </p>

              <div className="flex justify-between items-center">
                

                <Link to={`/artifact-details/${like?.likeId}`}>
                  <button className="cursor-pointer text-white bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2 rounded-md text-sm hover:scale-105 transition-transform">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      }
    </>
  );
};

export default MyLikePage;

