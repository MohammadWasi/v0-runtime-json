"use client"

import { useEffect, useState } from "react"
import type { RuntimeConfig } from "@/lib/config"

// Alternative hook that fetches config from API endpoint
export function useRuntimeConfig() {
  const [config, setConfig] = useState<RuntimeConfig | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/config")
      .then((res) => res.json())
      .then((config) => {
        setConfig(config)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return { config, loading }
}
