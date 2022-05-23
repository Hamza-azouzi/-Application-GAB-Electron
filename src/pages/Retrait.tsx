/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingDiv } from "../components";
import axios, { AxiosRequestConfig } from "axios";

export const Retrait = () => {
  const [user, setUser] = useState(null);
  const [solde, setSolde] = useState(0);
  const navigate = useNavigate();
  const Options = [
    {
      name: "100",
      path: "/Retrait",
    },
    {
      name: "200",
      path: "/Retrait",
    },
    {
      name: "300",
      path: "/Retrait",
    },
    {
      name: "500",
      path: "/Retrait",
    },
    {
      name: "1000",
      path: "/Retrait",
    },
   
  ];


  const handleNewBalance = async (amount: number ) => {
    const user = JSON.parse(localStorage.getItem("user"));
     console.log(amount)
    axios
      .post(`http://localhost:1337/api/users/${user._id}/withdrawal`, { amount })
      .then((res) => {
        setSolde(res.data.balance);
        localStorage.getItem("token");
      });
   
  }
  //   console.log("New balance");
  //   const headers = new Headers();
  //   headers.append("Authorization", "Bearer " + localStorage.getItem("token"));
  //   const user = JSON.parse(localStorage.getItem("user"));
    
  // };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
    axios
      .get(`http://localhost:1337/api/users/${user._id}/balance`)
      .then((res) => {
        setSolde(res.data.balance);
        localStorage.getItem("token");
      });
    
    
  }, []);

  
  

  return (
    <LoadingDiv className="flex flex-col w-screen gap-5 bg-gradient-to-b from-white via-white  p-5 h-screen  justify-center items-center">
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
      <h1 className="text-center text-4xl font-extrabold text-omniya ">
        Menu Retrait
      </h1>

      <div className="flex w-full h-full  flex-wrap justify-between items-center">
        {Options.map((_, index) => (
          <button
            onClick={
              +_.name <= user?.balance ? () => handleNewBalance(+_.name) : null
            }
            key={index}
            style={{
              opacity: +_.name <= user?.balance ? 1 : 0.2,
            }}
            className="w-5/12  p-5 m-3 rounded-xl shadow-md border-4 border-cih-dark border-solid text-omniya text-2xl font-extrabold bg-cih-gold"
          >
            {_.name}
          </button>
        ))}
        <button
          onClick={() => navigate("/Menu")}
          style={{}}
          className="w-5/12  p-5 m-3 rounded-xl shadow-md border-4 border-cih-dark border-solid text-omniya text-2xl font-extrabold bg-cih-gold"
        >
          Autre
        </button>
        <button
          onClick={() => navigate("/Menu")}
          className="w-5/12  p-5 m-3 rounded-xl shadow-md border-4 border-cih-dark border-solid text-gray-900 text-2xl font-extrabold bg-cih"
        >
          Menu Principale
        </button>
        <button
          onClick={() => navigate("/")}
          className="w-5/12 capitalize  p-5 m-3 rounded-xl shadow-md border-4 border-cih-dark border-solid text-gray-900 text-2xl font-extrabold bg-cih"
        >
          éjecter
        </button>
      </div>
    </LoadingDiv>
  );
};


