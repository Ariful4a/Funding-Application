import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import logo from "../../../assets/logo.webp";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

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
    localStorage.setItem("darkMode", newDarkMode); // Save mode preference
    if (newDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "You have successfully logged out!",
          icon: "success",
          confirmButtonText: "Close",
        });
        navigate('/');
      })
      .catch(error => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Close",
        });
      });
  };

  return (
    <nav className={`p-4 fixed w-full z-10 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} shadow-md`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <img className="w-16" src={logo} alt="Logo" />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/" className="hover:text-red-500">Home</Link></li>
          <li><Link to="/camlayout/campaigns" className="hover:text-red-500">Campaigns</Link></li>
          <li><Link to="/camlayout/addCampaign" className="hover:text-red-500">Add New Campaign</Link></li>
          <li><Link to="/camlayout/mycampaigns" className="hover:text-red-500">My Campaigns</Link></li>
          <li><Link to="/camlayout/myDonation" className="hover:text-red-500">My Donations</Link></li>
        </ul>

        {/* Dark Mode Toggle & Auth Buttons */}
        <div className="flex items-center gap-4">
          <button onClick={handleDarkModeToggle} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Login & Sign Up Buttons */}
          {user ? (
            <div className="relative flex items-center gap-2">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  className="w-8 h-8 rounded-full cursor-pointer"
                  alt="User"
                  title={user.displayName || "User"} 
                />
              ) : (
                <FaUserCircle size={32} className="text-gray-700 cursor-pointer" title={user.displayName || "User"} />
              )}
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/login" className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition">
                Login
              </Link>
              <Link to="/signup" className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
