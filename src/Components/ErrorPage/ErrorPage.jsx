import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import * as THREE from "three";

// 🎨 Random Color Generator
const getRandomColor = () => {
  const colors = ["#facc15", "#f87171", "#60a5fa", "#34d399", "#a78bfa"];
  return colors[Math.floor(Math.random() * colors.length)];
};

// 🎾 Multiple Moving Balls
const Particle = ({ mouse }) => {
  const ref = useRef();
  const [target, setTarget] = useState(new THREE.Vector3(0, 0, 0));
  const color = getRandomColor();

  useFrame(() => {
    ref.current.position.lerp(target, 0.1); // Smooth movement
  });

  useEffect(() => {
    const updatePosition = (e) => {
      setTarget(
        new THREE.Vector3(
          (e.clientX / window.innerWidth) * 10 - 5 + Math.random() * 2 - 1,
          -(e.clientY / window.innerHeight) * 6 + 3 + Math.random() * 2 - 1,
          Math.random() * 2 - 1
        )
      );
    };
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} roughness={0.3} metalness={0.5} />
    </mesh>
  );
};

const ErrorPage = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-pink-900 flex justify-center items-center relative overflow-hidden">
      {/* Three.js Background */}
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        {Array.from({ length: 30 }).map((_, index) => (
          <Particle key={index} mouse={mouse} />
        ))}
      </Canvas>

      {/* Error Card */}
      <motion.div
        className="absolute text-center bg-opacity-60 bg-gray-800 p-12 rounded-3xl shadow-2xl backdrop-blur-lg border border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-9xl font-bold text-yellow-400 drop-shadow-lg">404</h1>
        <p className="text-2xl text-gray-300 mt-2">Oops! Page not found.</p>
        <motion.a
          href="/"
          className="mt-4 inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg text-lg transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Go Home
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
