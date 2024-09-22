import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

interface DecodedToken {
  id: string; 
}
export const getDataFromToken = (request: NextRequest): string | undefined => {
  try {
    const token = request.cookies.get('token')?.value || '';
    const decodedToken = jwt.verify(token, "3435345") as DecodedToken; // Explicitly cast the type
    return decodedToken.id;
  } catch (error) {
    console.error(error);
  }
};
