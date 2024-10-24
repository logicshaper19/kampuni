"use client"

import { ArrowUpRight, BarChart2, Search, Shield, Zap, PieChart, Filter, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const router = useRouter()

  const features = [
    { name: 'Real-Time Data Feeds', description: 'Access continuously updated business data from trusted sources.', icon: Zap },
    { name: 'Risk Assessment Tools', description: 'Tailor risk assessment tools for lenders and banks.', icon: Shield },
    { name: 'Business Profiles', description: 'Dive into detailed company profiles with comprehensive information.', icon: Search },
    { name: 'Sector-Specific Insights', description: 'Receive targeted insights for relevant sectors.', icon: PieChart },
    { name: 'Data Visualization', description: 'Visualize trends and metrics through interactive charts.', icon: BarChart2 },
    { name: 'Advanced Search', description: 'Quickly find and sort business information with powerful tools.', icon: Filter },
  ]

  const handleGetStarted = async () => {
    if (isNavigating) return // Prevent double clicks
    
    try {
      setIsNavigating(true)
      console.log("Navigating to search page...")
      await router.push('/search')
    } catch (error) {
      console.error("Navigation error:", error)
    } finally {
      setIsNavigating(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="fixed w-full z-10 bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <ArrowUpRight className="h-8 w-8 text-gray-900" />
                <span className="ml-2 text-2xl font-bold text-gray-900">kampuni</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Features', 'Data Sources', 'Insights', 'Login'].map((item) => (
                  <Link 
                    key={item} 
                    href="#" 
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 
                             hover:text-gray-900 hover:bg-gray-100 
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                             transition duration-150 ease-in-out"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 
                         hover:text-gray-900 hover:bg-gray-100 
                         focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Features', 'Data Sources', 'Insights', 'Login'].map((item) => (
                <Link 
                  key={item} 
                  href="#" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 
                           hover:text-gray-900 hover:bg-gray-100 
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                           transition duration-150 ease-in-out"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block">Trusted Data for</span>
                <span className="block text-gray-700">Informed Decisions</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Gain real-time insights into Kenyan businesses, empowering lenders, banks, and the public with accurate, up-to-the-minute information.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <button
                    type="button"
                    onClick={() => {
                      console.log("Get Started button clicked");
                      router.push('/search');
                    }}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out relative z-20"
                  >
                    Get started
                  </button>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link 
                    href="#" 
                    className="w-full flex items-center justify-center px-8 py-3 
                             border border-gray-300 text-base font-medium rounded-md 
                             text-gray-900 bg-white hover:bg-gray-50 
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                             md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-grid-gray-900/[0.05] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        </section>

        <section className="relative py-16 sm:py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Powerful Features
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Empowering your business decisions with cutting-edge tools and insights.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                  <div className="relative p-6 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-100">
                      <feature.icon className="w-6 h-6 text-gray-900" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-600">&copy; 2024 Kampuni. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
