import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import logo from '../../../assets/logo.webp';


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check if the user has a saved theme preference
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  const handleDarkModeToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode); 
    if (newDarkMode) {
      document.body.classList.add("dark"); 
    } else {
      document.body.classList.remove("dark"); 
    }
  };

  return (
    <nav className={`p-4 fixed w-full z-10 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} shadow-md`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold"><img className="w-16" src={logo} alt="" /></Link>
        <ul className="hidden md:flex gap-6">
          <li><Link to="/" className="hover:text-red-500">Home</Link></li>
          <li><Link to="/camlayout/campaigns" className="hover:text-red-500">Campaigns</Link></li>
          <Link to="/camlayout/addCampaign" className="hover:text-red-500">Add New Campaign</Link>
        </ul>

        <button onClick={handleDarkModeToggle} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
