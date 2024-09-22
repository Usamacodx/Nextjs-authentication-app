"use client";
import axios from "axios";
import Link from "next/link";
import React, {useState} from "react";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";


export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error) {
            console.log(error);
           
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data);
        setData(res.data.data._id)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-6">
          {/* Profile Container */}
          <div className="bg-white shadow-md rounded-lg w-full max-w-lg p-6">
            
            {/* Profile Header */}
            <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">Profile</h1>
            <hr className="my-4" />
            
            {/* Profile Description */}
            <p className="text-center text-lg text-gray-600 mb-6">Welcome to your profile page!</p>
            
            {/* Display User Data */}
            <div className="text-center mb-6">
              <h2 className={`inline-block p-2 rounded-md text-white ${data === 'nothing' ? 'bg-red-500' : 'bg-green-500'}`}>
                {data === 'nothing' ? "No profile data" : (
                  <Link legacyBehavior href={`/profile/${data}`}>
                    <a className="underline hover:text-green-200">{data}</a>
                  </Link>
                )}
              </h2>
            </div>
            
            <hr className="my-4" />
            
            {/* Buttons */}
            <div className="flex justify-between space-x-4">
              {/* Logout Button */}
              <button
                onClick={logout}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-1/2"
              >
                Logout
              </button>
      
              {/* Get User Details Button */}
              <button
                onClick={getUserDetails}
                className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-1/2"
              >
                Get User Details
              </button>
            </div>
          </div>
        </div>
      )
    }