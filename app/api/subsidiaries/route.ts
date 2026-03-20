import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch("https://app.valcoregpo.com/api/subsidiaries", {
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      return NextResponse.json([], { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Failed to fetch subsidiaries:", error)
    return NextResponse.json([], { status: 500 })
  }
}
