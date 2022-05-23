/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NineDigits } from "../components";

export const Vignette = () => {
  const [enterNum, setEnterNum] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [matriculeNum, setMatriculeNum] = useState("");
  const [date, setDate] = useState("");
  const [matricule, setMatricule] = useState(false);
  const navigate = useNavigate();
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

  return (
    <div className="flex flex-col w-screen gap-5 bg-gradient-to-b from-white via-white  p-5 h-screen  justify-center items-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cih-bank.png/800px-Cih-bank.png"
        alt=""
        width={300}
        height={100}
      />
      <h1 className="text-center text-4xl -mb-2 font-extrabold text-omniya ">
         vignette de voiture
      </h1>

      {enterNum && (
        <div className="w-1/2 flex flex-col items-center">
          <p className="text-center text-xl font-extrabold text-omniya ">
            matricule du voiture
          </p>

          <input
            value={matriculeNum}
            type="text"
            autoFocus
            onFocus={() => setMatricule(true)}
            style={{
              letterSpacing: "6px",
            }}
            onChange={(e) => setMatriculeNum(e.target.value)}
            className="w-full mb-6 h-10 mt-5 text-2xl font-bold border-2  border-omniya text-center rounded-lg focus:border-omniya"
          />
          <p className="text-center  text-xl font-extrabold text-omniya ">
            saisir l'année de la vignette
          </p>

          <input
            value={date}
            type="text"
            onFocus={() => setMatricule(false)}
            style={{
              letterSpacing: "6px",
            }}
            onChange={(e) => setDate(e.target.value)}
            className="w-full mb-6 h-10 mt-5 text-2xl font-bold border-2  border-omniya text-center rounded-lg focus:border-omniya"
          />
          <NineDigits
            actionOk={() => navigate("/Completed")}
            setCardNumber={matricule ? setMatriculeNum : setDate}
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
};
