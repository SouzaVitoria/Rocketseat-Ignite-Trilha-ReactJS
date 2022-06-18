import { ProductItem } from "./ProductItem"
import { List, AutoSizer, ListRowRenderer } from "react-virtualized"
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
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    )
  }

  return (
    <div>
      <h3>{totalPrice}</h3>
      <List
        height={400}
        rowHeight={35}
        width={700}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  )
}
