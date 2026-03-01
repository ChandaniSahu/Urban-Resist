import { NextResponse } from "next/server"
import { hazards } from "@/lib/data"
import { v4 as uuid } from "uuid"

export async function GET() {
  return NextResponse.json(hazards)
}

export async function POST(req: Request) {

  const body = await req.json()

  const newHazard = {
    id: uuid(),
    ...body,
    createdAt: new Date().toISOString()
  }

  hazards.push(newHazard)

  return NextResponse.json(newHazard)
}