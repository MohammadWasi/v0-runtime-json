"use client"

import { createContext, useContext, type ReactNode } from "react"
import type { RuntimeConfig } from "@/lib/config"

const ConfigContext = createContext<RuntimeConfig | null>(null)

interface ConfigProviderProps {
  children: ReactNode
  config: RuntimeConfig
}

export function ConfigProvider({ children, config }: ConfigProviderProps) {
  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
}

export function useConfig() {
  const config = useContext(ConfigContext)
  if (!config) {
    throw new Error("useConfig must be used within a ConfigProvider")
  }
  return config
}
