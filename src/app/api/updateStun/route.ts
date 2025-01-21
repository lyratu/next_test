"use server";
import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  const res = await request.json();

  const sql = neon(process.env.DATABASE_URL);
  const data = await sql`UPDATE list SET port = ${res.port} WHERE id = 1`;
  return Response.json({ state: "ok",port:res.port });
}
