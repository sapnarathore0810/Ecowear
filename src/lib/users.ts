import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

// Ensure data directory and data/users.json exist
const DATA_DIR = path.resolve(process.cwd(), "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");

function ensureUsersFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2), "utf-8");
  }
}

export function getUsers(): any[] {
  ensureUsersFile();
  try {
    const raw = fs.readFileSync(USERS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    return [];
  }
}

export function saveUsers(users: any[]) {
  ensureUsersFile();
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), "utf-8");
}

export function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex");
}
