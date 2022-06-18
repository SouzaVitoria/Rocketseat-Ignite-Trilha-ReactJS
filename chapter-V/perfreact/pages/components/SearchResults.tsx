import { useMemo } from "react"
import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
  totalPrice: number
  results: Array<{
    id: number
    price: number
    name: string
    priceFormatted: string
  }>
  onAddToWishList: (id: number) => void
}

export default function SearchResults({ results, onAddToWishList, totalPrice }: SearchResultsProps) {
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
