import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../services/api"

interface Transaction {
  id: number
  title: string
  amount: number
  type: "deposit" | "withdraw"
  category: string
  createdAt: string
}

// type TransactionInput = Pick<Transaction, "title" | "amount" | "type" | "category">
type TransactionInput = Omit<Transaction, "id" | "createdAt">

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => void
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider(props: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get("/transactions").then(response => setTransactions(response.data.transactions))
  }, [])

  const createTransaction = (transaction: TransactionInput) => {
    api.post("/transactions", transaction)
  }

  return (
    <TransactionsContext.Provider value={{
      transactions,
      createTransaction
    }}>
      {props.children}
    </TransactionsContext.Provider>
  )

}