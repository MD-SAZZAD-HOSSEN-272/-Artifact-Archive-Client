import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import axios from "axios";
import Loading from "./Loading";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";
import Aos from "aos";

const AddArtifact = () => {
  const navigate = useNavigate()
    const {user, loading} = useContext(AuthContext)
    // console.log(user);

    useEffect(() => {

      Aos.init({
        duration: 2000,
      })

      window.scrollTo(0, 0)
    }, [])

    const handleAddArtifact = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newArtifact = Object.fromEntries(formData.entries())
        // console.log(newArtifact);

        axios.post(`${import.meta.env.VITE_BASE_URL}/add-artifact`, newArtifact).then(res => {
            if(res.data.insertedId){
              toast('successfully added your data')
              navigate('/artifact-by-email')
            }
        }).catch(err => {
            console.log(err);
        })
    }
    if(loading){
      return <Loading></Loading>
    }
  return (
    <div>
      <Helmet><title>Add Artifacts</title></Helmet>
      <h1 className="text-5xl font-bold text-center">Add Artifacts </h1>
      <form data-aos='fade-up' onSubmit={handleAddArtifact} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <fieldset className="fieldset">
          <label className="label text-2xl font-bold">Artifact Name</label>
          <input required type="text" name="name" className="p-3 border-2 border-gray-400 rounded-md outline-0 focus:border-pink-300 text-xl " placeholder="Artifact Name" />
        </fieldset>
        <fieldset className="fieldset">
          <label className="label text-2xl font-bold">Artifact Image</label>
          <input required type="url" name="photo" className="p-3 border-2 border-gray-400 rounded-md outline-0 focus:border-pink-300 text-xl " placeholder="Artifact Image" />
        </fieldset>
        <fieldset className="fieldset">
          <label className="label text-2xl font-bold">Artifact Type</label>
          <select name="type" id="type" defaultValue='' className="p-3 border-2 border-gray-400 rounded-md outline-0 focus:border-pink-300 text-xl">
            <option value="" disabled>Select Type</option>
            <option value="documents" className="text-gray-600">Documents</option>
            <option value="tools" className="text-gray-600">Tools</option>
            <option value=" weapons" className="text-gray-600"> Weapons</option>
            <option value="writings" className="text-gray-600">Writings</option>
          </select>
        </fieldset>
        <fieldset className="fieldset">
          <label className="label text-2xl font-bold">Historical Context</label>
          <input required type="text" name="context" className="p-3 border-2 border-gray-400 rounded-md outline-0 focus:border-pink-300 text-xl " placeholder="Historical Context" />
        </fieldset>
        <fieldset className="fieldset">
          <label className="label text-2xl font-bold">Short description </label>
          <input required type="text" name="description" className="p-3 border-2 border-gray-400 rounded-md outline-0 focus:border-pink-300 text-xl " placeholder="Short description " />
        </fieldset>
        <fieldset className="fieldset">
          <label className="label text-2xl font-bold">Created At</label>
          <input required type="text" name="created" className="p-3 border-2 border-gray-400 rounded-md outline-0 focus:border-pink-300 text-xl " placeholder="Created At ('100 BC')
" />
        </fieldset>
        <fieldset className="fieldset">
          <label className="label text-2xl font-bold">Discovered At</label>
          <input required type="number" name="discovered_at" className="p-3 border-2 border-gray-400 rounded-md outline-0 focus:border-pink-300 text-xl " placeholder="Discovered At" />
        </fieldset>
        <fieldset className="fieldset">
          <label className="label text-2xl font-bold">Discovered By</label>
          <input required type="text" name="discovered_by" className="p-3 border-2 border-gray-400 rounded-md outline-0 focus:border-pink-300 text-xl " placeholder="Discovered By" />
        </fieldset>
        <fieldset className="fieldset">
          <label className="label text-2xl font-bold">Present Location</label>
          <input required type="text" name="location" className="p-3 border-2 border-gray-400 rounded-md outline-0 focus:border-pink-300 text-xl " placeholder="Present Location" />
        </fieldset>
        <fieldset className="fieldset">
          <label className="label text-2xl font-bold">Email</label>
          <input required type="email" readOnly defaultValue={user?.email} name="adderEmail" className="p-3 opacity-50 border-2 border-gray-400 rounded-md outline-0 text-xl " placeholder="Email" />
        </fieldset>
        <fieldset className="fieldset">
          <label className="label text-2xl font-bold">Your Name</label>
          <input required type="text" readOnly defaultValue={user?.displayName} name="adderName" className="p-3 opacity-50 border-2 border-gray-400 rounded-md outline-0 text-xl " placeholder="Your Name" />
        </fieldset>
        <input type="submit" value="ADD ARTIFACT" className="col-span-full btn" />
      </form>
    </div>
  );
};

export default AddArtifact;
