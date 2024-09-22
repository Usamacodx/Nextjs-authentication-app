"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import  { useRouter } from "next/navigation";




export default function Login() {
  const router=useRouter()
  const [user, setUser] = useState({
   
    password: "",
    email: "",
  });
  const[buttonDisabled,setButtonDisabled]=React.useState(false);
const onLogin=async()=>{
  try {
    const response = await axios.post("/api/users/login", user);
    console.log(response);
    console.log("login successful",response.data)
    router.push("/profile")

    
  } catch (error) 
  {
    console.log("login failed",error);
 
    
  }


}
useEffect(()=>{
if(user.email.length>0 &&  user.password.length>0){
  setButtonDisabled(false)
}
else
{
  setButtonDisabled(true)
}

},[user,buttonDisabled]);
return (
  <div className="flex justify-center items-center h-screen bg-gray-900">
    {/* Login Form Container */}
    <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md">
      
      {/* Login Header */}
      <h1 className="text-white text-3xl font-bold text-center mb-6">Login</h1>
      
      {/* Email Field */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-white mb-2">
          Email
        </label>
        <input
          className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          id="email"
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
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter password"
        />
      </div>

      {/* Login Button */}
      <div className="mb-4">
        <button
          onClick={onLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
      </div>

      {/* Signup Link */}
      <div className="text-center">
  <p className="text-white">
    Don&apos;t have an account?{" "}
    <a href="/signup" className="text-blue-400 hover:text-blue-500">
      Sign up
    </a>
  </p>
</div>

     
    </div>
  </div>
)
}
