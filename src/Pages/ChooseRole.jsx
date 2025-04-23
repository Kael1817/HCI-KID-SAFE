import React from "react";
import { Link, useNavigate } from "react-router-dom";
import background from "../assets/background 1.png";
import logo from "../assets/school_logo.png";

function ChooseRole() {
  const navigate = useNavigate();

  const parent = () => {
    navigate("/parent-registration");
  };
  const teacher = () => {
    navigate("/teacher-registration");
  }

  return (
    <div
      className="login-page relative flex justify-between py-16 px-25 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      <div className="relative z-10 flex justify-between w-full">
        <div className="left-side">
          <div className="left-content flex items-center mb-25">
            <img src={logo} alt="logo" className="w-[80px] h-[80px]" />
            <p className="text-white text-xl font-bold">
              Rosa L. Susano Novaliches Elementary School
            </p>
          </div>
          <h1 className="text-7xl text-white font-headings">WELCOME BACK!</h1>
          <p className="text-white text-2xl">Good to see you again.</p>
        </div>

        <div className="login-panel w-[450px] h-[581px] p-9 bg-[rgba(144,159,170,0.8)] rounded-4xl">
          <div className="login-content flex flex-col items-center h-full">
            <h1 className="text-5xl text-primary font-headings mb-25">CHOOSE ROLE</h1>
            <button
              className="bg-white w-full h-25 rounded-xl cursor-pointer text-xl font-bold mb-5"
              onClick={parent}
            >
              Parent/Guardian
            </button>
            <button className="bg-white w-full h-25 rounded-xl cursor-pointer text-xl font-bold mb-10" onClick={teacher}>
              Teacher
            </button>

            <Link to="/sign-up" className="text-white font-bold">
              Back to Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseRole;
