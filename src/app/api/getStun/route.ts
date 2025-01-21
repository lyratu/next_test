"use server";
import { neon } from "@neondatabase/serverless";

export async function GET(request: Request) {
  const sql = neon(process.env.DATABASE_URL);
  const data = await sql`select * from list`;
  return Response.json({
    port:data[0].port
  });
}
