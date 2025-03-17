
import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";

import backgroundAnimation from "../../assets/Animat3.json"; 
import loadingAnimation from "../../assets/Animation1.json"; 
import topLeftAnimation from "../../assets/Anima2.json"; 
import topRightAnimation from "../../assets/Animation1.json"; 

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(backgroundAnimation, loadingAnimation, topLeftAnimation, topRightAnimation);


  if (loading) {
    return (
      <div className="relative min-h-screen flex flex-col justify-center items-center bg-gray-900 overflow-hidden">
    
        <Lottie animationData={backgroundAnimation} className="absolute inset-0 w-full h-full object-cover opacity-30" />

        <Lottie animationData={topLeftAnimation} className="absolute top-5 left-5 w-24 h-24 opacity-80" />

  
        <Lottie animationData={topRightAnimation} className="absolute top-5 right-5 w-24 h-24 opacity-80" />

        <Lottie animationData={loadingAnimation} className="w-32 h-32" />

        <p className="mt-4 text-lg text-white font-semibold">Loading...</p>

        <p className="mt-2 text-sm text-gray-300">
          Developed by <span className="text-blue-400 font-bold">Ariful Islam</span>
        </p>
      </div>
    );
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"} />;
};

export default PrivateRoutes;
