"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'

export default function SearchForm({ initialSearchTerm = "" }) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Searching for:", searchTerm)
    router.push(`/search?q=${encodeURIComponent(searchTerm)}`)
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
          placeholder="Person, Company Name, CR12"
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
          Start Search
        </Button>
      </div>
    </form>
  )
}