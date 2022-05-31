export type dataSubmitProps = {
  image: string
  description: string
  name: string
  price: string
}

export type editingFoodProps = dataSubmitProps & {
  id: number
  available: boolean
}