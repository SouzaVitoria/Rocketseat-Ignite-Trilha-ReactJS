import { useState, FormEvent, useCallback } from "react"
import SearchResults from "./components/SearchResults";

type Product = {
  id: number
  name: string
  price: number
  priceFormatted: string
}

type Results = {
  totalPrice: number
  data: Product[]
}

export default function Home() {
  const [search, setSearch] = useState<string>()
  const [results, setResults] = useState<Results>({
    totalPrice: 0, data: []
  })

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json();

    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    })

    const products = data.map((product: Product) => {
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        priceFormatted: formatter.format(product.price)
      }
    })

    const totalPrice = data.reduce((acumulatorTotal, product) => {
      return acumulatorTotal + product.price
    }, 0)

    setResults({ totalPrice, data: products })
  }

  const addToWishList = useCallback(async (id: number) => {
    console.log(id)
  }, [])

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={e => { setSearch(e.target.value) }}
        />
        <button type="submit"> Buscar </button>
      </form>

      <SearchResults
        results={results.data}
        totalPrice={results.totalPrice}
        onAddToWishList={addToWishList}
      />
    </div>
  )
}
