"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import SearchForm from "@/components/SearchForm"
import { useSearchParams, useRouter } from 'next/navigation'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQuery = searchParams?.get('q') || ""

  const handleSearch = (searchTerm: string) => {
    router.push(`/search/results?q=${encodeURIComponent(searchTerm)}`)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowUpRight className="w-8 h-8 text-gray-900" />
              <span className="text-2xl font-bold text-gray-900">kampuni</span>
            </Link>
            <nav className="hidden md:flex space-x-4">
              {['Features', 'Data Sources', 'Insights', 'Login'].map((item) => (
                <Link key={item} href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
              What would you like to search for today?
            </h2>
            <p className="mt-2 text-sm text-center text-gray-600">
              Search for companies, directors, or business information
            </p>
          </div>
          <SearchForm initialSearchTerm={initialQuery} onSearch={handleSearch} buttonText="Search" />
        </div>
      </main>

      <footer className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © 2023 Kampuni. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
