"use client"

import { useConfig } from "./config-provider"
import { useEffect, useState } from "react"

export function ApiClientExample() {
  const config = useConfig()
  const [data, setData] = useState(null)

  useEffect(() => {
    // Now you can use config.apiUrl in your client component
    fetch(`${config.apiUrl}/api/data`)
      .then((res) => res.json())
      .then(setData)
  }, [config.apiUrl])

  return (
    <div>
      <p>API URL: {config.apiUrl}</p>
      <p>Auth URL: {config.authUrl}</p>
      <p>CDN URL: {config.cdnUrl}</p>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}
