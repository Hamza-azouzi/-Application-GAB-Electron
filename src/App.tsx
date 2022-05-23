/* eslint-disable @typescript-eslint/no-unused-vars */
import { Completed } from "./pages/Completed";
import { Routes, Route, useLocation } from "react-router-dom";
import { Menu } from "./pages/Menu";
import { Retrait } from "./pages/Retrait";
import { Solde } from "./pages/Solde";
import { Ticket } from "./pages/Ticket";
import { Recharge } from "./pages/Recharge";
import { Facture } from "./pages/Facture";
import { Landing } from "./pages/Landing";
import { Vignette } from "./pages/Vignette";
import { useEffect, useState } from "react";

const App = () => {
  const { pathname } = useLocation();
  const [offline, setOffline] = useState(true);

  const path = pathname.replace("/index", "") || "/";



  


  return (
    <div className={!offline ? `grayscale` : ""}>
      <Routes location={path}>
        <Route path="/" element={<Landing />} />
        <Route path="/Retrait" element={<Retrait />} />
        <Route path="/Solde" element={<Solde />} />
        <Route path="/Recharge" element={<Recharge />} />
        <Route path="/Ticket" element={<Ticket />} />
        <Route path="/Facture" element={<Facture />} />
        <Route path="/Vignette" element={<Vignette />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Completed" element={<Completed />} />
      </Routes>
      {!offline && (
        <div className="absolute top-0 left-0 w-screen h-screen"></div>
      )}
     
    </div>
  );
};

export default App;
