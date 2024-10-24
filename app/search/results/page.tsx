import SearchResults from '@/components/SearchResults'

export default function SearchResultsPage({ searchParams }: { searchParams: { q: string } }) {
  return <SearchResults initialSearchTerm={searchParams.q || ''} />
}
