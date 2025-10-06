import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Artifact from "./Artifact";
import { Link } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Loading from "../Pages/Loading";

const Artifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const {loading, setLoading} = useContext(AuthContext)

  useEffect(() => {
    axios(`${import.meta.env.VITE_BASE_URL}/artifacts-by-like`).then((res) =>{
      setArtifacts(res.data)
      setLoading(false)
    }).catch(err => {
      console.log(err);
    });
  }, [setArtifacts]);

  if(loading){
    return <Loading></Loading>
  }

  return <div>
    <h1 className="text-5xl text-center font-bold text-white">Featured Artifacts</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {
            artifacts?.map(artifact => <Artifact key={artifact._id} artifact = {artifact}></Artifact>)
        }
    </div>
    <Link to='/all-artifacts'><button className="w-full mt-10 px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-700 cursor-pointer to-pink-600 text-white shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
  Show All Cards
</button>
</Link>
  </div>;
};

export default Artifacts;
