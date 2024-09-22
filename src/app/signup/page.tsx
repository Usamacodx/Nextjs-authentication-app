"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";




export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log(response);
            console.log("Signup success", response.data);
            router.push("/login");
            
        } catch (error:any) {
            console.log("Signup failed", error.message);
            
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 py-6">
          {/* Signup Form Container */}
          <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md">
            
            {/* Signup Header */}
            <h1 className="text-white text-3xl font-bold text-center mb-6">
              {loading ? "Processing..." : "Signup"}
            </h1>
      
            <hr className="border-gray-700 mb-6" />
      
            {/* Username Field */}
            <div className="mb-6">
              <label htmlFor="username" className="block text-white mb-2">
                Username
              </label>
              <input
                className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Enter username"
              />
            </div>
      
            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-white mb-2">
                Email
              </label>
              <input
                className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Enter email"
              />
            </div>
      
            {/* Password Field */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-white mb-2">
                Password
              </label>
              <input
                className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Enter password"
              />
            </div>
      
            {/* Signup Button */}
            <div className="mb-4">
              <button
                onClick={onSignup}
                className={`w-full p-3 rounded text-white font-bold ${
                  buttonDisabled ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-700"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                disabled={buttonDisabled}
              >
                {buttonDisabled ? "No Signup" : "Signup"}
              </button>
            </div>
      
            {/* Link to Login Page */}
            <div className="text-center">
              <Link legacyBehavior href="/login">
                <a  className="text-blue-400 hover:text-blue-500">Already have an account? Login</a>
              </Link>
            </div>
          </div>
        </div>
      );
    }