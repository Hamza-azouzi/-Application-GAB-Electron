/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import {  useState } from "react";
import { LoadingDiv, NineDigits } from "../components/index";
import axios from "axios";

export const Landing = () => {
  // const [login, { data, loading, error }] = useGetUserMutation();
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("1234567890918179");
  const [cardCode, setCardCode] = useState("1234");

  const handleLogin = async () => {
    const user = {
      cardNumber: cardNumber,
      pin: cardCode,
    }
    // console.log(user);
    axios.post(`http://localhost:1337/api/sessions`, user)
      .then((res) => {
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("user", JSON.stringify(res.data.user));
          navigate("/Menu");
        
      });
  
    
  };

 

  

  return (
    <LoadingDiv  className="bg-white w-full flex h-screen">
      <div className=" w-1/2 h-full flex items-center flex-col bg-cih-gold">
        <div className="w-full h-full px-36 flex items-center flex-col justify-center">
          <p className="text-center text-3xl font-extrabold text-gray-200 ">
            Entrer votre carte
          </p>

          <input
            value={cardNumber}
            type="text"
            autoFocus
            style={{
              letterSpacing: "6px",
            }}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full mb-6 h-12 mt-5 text-2xl font-bold border-2  border-cih text-center rounded-lg focus:border-cih"
          />
          <p className="text-center text-4xl font-extrabold text-gray-200 ">
            Entrer votre Pin
          </p>

          <input
            value={cardCode}
            type="password"
            autoFocus
            max={4}
            style={{
              letterSpacing: "6px",
            }}
            onChange={(e) => {
              if (cardCode.length < 5) {
                setCardCode(e.target.value);
              }
            }}
            className="w-full mb-6 h-12 mt-5 text-2xl font-bold border-2  border-cih text-center rounded-lg focus:border-cih"
          />
          <NineDigits actionOk={handleLogin} setCardNumber={setCardCode} />
        </div>
      </div>
      <div className="w-1/2 h-full  flex items-center  bg-cover bg-center">
        <img className="w-full" src="https://www.code30.ma/assets/18/18.png" />
      </div>
    </LoadingDiv>
  );
};


