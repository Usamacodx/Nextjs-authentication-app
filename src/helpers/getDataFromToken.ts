import { NextRequest,NextResponse } from "next/server";
import jwt from  'jsonwebtoken';

export const getDataFromToken=(request: NextRequest)=>{
    try {
        const token=request.cookies.get('token')?.value ||  '';
        const decodedToken: any=jwt.verify(token,"3435345");
        return decodedToken.id;
    } catch (error) {
        console.error(error);
        
    }
   




}


