import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Artifact from "../Components/Artifact";
import Loading from "./Loading";
import { Helmet } from "react-helmet-async";
import Aos from "aos";

const AllArtifacts = () => {
  const [allArtifacts, setAllArtifacts] = useState([]);
  const [ loading, setLoading ] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    Aos.init({
      duration: 2000,

    })
    window.scrollTo(0, 0)
  },[])

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.value;
    setSearch(searchText);
      
  };

  useEffect(() => {
    axios(`${import.meta.env.VITE_BASE_URL}/artifacts/?searchText=${search}`)
        .then((res) => {
          setAllArtifacts(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
  },[search])

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Helmet>
        <title>All Artifacts</title>
      </Helmet>
      <h1 className="text-5xl font-bold text-center">All Artifacts</h1>
      <form
        onChange={handleSearch}
        className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 mt-10"
      >
        <input
          type="text"
          className="bg-white text-gray-700 text-xl p-3 lg:w-4/10 rounded-xl focus:outline outline-pink-600"
          placeholder="search your artifact"
        />
      </form>
      <div data-aos="fade-left" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {
          allArtifacts.length <= 0 ? <div className="text-4xl font-bold text-center mt-10 py-20 col-span-full">
            No artifacts found for your search. Please try different keywords.
          </div> : allArtifacts.map((artifact) => (
          <Artifact artifact={artifact} key={artifact._id}></Artifact>
        ))
        }
      </div>
    </div>
  );
};

export default AllArtifacts;
