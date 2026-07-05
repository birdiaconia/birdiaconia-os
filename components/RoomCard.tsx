import type { ReactNode } from "react";

export function RoomCard({ id, eyebrow, title, children, tone = "default" }: { id?: string; eyebrow: string; title: string; children: ReactNode; tone?: "default" | "priority" | "warning" }) {
  return <article className={`room-card ${tone}`} id={id}><div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{children}</article>;
}
