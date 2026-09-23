import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { getUsers, saveUsers, hashPassword } from "./lib/users";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

async function handleApiRequest(request: Request): Promise<Response | null> {
  const url = new URL(request.url);

  if (url.pathname === "/api/users/signup" && request.method === "POST") {
    try {
      const body = await request.json();
      const { email, password } = body;
      if (!email || !password) {
        return new Response(JSON.stringify({ error: "Email and password are required." }), {
          status: 400,
          headers: { "content-type": "application/json" },
        });
      }
      const users = getUsers();
      const existing = users.find((u: any) => u.email.toLowerCase() === email.toLowerCase());
      if (existing) {
        return new Response(JSON.stringify({ error: "An account with this email already exists." }), {
          status: 400,
          headers: { "content-type": "application/json" },
        });
      }
      const newUser = {
        id: "user-" + Math.random().toString(36).slice(2, 9),
        name: "Member",
        email: email.toLowerCase(),
        passwordHash: hashPassword(password),
        createdAt: new Date().toISOString(),
        preferences: {},
        wardrobe: [],
        log: [],
        saved: [],
      };
      users.push(newUser);
      saveUsers(users);

      return new Response(JSON.stringify({ user: newUser }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    } catch (e: any) {
      return new Response(JSON.stringify({ error: e.message || "Invalid request" }), {
        status: 500,
        headers: { "content-type": "application/json" },
      });
    }
  }

  if (url.pathname === "/api/users/login" && request.method === "POST") {
    try {
      const body = await request.json();
      const { email, password } = body;
      if (!email || !password) {
        return new Response(JSON.stringify({ error: "Email and password are required." }), {
          status: 400,
          headers: { "content-type": "application/json" },
        });
      }
      const users = getUsers();
      const user = users.find((u: any) => u.email.toLowerCase() === email.toLowerCase());
      if (!user || user.passwordHash !== hashPassword(password)) {
        return new Response(JSON.stringify({ error: "Invalid email or password." }), {
          status: 401,
          headers: { "content-type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ user }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    } catch (e: any) {
      return new Response(JSON.stringify({ error: e.message || "Invalid request" }), {
        status: 500,
        headers: { "content-type": "application/json" },
      });
    }
  }

  if (url.pathname === "/api/users/update" && request.method === "POST") {
    try {
      const body = await request.json();
      const { id, userData } = body;
      if (!id) {
        return new Response(JSON.stringify({ error: "User ID is required." }), {
          status: 400,
          headers: { "content-type": "application/json" },
        });
      }
      const users = getUsers();
      const idx = users.findIndex((u: any) => u.id === id);
      if (idx === -1) {
        return new Response(JSON.stringify({ error: "User not found." }), {
          status: 404,
          headers: { "content-type": "application/json" },
        });
      }
      const existingUser = users[idx];
      let updatedProfile = existingUser.profile;
      if (userData.profile && typeof userData.profile === "object") {
        if (existingUser.profile && typeof existingUser.profile === "object") {
          updatedProfile = { ...existingUser.profile };
          for (const key of Object.keys(userData.profile)) {
            const val = userData.profile[key];
            if (val !== undefined && val !== null) {
              if (val === "" || (Array.isArray(val) && val.length === 0)) {
                if (updatedProfile[key] === undefined || updatedProfile[key] === null) {
                  updatedProfile[key] = val;
                }
              } else {
                updatedProfile[key] = val;
              }
            }
          }
        } else {
          updatedProfile = userData.profile;
        }
      }

      users[idx] = {
        ...existingUser,
        ...userData,
        profile: updatedProfile || existingUser.profile || {}
      };
      saveUsers(users);
      return new Response(JSON.stringify({ user: users[idx] }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    } catch (e: any) {
      return new Response(JSON.stringify({ error: e.message || "Invalid request" }), {
        status: 500,
        headers: { "content-type": "application/json" },
      });
    }
  }

  return null;
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const apiResponse = await handleApiRequest(request);
      if (apiResponse) return apiResponse;

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
