import { NextResponse, NextRequest } from "next/server";
import { Order } from "@/types/Product";

export async function POST(req: NextRequest) {
  const body: Order[] = await req.json();

  console.log(body);

  return NextResponse.json({ message: "Hello Arwin" });
}
