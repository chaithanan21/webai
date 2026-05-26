import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    status: "ok",
    service: "webai",
    timestamp: new Date().toISOString(),
  });
}
