import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate , useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../MainLayout/Headers/Navbar";

const Login = () => {
    const { login, googleSignIn, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const location = useLocation()

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        login(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                Swal.fire({
                    title: "Success!",
                    text: "You have successfully logged in!",
                    icon: "success",
                    confirmButtonText: "Close",
                });
                setUser(user);
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "You have successfully logged in!",
                    icon: "success",
                    confirmButtonText: "Close",
                });
                navigate("/");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center px-4 lg:px-0">
                <div className="max-w-md w-full mt-32 mb-10 bg-white rounded-2xl shadow-2xl p-8 space-y-4 transform hover:scale-105 transition duration-300">
                    <h2 className="text-3xl font-bold text-center text-indigo-700">Login</h2>
                    <form className="space-y-4 text-black" onSubmit={handleLogin}>
                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full p-3 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Your Password</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full p-3 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300"
                                required
                            />
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-indigo-600 text-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                        >
                            Login
                        </button>
                    </form>

                    {error && <p className="text-red-500 text-center mt-2">{error}</p>}

                    <p className="text-center text-black">Or</p>

                    {/* Google Sign In Button */}
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full py-3 bg-red-500 text-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                    >
                        Sign in with Google
                    </button>

                    <p className="text-center mt-2 text-black">
                        Don't have an account?{" "}
                        <Link className="text-red-600 font-semibold underline" to={"/signup"}>
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
