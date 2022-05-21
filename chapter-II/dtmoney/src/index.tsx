import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from "miragejs"
import App from './App';

createServer({
  models: {
    transactions: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          createdAt: new Date("2022-03-05 09:00:00")
        },
        {
          id: 2,
          title: "Transaction 2",
          amount: 100,
          type: "withdraw",
          category: "Food",
          createdAt: new Date("2022-03-07 21:00:00")
        }
      ]
    })
  },

  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transactions")
    })

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create("transactions", data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
