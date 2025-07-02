import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import NoData from "./NoData";
import MyArtifact from "../Components/MyArtifact";
import { toast } from "react-toastify";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import Loading from "./Loading";
import Aos from "aos";

const MyAddedArtifact = () => {
  const { user } = useContext(AuthContext);
  const [myArtifacts, setMyArtifact] = useState([]);
  const [singleArtifact, setSingleArtifact] = useState(null);
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true)
  // const modalRef = useRef()
  // console.log(user.accessToken);

   useEffect(() => {
    Aos.init({
      duration: 2000
    })
  },[])

  useEffect(() => {
    if(user?.email) {
       axiosSecure.get(`/artifact-by-email/?email=${user?.email}`)
      .then((res) => {
        setMyArtifact(res.data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
    }
   
  }, [user?.email]);

  const handleUpdateModal = (id) => {

    const artifact = myArtifacts.find((myArtifact) => myArtifact._id === id);
    // console.log(artifact);
    setSingleArtifact(artifact);
    document.getElementById('my_modal_4').showModal()
    
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateData = Object.fromEntries(formData.entries());
    axios
      .put(
        `${import.meta.env.VITE_BASE_URL}/update/${singleArtifact._id}`,
        updateData
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          axios(
            `${import.meta.env.VITE_BASE_URL}/artifact-by-email/?email=${
              user?.email
            }`, {
              headers: {
                Authorization: `Bearer ${user?.accessToken}`
              }
            }
          )
            .then((response) => {
              setMyArtifact(response.data);
              toast("successfully updated");
              setSingleArtifact(null);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // close modal
    document.getElementById("my_modal_4").close();
  };

  if(loading){
    return <Loading></Loading>
  }

 

  return (
    <div>
      <Helmet><title>My Add Artifacts</title></Helmet>
      <h1 className="text-5xl font-bold text-center py-5 mb-5">
        My Added Artifacts
      </h1>

      {/* modal */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-white/10 backdrop-blur-2xl">
          <div>
            <h1 className="text-5xl font-bold text-center">
              Update Your Artifact{" "}
            </h1>
            {
              singleArtifact && <form
              onSubmit={handleUpdate}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
            >
              <fieldset className="fieldset">
                <label className="label text-2xl font-bold">
                  Artifact Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={singleArtifact?.name}
                  onChange={(e) => setSingleArtifact({...singleArtifact, name:e.target.value})}
                  className="p-3 border-2 border-gray-400 rounded-md outline-0 focus:border-pink-300 text-xl "
                  placeholder="Artifact Name"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label text-2xl font-bold">
                  Artifact Image
                </label>
                <input
                  required
                  type="url"
                  name="photo"
                  value={singleArtifact?.photo}
                  onChange={(e) => setSingleArtifact({...singleArtifact, photo:e.target.value})}
                  className="p-3 border-2 border-gray-400 rounded-md outline-0 focus:border-pink-300 text-xl "
                  placeholder="Artifact Image"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label text-2xl font-bold">
                  Artifact Type
                </label>
                <select
                  name="type"
                  id="type"
                  value={singleArtifact?.type}
                  onChange={(e) => setSingleArtifact({...singleArtifact, type:e.target.value})}
                  className="p-3 border-2 border-gray-400 rounded-md outline-0 focus:border-pink-300 text-xl"
                >
                  <option value="" disabled>
                    Select Type
                  </option>
                  <option value="documents">Documents</option>
                  <option value="tools">Tools</option>
                  <option value=" weapons"> Weapons</option>
                  <option value="writings">Writings</option>
                </select>
              </fieldset>
              <fieldset className="fieldset">
                <label className="label text-2xl font-bold">
                  Historical Context
                </label>
                <input
                  required
                  type="text"
                  name="context"
                  value={singleArtifact?.context}
                  onChange={(e) => setSingleArtifact({...singleArtifact, context:e.target.value})}
                  className="p-3 border-2 border-gray-400 rounded-md outline-0 focus:border-pink-300 text-xl "
                  placeholder="Historical Context"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label text-2xl font-bold">
                  Short description{" "}
                </label>
                <input
                  required
                  type="text"
                  name="description"
                  value={singleArtifact?.description}
                  onChange={(e) => setSingleArtifact({...singleArtifact, description:e.target.value})}
                  className="p-3 border-2 border-gray-400 rounded-md outline-0 focus:border-pink-300 text-xl "
                  placeholder="Short description "
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label text-2xl font-bold">Created At</label>
                <input
                  required
                  type="text"
                  name="created"
                  value={singleArtifact?.created}
                  onChange={(e) => setSingleArtifact({...singleArtifact, created:e.target.value})}
                  className="p-3 border-2 border-gray-400 rounded-md outline-0 focus:border-pink-300 text-xl "
                  placeholder="Created At ('100 BC')
"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label text-2xl font-bold">
                  Discovered At
                </label>
                <input
                  required
                  type="number"
                  name="discovered_at"
                  value={singleArtifact?.discovered_at}
                  onChange={(e) => setSingleArtifact({...singleArtifact, discovered_at:e.target.value})}
                  className="p-3 border-2 border-gray-400 rounded-md outline-0 focus:border-pink-300 text-xl "
                  placeholder="Discovered At"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label text-2xl font-bold">
                  Discovered By
                </label>
                <input
                  required
                  type="text"
                  name="discovered_by"
                  value={singleArtifact?.discovered_by}
                  onChange={(e) => setSingleArtifact({...singleArtifact, discovered_by:e.target.value})}
                  className="p-3 border-2 border-gray-400 rounded-md outline-0 focus:border-pink-300 text-xl "
                  placeholder="Discovered By"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label text-2xl font-bold">
                  Present Location
                </label>
                <input
                  required
                  type="text"
                  name="location"
                  value={singleArtifact?.location}
                  onChange={(e) => setSingleArtifact({...singleArtifact, location:e.target.value})}
                  className="p-3 border-2 border-gray-400 rounded-md outline-0 focus:border-pink-300 text-xl "
                  placeholder="Present Location"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label text-2xl font-bold">Email</label>
                <input
                  required
                  type="email"
                  readOnly
                  defaultValue={user?.email}
                  name="adderEmail"
                  className="p-3 border-2 opacity-50 border-gray-400 rounded-md outline-0 text-xl "
                  placeholder="Email"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label text-2xl font-bold">Your Name</label>
                <input
                  required
                  type="text"
                  readOnly
                  defaultValue={user?.displayName}
                  name="adderName"
                  className="p-3 opacity-50 border-2 border-gray-400 rounded-md outline-0 text-xl "
                  placeholder="Your Name"
                />
              </fieldset>
              <input
                type="submit"
                value="Update"
                className="col-span-full btn"
              />
            </form>
            }
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {
        myArtifacts.length <= 0 ? <NoData></NoData> : <div data-aos='fade-up' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myArtifacts.map((artifact) => (
          <MyArtifact
            key={artifact._id}
            handleUpdateModal={handleUpdateModal}
            artifact={artifact}
            setMyArtifact={setMyArtifact}
            myArtifacts={myArtifacts}
          ></MyArtifact>
        ))}
      </div>
      }
    </div>
  );
};

export default MyAddedArtifact;