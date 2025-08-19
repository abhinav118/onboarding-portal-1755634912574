import { siteData, navigation } from '@/lib/data'

export default function WelcomePage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Your Onboarding Journey</h1>
            <p className="text-xl opacity-90">Complete your setup in simple steps</p>
          </div>
        </div>
<div className="container py-8">
          <div className="card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Welcome</h2>
            <p className="text-gray-600">Welcome page for new hires</p>
          </div>
        </div>
    </div>
  )
}