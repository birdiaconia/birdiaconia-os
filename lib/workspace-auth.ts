import type { Role, UserObject } from "./workspace-types";
import { isPrivateMode } from "./workspace-config";

const allowedRoles: Role[] = ["Owner", "Operator", "Field", "Researcher", "Partner", "Viewer", "Guest"];

function getServerRole(): Role {
  const candidate = process.env.WORKSPACE_PLACEHOLDER_USER_ROLE ?? "Guest";
  return allowedRoles.includes(candidate as Role) ? (candidate as Role) : "Guest";
}

const role = getServerRole();

export const currentUser: UserObject = {
  userId: process.env.WORKSPACE_PLACEHOLDER_USER_ID ?? "guest-placeholder",
  name: process.env.WORKSPACE_PLACEHOLDER_USER_NAME ?? "Birdiaconia Guest",
  email: process.env.WORKSPACE_PLACEHOLDER_USER_EMAIL ?? "guest@birdiaconia.local",
  role,
  active: true,
  canViewPrivate: isPrivateMode() && role !== "Guest",
  canEditPrivate: ["Owner", "Operator", "Field", "Researcher", "Partner"].includes(role),
  canAccessSensitiveForms: role === "Owner",
  createdAt: "2026-07-05T00:00:00.000Z",
  updatedAt: "2026-09-27T00:00:00.000Z",
};

export function getCurrentUser() { return currentUser; }
export function getCurrentUserRole(): Role { return currentUser.role; }
export function canAccessPrivateWorkspace(user: UserObject) {
  return user.active && user.canViewPrivate && user.role !== "Guest";
}
