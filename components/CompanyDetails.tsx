"use client"

import { useState } from 'react'
import { ArrowUpRight, Building2, Calendar, FileText, Mail, MapPin, Phone, User, Users, Link as LinkIcon, Briefcase, AlertCircle, TrendingUp, History } from 'lucide-react'
import Link from 'next/link'

interface Company {
  id: string;
  name: string;
  number: string;
  industry: string;
}

export default function CompanyDetails({ company }: { company: Company }) {
  const [activeTab, setActiveTab] = useState('overview')

  const financialData = [
    { year: 2022, revenue: 1500000, profit: 300000 },
    { year: 2021, revenue: 1200000, profit: 240000 },
    { year: 2020, revenue: 1000000, profit: 180000 },
  ]

  const companyChanges = [
    { date: '2022-06-15', change: 'Increased share capital from KES 100,000 to KES 500,000' },
    { date: '2021-03-01', change: 'Added new director: Jane Doe' },
    { date: '2020-11-20', change: 'Changed registered office address' },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="fixed w-full z-10 bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <ArrowUpRight className="h-8 w-8 text-gray-900" />
              <span className="ml-2 text-2xl font-bold text-gray-900">kampuni</span>
            </Link>
            <nav className="hidden md:flex space-x-4">
              {['Search', 'Features', 'Data Sources', 'Insights'].map((item) => (
                <Link key={item} href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{company.name}</h1>
            <p className="text-gray-600 mb-4">Company Number: {company.number}</p>
            <div className="flex items-center text-sm text-gray-500">
              <Briefcase className="h-4 w-4 mr-1" />
              <span>{company.industry}</span>
            </div>
          </div>

          <div className="mb-8">
            <nav className="flex space-x-4 border-b border-gray-200">
              {['Overview', 'Financials', 'Changes', 'Related Entities', 'Observations'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`py-2 px-4 text-sm font-medium ${
                    activeTab === tab.toLowerCase()
                      ? 'border-b-2 border-gray-900 text-gray-900'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Content for each tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Overview content */}
            </div>
          )}

          {activeTab === 'financials' && (
            <div>
              {/* Financials content */}
            </div>
          )}

          {activeTab === 'changes' && (
            <div>
              {/* Changes content */}
            </div>
          )}

          {activeTab === 'related entities' && (
            <div>
              {/* Related entities content */}
            </div>
          )}

          {activeTab === 'observations' && (
            <div>
              {/* Observations content */}
            </div>
          )}
        </div>
      </main>

      <footer className="bg-gray-100 mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-600">&copy; 2023 Kampuni. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}