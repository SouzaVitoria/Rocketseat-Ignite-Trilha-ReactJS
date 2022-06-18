import { memo, useState } from "react"
import dynamic from "next/dynamic"
import { AddProductToWishlistProps } from "./AddProductToWishlist"

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
  return import("./AddProductToWishlist")
}, {
  loading: () => <span> Carregando... </span>
})

interface ProductItemProps {
  product: {
    id: number
    price: number
    name: string
    priceFormatted: string
  }
  onAddToWishList: (id: number) => void
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false)

  return (
    <div>
      {product.name} - <strong> {product.priceFormatted} </strong>
      <button onClick={() => setIsAddingToWishlist(true)}>  Add to wishlist </button>

      {isAddingToWishlist &&
        <AddProductToWishlist
          onAddToWishlist={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      }
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})