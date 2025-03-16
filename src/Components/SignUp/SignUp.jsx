import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState({});

    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photoURL.value;

        // Password validation
        if (password.length < 6) {
            setError({ password: "Password must be at least 6 characters long" });
            return;
        }

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regex.test(password)) {
            setError({ password: "Password must include uppercase, lowercase, number, and special character" });
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserProfile({
                    displayName: name,
                    photoURL: photoURL
                }).then(() => {
                    Swal.fire({
                        title: "Success!",
                        text: "You have successfully signed up!",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                    navigate('/login');
                }).catch(error => {
                    setError({ message: error.message });
                });
            })
            .catch(error => {
                setError({ message: error.message });
            });
    };

    const handleGoogleSignIn = () => {
            googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate('/');
            })
            .catch(error => {
                setError({ message: error.message });
            });
    };

    return (
        <div className="h-screen bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 space-y-6 transform hover:scale-105 transition duration-300">
                <h2 className="text-4xl font-bold text-center text-indigo-700">Sign Up</h2>
                <form className="space-y-6" onSubmit={handleSignUp}>

                    {/* Photo URL */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Photo URL</label>
                        <input
                            type="text"
                            name="photoURL"
                            className="w-full p-3 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300"
                            required
                        />
                    </div>

                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full p-3 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300"
                            required
                        />
                    </div>

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

                    {/* Sign Up Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-indigo-600 text-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>

                {error && <p className="text-red-500 mt-2">{error.message}</p>}
                {error.password && <p className="text-red-500 mt-2">{error.password}</p>}

                <p className="text-center">Or</p>
                {/* Google Sign In Button */}
                <button
                    onClick={handleGoogleSignIn}
                    className="w-full py-3 bg-red-500 text-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                >
                    Sign in with Google
                </button>

                <p>
                    Already Have an Account?{" "}
                    <Link className="text-red-600" to={"/auth/login"}>
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
