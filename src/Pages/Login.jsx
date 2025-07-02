import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import SignInWithGoogle from "../assets/Hooks/SignInWithGoogle";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import login from "../lottie/login.json";
import { GoEyeClosed } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css'

const Login = () => {
  const signGoogle = SignInWithGoogle();
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  // console.log(location);



  useEffect(() => {
      Aos.init({
        duration: 2000,
        easing: 'ease-in-out'
      })

      window.scrollTo(0, 0)
    },[])


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    loginUser(email, password)
      .then((result) => {
        toast("Successfully login");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error("invalid Password or email");
      });
  };

  return (
    <div className="hero bg-[#4a362a] min-h-screen rounded-2xl">
      <title>Login</title>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div data-aos="fade-left" className="text-center lg:text-left lg:w-1/2">
          <Lottie animationData={login} loop={true}></Lottie>
        </div>
        <div data-aos="fade-right" className="card lg:w-1/2 bg-gradient-to-br pb-10 from-[#2e1f0e]/50 via-[#3c2c1a]/50 to-[#6e4f2a]/50 backdrop-blur-xl shrink-0 shadow-2xl p-5 text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <div className="card-body">
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="p-3 rounded-sm outline-0 bg-gray-400 text-xl focus:border border-pink-500 text-gray-800"
                placeholder="Email"
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
              <div></div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <p  className="text-left">
              You have no account{" "}
              <Link
                to="/register"
                className="text-blue-600 underline font-semibold"
              >
                Register
              </Link>
            </p>
             <div className="divider">OR</div>
            <button onClick={signGoogle} className="btn">
              Login With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
