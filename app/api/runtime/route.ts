import { NextResponse } from "next/server";
import { runtimeManifest } from "../../../runtime/process-event";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    ...runtimeManifest,
    status: "ready",
    boundary: {
      auto: ["read existing facts", "build core mutations", "create low-risk actions", "audit"],
      humanApproval: ["selection", "money movement", "sensitive data", "official submission", "rights restriction"],
    },
  });
}
