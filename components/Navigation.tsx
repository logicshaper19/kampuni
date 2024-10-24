"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
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
  )
}
