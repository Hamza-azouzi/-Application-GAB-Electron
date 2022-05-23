import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingDiv } from "../components";
import axios from "axios";

export const Solde = () => {
  const navigate = useNavigate();
  const [solde, setSolde] = useState(0);

  useEffect(() => {
    //set solde from localstorage
    const user = JSON.parse(localStorage.getItem("user"));

    axios
      .get(`http://localhost:1337/api/users/${user._id}/balance`)
      .then((res) => {
        setSolde(res.data.balance);
        localStorage.getItem("token");
        
      });
   
  }, []);

  return (
    <div className="flex flex-col w-screen gap-5 bg-gradient-to-b from-white via-white  p-5 h-screen  justify-center items-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cih-bank.png/800px-Cih-bank.png"
        alt=""
        width={300}
        height={100}
      />
      <h1 className="text-center text-2xl font-extrabold text-omniya ">
        Votre Solde est de :
      </h1>

      <LoadingDiv className="text-center  text-8xl font-extrabold text-cih-dark ">
        {solde} &nbsp; MAD
      </LoadingDiv>

      <div className="flex w-full h-full flex-wrap justify-between items-center">
        <button
          onClick={() => navigate("/Menu")}
          className="w-5/12  p-5 rounded-xl shadow-md border-4 border-cih-dark border-solid text-gray-900 text-2xl font-extrabold bg-cih"
        >
          Menu Principale
        </button>
        <button
          onClick={() => navigate("/")}
          className="w-5/12 capitalize  p-5 rounded-xl shadow-md border-4 border-cih-dark border-solid text-gray-900 text-2xl font-extrabold bg-cih"
        >
          éjecter
        </button>
      </div>
    </div>
  );
};
