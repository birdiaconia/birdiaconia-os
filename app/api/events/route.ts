import { NextResponse } from "next/server";
import type {
  BirdiaconiaEvent,
  BirdiaconiaEventType,
  EventSource,
} from "../../../core/types";
import { processEvent } from "../../../runtime/process-event";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const supportedEvents = new Set<BirdiaconiaEventType>([
  "PROJECT_APPLICATION_SUBMITTED",
]);

const supportedSources = new Set<EventSource>([
  "site",
  "toss",
  "google",
  "operator",
  "system",
]);

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const type = body.type;
    const source = body.source ?? "site";
    const payload = body.payload;

    if (typeof type !== "string" || !supportedEvents.has(type as BirdiaconiaEventType)) {
      return NextResponse.json(
        { error: "unsupported_event", supported: [...supportedEvents] },
        { status: 400 },
      );
    }

    if (typeof source !== "string" || !supportedSources.has(source as EventSource)) {
      return NextResponse.json(
        { error: "unsupported_source", supported: [...supportedSources] },
        { status: 400 },
      );
    }

    if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
      return NextResponse.json({ error: "payload_must_be_object" }, { status: 400 });
    }

    const event: BirdiaconiaEvent = {
      id:
        typeof body.id === "string" && body.id.trim()
          ? body.id.trim()
          : `evt_${crypto.randomUUID()}`,
      type: type as BirdiaconiaEventType,
      occurredAt:
        typeof body.occurredAt === "string" && body.occurredAt.trim()
          ? body.occurredAt
          : new Date().toISOString(),
      source: source as EventSource,
      payload: payload as Record<string, unknown>,
    };

    return NextResponse.json(processEvent(event));
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown_error";
    return NextResponse.json({ error: "event_processing_failed", message }, { status: 400 });
  }
}
