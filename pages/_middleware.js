import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";



export async function middleware(req) {
// Token will exist if user is logged on
    const token = await getToken({ req , secret: process.env.JWT_SECRET });

    const { pathname } = req.nextUrl;
    console.log(pathname);
// Allow the request if the following is true

//    1> If token exists, it is valid
if(pathname.includes('/api/auth') || token) {
  return (
      NextResponse.next()
      )
}



if(!token && pathname !== '/login') {
  return NextResponse.redirect('/login')
}

  }