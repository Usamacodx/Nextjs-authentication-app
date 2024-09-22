import { NextResponse } from "next/server";
import toast from "react-hot-toast";


//create a function to remove cookie
export async function GET(){
    try {
        const response=NextResponse.json({
            message: "Logout successfully",
            success :true


        });
        // expire the cookie suddenyl after hte logout
        response.cookies.set('token', '', {
            httpOnly: true,
            expires: new Date(0)})



      


        return response;

        
    } catch (error:any) {
        console.error(error.message);
        toast.error(error.message);
        
        
    }
}
