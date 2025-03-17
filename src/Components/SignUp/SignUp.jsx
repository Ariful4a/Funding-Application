import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../MainLayout/Headers/Navbar";

const SignUp = () => {
    const { createUser, updateUserProfile, googleSignIn , logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();
        setError(""); 
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photoURL.value;

        // Password Validation
        if (password.length < 6) {
            return setError("Password must be at least 6 characters long");
        }

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regex.test(password)) {
            return setError("Password must include uppercase, lowercase, number, and special character");
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                return updateUserProfile({ displayName: name, photoURL: photoURL });
            })
            .then(() => {
                logout();
            })
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "You have successfully signed up!",
                    icon: "success",
                    confirmButtonText: "Cool",
                });
                navigate('/login'); 
            })
            .catch(error => {
                setError(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: "Success!",
                    text: "You have successfully signed up!",
                    icon: "success",
                    confirmButtonText: "Cool",
                });
                navigate('/');
            })
            .catch(error => {
                setError(error.message);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center">
                <div className="max-w-md w-full mt-32 bg-white rounded-2xl shadow-2xl p-6 mb-10 space-y-4 transform hover:scale-105 transition duration-300">
                    <h2 className="text-3xl font-bold text-center text-indigo-700">Sign Up</h2>
                    <form className="space-y-2 h-[400px] text-black" onSubmit={handleSignUp}>
                        {/* Photo URL */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Photo URL</label>
                            <input
                                type="text"
                                name="photoURL"
                                className="w-full p-2 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300"
                                required
                            />
                        </div>
    
                        {/* Name */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full p-2 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300"
                                required
                            />
                        </div>
    
                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full p-2 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300"
                                required
                            />
                        </div>
    
                        {/* Password */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Your Password</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full p-2 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300"
                                required
                            />
                        </div>
    
                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            className="w-full mt-2 py-3 bg-indigo-600 text-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                        >
                            Sign Up
                        </button>
                    </form>
    
                    {/* Error Message */}
                    {error && <p className="text-red-500 mt-2">{error}</p>}
    
                    <p className="text-center text-black">Or</p>
                    {/* Google Sign In Button */}
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full py-3 bg-red-500 text-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                    >
                        Sign in with Google
                    </button>
    
                    <p className="text-center text-black">
                        Already Have an Account?{" "}
                        <Link className="text-red-600 font-semibold underline" to={"/login"}>
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
