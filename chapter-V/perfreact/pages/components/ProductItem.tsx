import { memo } from "react"

interface ProductItemProps {
  product: {
    id: number
    price: number
    name: string
  }
}

function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.name} - <strong> {product.price} </strong>
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})