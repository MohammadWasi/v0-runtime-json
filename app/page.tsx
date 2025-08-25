import { ApiClientExample } from "@/components/api-client-example"

export default function Page() {
  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Runtime Configuration Demo</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Environment-Based URLs</h2>
          <p className="text-gray-600 mb-4">
            This demo shows how to access URLs from runtime.json based on your APP_ENV setting.
          </p>

          <ApiClientExample />
        </section>

        <section className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-2">How it works:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>Server reads APP_ENV and selects the correct URLs from runtime.json</li>
            <li>Configuration is passed to client components via React Context</li>
            <li>Client components use useConfig() hook to access URLs</li>
            <li>No additional API calls needed - config is available immediately</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
