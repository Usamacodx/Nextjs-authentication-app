import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from  "jsonwebtoken";



connect();

export async function POST(request:NextRequest){
    try {
        const reqbody= await request.json();
        const{email,password}=reqbody;
        console.log(reqbody);
        //check if user exists
        const user=await User.findOne({email});
        if(!user){
            return new Response("User does not exist", {
                status: 404,
                });
                }
           const validpasswrod=await  bcryptjs.compare(password,user.password);
           if(!validpasswrod){
            return new Response("Invalid password", {
                status: 401,
                });
            }
            //create token data
            const tokenData={
                id: user._id,
                email: user.email,
                username:user.username

            }
            //create token
            const token= await jwt.sign(tokenData,"secretkey",{expiresIn:"1d"});

            const response=NextResponse.json({
                message: "login successfull",
                success:true



            })
         response.cookies.set("token",token,{httpOnly:true})

         return response;




    


        
    } catch (error) {
        return NextResponse.json({error:"error has been occured"}, {status: 500})

          
        }
        
    }

