import SearchResults from '@/components/SearchResults'

export default function SearchResultsPage({ searchParams }: { searchParams: { q?: string } }) {
  const searchTerm = searchParams.q || ""

  return <SearchResults initialSearchTerm={searchTerm} />
}