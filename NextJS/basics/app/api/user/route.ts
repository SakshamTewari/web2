import { NextRequest } from 'next/server';

export function GET() {
  // database logic
  return Response.json({
    name: 'Saksham',
    email: 'sakshamtewari3@gmail.com',
  });
}

export async function POST(req: NextRequest) {
  // extract the body
  const body = await req.json();
  console.log(body);
  // store the body in the database

  return Response.json({
    message: 'You are logged in',
  });
}
