/* eslint-disable @typescript-eslint/no-unused-vars */

import { useNavigate } from "react-router-dom";

export const Menu = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  
  const navigate = useNavigate();
  const pages = [
    {
      name: "Retrait",
      path: "/Retrait",
    },
    {
      name: "Mon Solde",
      path: "/Solde",
    },
    {
      name: "Recharge mobile",
      path: "/Recharge",
    },
    {
      name: "Payer Facture",
      path: "/Facture",
    },
    {
      name: "Payer vignette",
      path: "/Vignette",
    },
    {
      name: "transaction",
      path: "/Transaction",
    },
    {
      name: "Payer ticket",
      path: "/Ticket",
    },
    {
      name: "Retour",
      path: "/",
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
        Menu Principale
      </h1>
      <div className="flex w-full h-full flex-wrap justify-between items-center">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => navigate(_.path)}
            className="w-5/12  p-5 rounded-xl shadow-md border-4 border-cih-dark border-solid text-omniya text-2xl font-extrabold bg-cih-gold"
          >
            {_.name}
          </button>
        ))}
      </div>
    </div>
  );
};
