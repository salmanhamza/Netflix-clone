import React from "react";
import netflix from "../assets/images/netflix.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signin-container md:px-0 px-[20px]">
      <div className="overlay">
        {/* navbar */}
        <header className={`md:px-44 px-4  fixed top-0 left-0 w-full`}>
          <nav className="flex justify-between items-center ">
            <img className="md:h-[100px] h-[60px]" src={netflix} alt="logo" />

            <Link
              className="bg-primary-color text-white rounded-md p-5 font-semibold text-[14px] h-[32px] flex justify-center items-center"
              to={"/login"}
            >
              Sign In
            </Link>
          </nav>
        </header>

        {/* middle text */}
        <div className="flex flex-col justify-center items-center min-h-screen md:px-0 px-[10px]">
          <div className="text-[36px] md:text-[48px] text-center font-semibold md:px-0  md:font-black text-white">
            Unlimited movies, TV shows, and more
          </div>
          <div className="text-center md:text-[24px] text-[18px] md:leading-[56px] leading-[32px] text-white">
            <span>Watch anywhere. Cancel anytime.</span> <br />
            <span>
              Ready to watch? Enter your email to create or restart your
              membership.
            </span>
          </div>

          {/* get started input */}
          <div className="flex md:flex-row flex-col items-center">
            <div>
              <input
                className="p-4 mt-5 w-[400px] bg-transparent border rounded-md border-primary-color text-white placeholder-white"
                placeholder="Your Email"
                type="text"
              />
            </div>

            <button className="px-10 mt-5 h-[56px] ml-3 w-[200px]  rounded-md bg-primary-color  text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
