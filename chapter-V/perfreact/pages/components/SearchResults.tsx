import ProductItem from "./ProductItem"

interface SearchResultsProps {
  results: Array<{
    id: number
    price: number
    name: string
  }>
}

export default function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {results.map(product => <ProductItem product={product} />)}
    </div>
  )
}
