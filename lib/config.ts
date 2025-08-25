import runtimeConfig from "../runtime.json"

export type Environment = "qa" | "test" | "prod"
export type RuntimeConfig = typeof runtimeConfig.qa

// Server-side function to get config based on APP_ENV
export function getServerConfig(): RuntimeConfig {
  const env = (process.env.APP_ENV as Environment) || "qa"
  return runtimeConfig[env]
}

// Client-side function - requires NEXT_PUBLIC_APP_ENV
export function getClientConfig(): RuntimeConfig {
  const env = (process.env.NEXT_PUBLIC_APP_ENV as Environment) || "qa"
  return runtimeConfig[env]
}

// Universal function that works on both client and server
export function getConfig(): RuntimeConfig {
  // Check if we're on the server
  if (typeof window === "undefined") {
    return getServerConfig()
  }

  // Client-side - use NEXT_PUBLIC_APP_ENV
  return getClientConfig()
}
