import { NextRequest } from "next/server";
import jwt from  'jsonwebtoken';
interface DecodedToken {
    id: string; 
  }

export const getDataFromToken=(request: NextRequest)=>{
    try {
        const token=request.cookies.get('token')?.value ||  '';
        const decodedToken:any=jwt.verify(token,"3435345");
        return decodedToken.id;
    } catch (error) {
        console.error(error);
        
    }
   




}


