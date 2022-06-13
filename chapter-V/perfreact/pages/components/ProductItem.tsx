interface ProductItemProps {
  product: {
    id: number
    price: number
    name: string
  }
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div>
      {product.name} - <strong> {product.price} </strong>
    </div>
  )
}
