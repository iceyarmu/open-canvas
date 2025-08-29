import { NextRequest, NextResponse } from "next/server";

export async function POST(_req: NextRequest) {
  // Audio transcription is disabled in this version
  return NextResponse.json(
    { 
      error: "Audio transcription is not available in this version",
      text: "[Audio transcription is disabled]"
    },
    { status: 200 }
  );
}
