import { useNavigate } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/background 1.png";
import logo from "../assets/school_logo.png";
import Questionnaire from "../Components/Questionnaire";

function ResetPassword() {
  const navigate = useNavigate();

  const Submit = () => {
    const username = document.querySelector('input[placeholder="Username"]').value;
    const answer = document.getElementById("answer").value;

    if (username === "admin" && answer.toLowerCase() === "milo") {
      alert("Password successfully reset!");
      navigate("/");
    } else {
      alert("Invalid username or answer. Please try again.");
    }
  };

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
          <div className="login-content flex flex-col items-center gap-4 h-full justify-between">
            <h1 className="text-5xl text-primary font-headings">
              RESET PASSWORD
            </h1>
            <div className="flex flex-col gap-3 w-full">
              <input type="text" placeholder="Username" className="bg-white rounded-[10px] w-full h-11 p-2.5"/>
              <Questionnaire /> 
            <input
              type="text"
              placeholder="Answer"
              id="answer"
              className="bg-white rounded-[10px] w-full h-11 p-2.5 mb-20"
            />
            </div>
            
            <div className="flex flex-col gap-3 w-full items-center">
              <button
              onClick={Submit}
              className="bg-primary text-white font-bold w-full h-11 rounded-xl cursor-pointer text-xl"
            >
              Submit
            </button>
            <Link to="/" className="text-white font-bold mb-10">
              Back to Login
            </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
