import { useMemo } from "react"
import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
  results: Array<{
    id: number
    price: number
    name: string
  }>
}

export default function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((acumulatorTotal, product) => {
      return acumulatorTotal + product.price
    }, 0)
  }, [results])

  return (
    <div>
      <h3>{totalPrice}</h3>
      {results.map(product => <ProductItem product={product} />)}
    </div>
  )
}
