import type { Role, UserObject } from "./workspace-types";
import { isPrivateMode } from "./workspace-config";

export const currentUser: UserObject = {
  userId: process.env.NEXT_PUBLIC_PLACEHOLDER_USER_ID ?? "guest-placeholder",
  name: process.env.NEXT_PUBLIC_PLACEHOLDER_USER_NAME ?? "Birdiaconia Guest",
  email: process.env.NEXT_PUBLIC_PLACEHOLDER_USER_EMAIL ?? "guest@birdiaconia.local",
  role: (process.env.NEXT_PUBLIC_PLACEHOLDER_USER_ROLE as Role) ?? "Guest",
  active: true,
  canViewPrivate: isPrivateMode() && process.env.NEXT_PUBLIC_PLACEHOLDER_USER_ROLE !== "Guest",
  canEditPrivate: ["Owner", "Operator", "Field", "Researcher", "Partner"].includes(process.env.NEXT_PUBLIC_PLACEHOLDER_USER_ROLE ?? "Guest"),
  canAccessSensitiveForms: process.env.NEXT_PUBLIC_PLACEHOLDER_USER_ROLE === "Owner",
  createdAt: "2026-07-05T00:00:00.000Z",
  updatedAt: "2026-07-05T00:00:00.000Z",
};

export function getCurrentUser() { return currentUser; }
export function getCurrentUserRole(): Role { return currentUser.role; }
export function canAccessPrivateWorkspace(user: UserObject) { return user.active && user.canViewPrivate && user.role !== "Guest"; }
