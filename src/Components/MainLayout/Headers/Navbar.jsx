import { Link, NavLink } from "react-router-dom"; 
import { Sun, Moon, Menu, X } from "lucide-react"; 
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
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [scrolling, setScrolling] = useState(false);  

  // Check saved theme preference  
  useEffect(() => { 
    const savedMode = localStorage.getItem("darkMode") === "true"; 
    setDarkMode(savedMode); 
    if (savedMode) { 
      document.body.classList.add("dark"); 
    } else { 
      document.body.classList.remove("dark"); 
    } 
  }, []);  

  // Sticky Navbar on Scroll  
  useEffect(() => { 
    const handleScroll = () => { 
      setScrolling(window.scrollY > 50); 
    }; 
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll); 
  }, []);  

  const handleDarkModeToggle = () => { 
    const newDarkMode = !darkMode; 
    setDarkMode(newDarkMode); 
    localStorage.setItem("darkMode", newDarkMode); 
    document.body.classList.toggle("dark", newDarkMode); 
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
      navigate("/");       
    })       
    .catch((error) => {         
      Swal.fire({           
        title: "Error!",           
        text: error.message,           
        icon: "error",           
        confirmButtonText: "Close",         
      });       
    }); 
  };  

  return (     
    <nav className={`fixed w-full z-10 transition-all duration-300 ${ 
        scrolling ? "bg-gray-900 text-white shadow-lg" : "bg-blue-500 text-black" 
      }`}     
    >       
      <div className="container mx-auto flex justify-between items-center p-4">         
        {/* Logo */}         
        <Link to="/" className="text-2xl font-bold">           
          <img className="w-16" src={logo} alt="Logo" />         
        </Link>          

        {/* Desktop Navigation */}         
        <ul className="hidden md:flex gap-6">           
          <li>             
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "bg-red-500 p-2 rounded-xl font-bold" : "hover:text-red-500 transition"
              }
            >
              Home
            </NavLink>           
          </li>           
          <li>             
            <NavLink 
              to="/camlayout/campaigns" 
              className={({ isActive }) => 
                isActive ? "bg-red-500 p-2 rounded-xl font-bold" : "hover:text-red-500 transition"
              }
            >
              Campaigns
            </NavLink>           
          </li>           
          <li>             
            <NavLink 
              to="/camlayout/addCampaign" 
              className={({ isActive }) => 
                isActive ? "bg-red-500 p-2 rounded-xl font-bold" : "hover:text-red-500 transition"
              }
            >
              Add New Campaign
            </NavLink>           
          </li>           
          <li>             
            <NavLink 
              to="/camlayout/mycampaigns" 
              className={({ isActive }) => 
                isActive ? "bg-red-500 p-2 rounded-xl font-bold" : "hover:text-red-500 transition"
              }
            >
              My Campaigns
            </NavLink>           
          </li>           
          <li>             
            <NavLink 
              to="/camlayout/myDonation" 
              className={({ isActive }) => 
                isActive ? "bg-red-500 p-2 rounded-xl font-bold" : "hover:text-red-500 transition"
              }
            >
              My Donations
            </NavLink>           
          </li>         
        </ul>          
       
        <div className="flex items-center gap-4">           
          {/* Dark Mode Button */}           
          <button onClick={handleDarkModeToggle} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">             
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}           
          </button>            

          {/* User Authentication */}           
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
            <div className="hidden md:flex gap-2">               
              <Link to="/login" className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition">                 
                Login               
              </Link>               
              <Link to="/signup" className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">                 
                Sign Up               
              </Link>             
            </div>           
          )}            

          {/* Mobile Menu Button */}           
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-white">             
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}           
          </button>         
        </div>       
      </div>        

      {/* Mobile Menu */}       
      {isMenuOpen && (         
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 text-white shadow-lg py-4">           
          <ul className="flex flex-col gap-4 items-center">             
            <li>               
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "bg-red-500 p-2 rounded-xl font-bold" : "hover:text-red-500 transition"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>             
            </li>             
            <li>               
              <NavLink 
                to="/camlayout/campaigns" 
                className={({ isActive }) => 
                  isActive ? "bg-red-500 p-2 rounded-xl font-bold" : "hover:text-red-500 transition"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Campaigns
              </NavLink>             
            </li>             
            <li>               
              <NavLink 
                to="/camlayout/addCampaign" 
                className={({ isActive }) => 
                  isActive ? "bg-red-500 p-2 rounded-xl font-bold" : "hover:text-red-500 transition"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Add New Campaign
              </NavLink>             
            </li>             
            <li>               
              <NavLink 
                to="/camlayout/mycampaigns" 
                className={({ isActive }) => 
                  isActive ? "bg-red-500 p-2 rounded-xl font-bold" : "hover:text-red-500 transition"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                My Campaigns
              </NavLink>             
            </li>             
            <li>               
              <NavLink 
                to="/camlayout/myDonation" 
                className={({ isActive }) => 
                  isActive ? "bg-red-500 p-2 rounded-xl font-bold" : "hover:text-red-500 transition"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                My Donations
              </NavLink>             
            </li>             
            {user ? (               
              <button                 
                onClick={handleLogout}                 
                className="py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition w-40 text-center"               
              >                 
                Logout               
              </button>             
            ) : (               
              <div className="flex flex-col gap-2 w-full text-center">                 
                <Link to="/login" className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition">                   
                  Login                 
                </Link>                 
                <Link to="/signup" className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">                   
                  Sign Up                 
                </Link>               
              </div>             
            )}           
          </ul>         
        </div>       
      )}     
    </nav>   
  ); 
};  

export default Navbar;
