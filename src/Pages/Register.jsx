import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import SignInWithGoogle from "../assets/Hooks/SignInWithGoogle";
import Lottie from "lottie-react";
import register from "../lottie/register.json";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";
import Aos from "aos";

const Register = () => {
  const { registerAdd } = useContext(AuthContext);
  const signGoogle = SignInWithGoogle();
  const [wrongPassword, setWrongPassword] = useState("");
  const navigator = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
        Aos.init({
          duration: 2000,
          easing: 'ease-in-out'
        })
      },[])

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries());
    const { email, password, name, photo } = newUser;

    const checkPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\w_]).{6,}$/;

    if (!checkPassword.test(password)) {
      setWrongPassword(
        "Password will be At least one lowercase letter, one uppercase letter, one digit, one special character and Minimum 6 characters"
      );
      return;
    } else {
      setWrongPassword("");
    }

    registerAdd(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            // console.log('update user Profile', result.user);
            toast("successfully registered");
            navigator(location.state ? location.state : "/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero dark:bg-gray-800 min-h-screen rounded-2xl">
      <title>Register</title>
      <div className="hero-content flex-col lg:flex-row-reverse justify-center gap-10">
        <div data-aos="fade-left" className="text-center lg:text-left lg:w-1/2">
          <Lottie animationData={register} loop={true}></Lottie>
        </div>
        <div data-aos="fade-right" className="card bg-gradient-to-br pb-10 from-gray-900/50 via-gray-600/50 to-[#6e4f2a]/50 backdrop-blur-xl shrink-0 shadow-2xl p-5 text-center lg:w-1/2">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <div className="card-body w-full">
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input
                required
                type="text"
                name="name"
                className="p-3 w-full rounded-sm outline-0 bg-gray-400 text-xl focus:border border-pink-500 text-gray-800"
                placeholder="Name"
              />
              <label className="label">Email</label>
              <input
                required
                type="email"
                name="email"
                className="p-3 rounded-sm outline-0 bg-gray-400 text-xl focus:border border-pink-500 text-gray-800"
                placeholder="Email"
              />
              <label className="label">Photo URL</label>
              <input
                required
                type="url"
                name="photo"
                className="p-3 rounded-sm outline-0 bg-gray-400 text-xl focus:border border-pink-500 text-gray-800"
                placeholder="Photo URL"
              />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="p-3 w-full rounded-sm outline-0 bg-gray-400 text-xl focus:border border-pink-500 text-gray-800"
                  placeholder="Password"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute text-gray-800 cursor-pointer text-xl right-5 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <GoEyeClosed /> : <FaEye></FaEye>}
                </div>
              </div>
              <p className="text-red-500 text-left">{wrongPassword}</p>
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
            <p className="text-left">
              You have already account{" "}
              <Link
                to="/login"
                className="text-blue-600 underline font-semibold"
              >
                Login
              </Link>
            </p>
             <div className="divider">OR</div>
            <button className="btn" onClick={() => signGoogle()}>
              Register With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
