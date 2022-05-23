import React from "react";
import { useNavigate } from "react-router-dom";

export const Completed = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-screen gap-5 bg-gradient-to-b from-white via-white  p-5 h-screen  justify-center items-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cih-bank.png/800px-Cih-bank.png"
        alt=""
      />
      <h1 className="text-center mt-20 text-5xl font-extrabold text-omniya ">
        Merci d'utiliser notre service
      </h1>

      <div className="flex w-full h-full flex-wrap justify-between items-center">
        <button
          onClick={() => navigate("/Menu")}
          className="w-5/12  p-5 rounded-xl shadow-md border-4 border-cih-dark border-solid text-omniya text-2xl font-extrabold bg-cih-gold"
        >
          Menu Principale
        </button>
        <button
          onClick={() => navigate("/")}
          className="w-5/12 capitalize  p-5 rounded-xl shadow-md border-4 border-cih-dark border-solid text-omniya text-2xl font-extrabold bg-cih-gold"
        >
          éjecter
        </button>
      </div>
    </div>
  );
};
