"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      const verifyUserEmail = async () => {
        try {
          await axios.post("/api/users/verifyemail", { token });
          setVerified(true);
        } catch (error) {
          setError(true);
          console.log(error);
        }
      };

      verifyUserEmail();
    }
  }, [token]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Verify Email</h1>
      
            <h2 className={`p-2 rounded-md mb-4 ${token ? 'bg-green-500 text-white' : 'bg-orange-500 text-black'}`}>
              {token ? `${token}` : "No token provided"}
            </h2>
      
            {verified && (
              <div>
                <h2 className="text-2xl font-semibold text-green-600 mb-4">Email Verified Successfully</h2>
                <Link href="/login">
                  <a className="inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md">
                    Go to Login
                  </a>
                </Link>
              </div>
            )}
      
            {error && (
              <div>
                <h2 className="text-2xl font-semibold bg-red-500 text-white p-2 rounded-md mb-4">Error: Email verification failed</h2>
              </div>
            )}
          </div>
        </div>
      )
    }      