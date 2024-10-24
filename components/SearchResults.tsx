"use client"

import { useState, useEffect } from 'react'
import { ArrowUpRight, Search } from "lucide-react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Company {
  name: string;
  number: string;
  registrationDate: string;
  address: string;
  directors: string[];
  capital: string;
  shares: string;
  health: 'good' | 'warning' | 'bad';
}

function CompanyCard({ company }: { company: Company }) {
  const router = useRouter()

  const getHealthIcon = (health: 'good' | 'warning' | 'bad') => {
    switch (health) {
      case 'good':
        return <span className="h-3 w-3 bg-green-500 rounded-full inline-block mr-2"></span>
      case 'warning':
        return <span className="h-3 w-3 bg-yellow-500 rounded-full inline-block mr-2"></span>
      case 'bad':
        return <span className="h-3 w-3 bg-red-500 rounded-full inline-block mr-2"></span>
    }
  }

  const handleCompanyClick = () => {
    const companyId = company.name.toLowerCase().replace(/\s+/g, '-')
    router.push(`/company/${companyId}`)
  }

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold flex items-center space-x-2">
          <span>{company.name}</span>
          {getHealthIcon(company.health)}
        </CardTitle>
        <Button variant="ghost" size="icon" onClick={handleCompanyClick}>
          <ArrowUpRight className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 space-y-2">
            <div>
              <p className="text-sm font-medium text-gray-500">Company Number</p>
              <p>{company.number}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Registration Date</p>
              <p>{company.registrationDate}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Address</p>
              <p>{company.address}</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-2">Directors</p>
            <div className="flex flex-wrap gap-2">
              {company.directors.map((director, index) => (
                <Badge key={index} variant="secondary">
                  {director}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Share Capital</p>
            <p>{company.capital}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Shares</p>
            <p>{company.shares}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function SearchResults({ initialSearchTerm }: { initialSearchTerm: string }) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)
  const router = useRouter()

  const companies: Company[] = [
    {
      name: 'Priority Mobile Limited',
      number: 'CPR/2014/137614',
      registrationDate: '31st March 2014',
      address: 'P.O. Box 2004 City Square, Nairobi',
      directors: ['Elisha Liyai Sore', 'Winston Shitsukane Sore'],
      capital: 'KES 100,000.00',
      shares: '100 Ordinary Shares (KES 1,000.00 each)',
      health: 'good'
    },
    {
      name: 'Priority Health Limited',
      number: 'CPR/2014/150426',
      registrationDate: '9th July 2014',
      address: 'P.O. Box 16282 G.P.O Nairobi',
      directors: ['Elisha Liyai Sore', 'Corneille Chitayi Sore'],
      capital: 'KES 500,000.00',
      shares: '500 Ordinary Shares (KES 1,000.00 each)',
      health: 'warning'
    }
  ]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`)
    }
  }

  useEffect(() => {
    setSearchTerm(initialSearchTerm)
  }, [initialSearchTerm])

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowUpRight className="h-8 w-8 text-gray-900" />
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <form className="flex items-center space-x-4" onSubmit={handleSubmit}>
            <div className="flex-grow relative">
              <Input
                type="text"
                placeholder="Search for companies, directors, or business information"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <Button type="submit">
              Search
            </Button>
          </form>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Results Found</CardTitle>
              <Button variant="outline">
                Export results
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">2 companies match your query</p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {companies.map((company, index) => (
            <CompanyCard key={index} company={company} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-gray-600">Showing 1 to 2 of 2 results</p>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
