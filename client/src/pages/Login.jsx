import React, { useState } from "react";
import logo from "../assets/logo.png";
import BaseCard from "../components/BaseCard";
import BaseSpinner from "../components/BaseSpinner";
import visible from "../assets/open.png";
import hidden from "../assets/close.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "../page.css";

const Login = () => {
  let [pswdIsVisible, setPswdIsVisible] = useState(false);
  let [isLoading, setIsLoading] = useState(false);
  let [userDetails, setUserDetails] = useState({});
  let navigate = useNavigate();

  let handleInputChange = (e) => {
    setUserDetails((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const toastOptions = {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };
  let handleSubmit = (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      console.log(userDetails);
    } catch (error) {
      setIsLoading(false);
      toast.error("An error occured", toastOptions);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-img bg-contain w-full min-h-screen flex flex-col justify-center items-center sm:pt-10">
        <div className="flex justify-center mt-6">
          <img
            src={logo}
            alt="logo"
            className="w-44 h-10 max-w-[215px] max-h-[74px]"
          />
        </div>

        <BaseCard>
          <h2 className="text-xl md:text-2xl text-black font-medium text-center">
            Welcome Back!
          </h2>
          <p className="text-sm md:text-base text-[#444444] text-center">
            Log into your account
          </p>
          <form
            className="py-[26px]"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div>
              <label htmlFor="email" className="text-[#9B9B9B]">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                className="w-full py-3 md:py-4 rounded-lg bg-[#9a9fbf20] px-3 md:px-4 focus:outline-none"
                onChange={(e) => {
                  handleInputChange(e);
                }}
                placeholder="myemail@example.com"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="password" className="text-[#9B9B9B]">
                Password
              </label>
              <div className="flex items-center w-full rounded-lg bg-[#9a9fbf20] pr-2">
                <input
                  required
                  type={pswdIsVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  className="bg-transparent rounded-lg px-3 md:px-4 py-3 md:py-4 w-11/12 focus:outline-none"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  placeholder="************"
                />
                <div className="">
                  {pswdIsVisible && (
                    <button
                      onClick={() => {
                        setPswdIsVisible(false);
                      }}
                    >
                      <img src={visible} alt="open eye icon" />
                    </button>
                  )}
                  {!pswdIsVisible && (
                    <button
                      onClick={() => {
                        setPswdIsVisible(true);
                      }}
                    >
                      <img src={hidden} alt="closed eye icon" />
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full flex mt-[25px]">
              <div className="hidden md:flex w-1/2">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
                <label
                  htmlFor="remember-me"
                  className="text-[#13113F] ml-3 text-xs font-medium"
                >
                  Remember me
                </label>
              </div>
              <div className="flex justify-end w-full md:w-1/2">
                <Link
                  to="/forgot-password"
                  className="text-[#13113F] ml-3 text-xs font-medium"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <button className="w-full flex justify-center items-center text-white bg-[#4834D4] py-3 md:py-4 mt-11 rounded-lg">
              {isLoading ? <BaseSpinner /> : "Login"}
            </button>
          </form>
        </BaseCard>
      </div>
    </>
  );
};

export default Login;
