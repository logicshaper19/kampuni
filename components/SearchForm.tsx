"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSearchParams } from 'next/navigation'

interface SearchFormProps {
  initialSearchTerm?: string;
  onSearch: (searchTerm: string) => void;
  buttonText?: string;
}

export default function SearchForm({ 
  initialSearchTerm = "", 
  onSearch,
  buttonText = "Search"
}: SearchFormProps) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)
  const searchParams = useSearchParams()

  useEffect(() => {
    const query = searchParams?.get('q')
    if (query) {
      setSearchTerm(query)
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim())
    }
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="relative">
        <Input
          id="search-term"
          name="search"
          type="text"
          required
          className="pr-10"
          placeholder="Enter company name, CR12 number, or director name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>
      <div>
        <Button
          type="submit"
          className="w-full bg-gray-900 hover:bg-gray-800 text-white"
        >
          {buttonText}
        </Button>
      </div>
    </form>
  )
}
