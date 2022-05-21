import { Container } from "./styles";
import { Summary } from "../Summary/Summary";
import { TransactionsTable } from "../TransactionsTable/TransactionsTable";

export default function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}
