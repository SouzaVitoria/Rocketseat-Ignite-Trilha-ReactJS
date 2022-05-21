import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {

  useEffect(() => {
    api.get("/transactions").then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento One page</td>
            <td className="deposit">R$ 4.000,00</td>
            <td>Freelancer</td>
            <td>25/05/2022</td>
          </tr>
          <tr>
            <td>Conta de Luz</td>
            <td className="withdraw">- R$ 100,00</td>
            <td>Casa</td>
            <td>10/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
