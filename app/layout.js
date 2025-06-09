import './globals.css'

export const metadata = {
  title: 'Workforce Management Platform',
  description: 'Enterprise workforce management platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Workforce Management Platform
            </h1>
          </div>
        </header>
        <main className="mx-auto max-w-7xl py-6 px-4">
          {children}
        </main>
      </body>
    </html>
  )
}