/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NineDigits } from "../components";
import axios from "axios";

export const Recharge = () => {
  const [enterNum, setEnterNum] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [choosePrice, setChoosePrice] = useState(false);
  const [chooseOperator, setChooseOperator] = useState(true);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
 
  const Options = [
    {
      name: "IAM",
    },
    {
      name: "Orange",
    },
    {
      name: "INWI",
    },
  ];

  const OptionsNumbers = [
    {
      name: "10",
      path: "/Retrait",
    },
    {
      name: "20",
      path: "/Retrait",
    },
    {
      name: "30",
      path: "/Retrait",
    },
    {
      name: "50",
      path: "/Retrait",
    },
    {
      name: "100",
      path: "/Retrait",
    },
    {
      name: "200",
      path: "/Retrait",
    },
  ];


  const handleNewBalance = async (amount: number) => {
    const user = JSON.parse(localStorage.getItem("user"));
    axios
      .post(`http://localhost:1337/api/users/${user._id}/withdrawal`, { amount })
      .then((res) => {
        console.log(res);
        localStorage.getItem("token");
      });
   
  }
    


  

  
  


  return (
    <div className="flex flex-col w-screen gap-5 bg-gradient-to-b from-white via-white  p-5 h-screen  justify-center items-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cih-bank.png/800px-Cih-bank.png"
        alt=""
        width={300}
        height={100}
      />
      <h1 className="text-center text-4xl font-extrabold text-omniya ">
        Recharge Mobile
      </h1>
      <div className="flex w-full h-full flex-wrap justify-between items-center">
        {chooseOperator &&
          Options.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setChooseOperator(false);
                setChoosePrice(true);
                
              }}
              className="w-5/12  p-5 rounded-xl shadow-md border-4 border-cih-dark border-solid text-omniya text-2xl font-extrabold bg-cih-gold"
            >
              {_.name}
            </button>
          ))}
        {choosePrice &&
          OptionsNumbers.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setChoosePrice(false);

                setEnterNum(true);
                handleNewBalance(+_.name);
              }}
              className="w-5/12  p-5 rounded-xl shadow-md border-4 border-cih-dark border-solid text-omniya text-2xl font-extrabold bg-cih-gold"
            >
              {_.name}
            </button>
          ))}
      </div>
      {enterNum && (
        <div className="w-1/2 flex flex-col items-center">
          <p className="text-center text-4xl font-extrabold text-omniya ">
            Entrer votre numero
          </p>

          <input
            value={phoneNumber}
            type="text"
            autoFocus
            style={{
              letterSpacing: "6px",
            }}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full mb-6 h-10 mt-5 text-2xl font-bold border-2  border-omniya text-center rounded-lg focus:border-omniya"
          />
          <NineDigits
            actionOk={() => navigate("/Menu")}
            setCardNumber={setPhoneNumber}
          />
        </div>
      )}
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

}