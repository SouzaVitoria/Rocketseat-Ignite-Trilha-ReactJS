import { useMemo } from "react"
import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
  results: Array<{
    id: number
    price: number
    name: string
  }>
  onAddToWishList: (id: number) => void
}

export default function SearchResults({ results, onAddToWishList }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((acumulatorTotal, product) => {
      return acumulatorTotal + product.price
    }, 0)
  }, [results])

  return (
    <div>
      <h3>{totalPrice}</h3>
      {results.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToWishList={onAddToWishList}
        />
      ))}
    </div>
  )
}
