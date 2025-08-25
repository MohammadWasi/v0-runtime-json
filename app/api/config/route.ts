import { getServerConfig } from "@/lib/config"
import { NextResponse } from "next/server"

// Alternative approach: API endpoint to serve config
export async function GET() {
  const config = getServerConfig()

  return NextResponse.json(config)
}
