import { useState } from "react";
import Modal from "react-modal"
import { Form, RadioButton, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"

interface NewTransactionModalProps {
  isOpen: boolean
  onOpenAndCloseNewTransactionModal: () => void
}

Modal.setAppElement('#root');

export default function NewTransactionModal({
  isOpen,
  onOpenAndCloseNewTransactionModal
}: NewTransactionModalProps) {
  const [typeTransaction, setTypeTransaction] = useState<"deposit" | "withdraw">("deposit")

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onOpenAndCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onOpenAndCloseNewTransactionModal}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Form>
        <h2>Cadastrar Transação</h2>
        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <RadioButton
            type="button"
            onClick={() => setTypeTransaction("deposit")}
            isActive={typeTransaction === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioButton>
          <RadioButton
            type="button"
            onClick={() => setTypeTransaction("withdraw")}
            isActive={typeTransaction === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioButton>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  )
}
