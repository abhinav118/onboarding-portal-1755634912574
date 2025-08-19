import { siteData, navigation } from '@/lib/data'

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Grid content will be populated from data */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Featured Content</h3>
              <p className="text-gray-600">Dynamic content goes here</p>
            </div>
          </div>
        </div>
    </div>
  )
}