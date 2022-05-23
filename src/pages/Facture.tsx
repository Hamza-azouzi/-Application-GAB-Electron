/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { NineDigits } from "../components";

export const Facture = () => {
  const [enterNum, setEnterNum] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const Options = [
    {
      name: "Amendis"
    },
    {
      name: "Radees",
    },
    {
      name: "Lydec",
    },
    {
      name: "ONEE",
    },
  ];

  return (
    <div className="flex flex-col w-screen gap-5 bg-gradient-to-b from-white via-white  p-5 h-screen  justify-center items-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cih-bank.png/800px-Cih-bank.png"
        alt=""
        width={300}
        height={100}
      />
      <h1 className="text-center text-4xl font-extrabold text-omniya ">
          Eau et Electricité
      </h1>
      <div className="flex w-full h-full flex-wrap justify-between items-center">
        {!enterNum &&
          Options.map((_, index) => (
            <button
              key={index}
              onClick={() => setEnterNum(true)}
              className="w-5/12  p-5 rounded-xl shadow-md border-4 border-cih-dark border-solid text-omniya text-2xl font-extrabold bg-cih-gold"
            >
              {_.name}
            </button>
          ))}
      </div>
      {enterNum && (
        <div className="w-1/2 flex flex-col items-center">
          <p className="text-center text-4xl font-extrabold text-omniya ">
            Entrer le numéro de contrat de  facture
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
            actionOk={() => navigate("/thankyou")}
            setCardNumber={setPhoneNumber}
          />
        </div>
      )}
      <div className="flex w-full h-full flex-wrap justify-between items-center">
        <button
          onClick={() => navigate("/Menu")}
          className="w-5/12  p-5 rounded-xl shadow-md border-4 border-cih border-solid text-gray-900 text-2xl font-extrabold bg-cih"
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
