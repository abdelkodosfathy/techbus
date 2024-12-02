import React from "react";
import logo from "./../../Ast/Frame 37861.png";
import { useNavigate } from "react-router-dom";

export function Congratulations() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container py-5 mt-5">
        <div className="row py-5">
          <div className="col-md-8 mt-5 py-5 w-50 m-auto ">
            <img className="  m-auto d-block" src={logo} alt="" />
            <h2 className="text-center py-2 main-color">Congratulations !</h2>
            <h6 className="opacity-75 text-center">
              Congratulations your Password have been created
            </h6>
            <button onClick={() => navigate('/')} className="p-2 mt-4 bg-button w-75 d-block m-auto text-white  ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
