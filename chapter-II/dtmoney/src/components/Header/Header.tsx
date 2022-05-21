import logoImg from "../../assets/logo.svg"
import { Container, Content } from "./styles"

interface HeaderProps {
  onOpenAndCloseNewTransactionModal: () => void
}

export function Header({ onOpenAndCloseNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="DT Money" />
        <button type="button" onClick={onOpenAndCloseNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}