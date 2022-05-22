import { FormEvent, useState } from "react";
import Modal from "react-modal"
import { Form, RadioButton, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { useTransactions } from "../../contexts/useTransactions";

interface NewTransactionModalProps {
  isOpen: boolean
  onOpenAndCloseNewTransactionModal: () => void
}

Modal.setAppElement('#root');

export default function NewTransactionModal({
  isOpen,
  onOpenAndCloseNewTransactionModal
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions()
  const [typeTransaction, setTypeTransaction] = useState<"deposit" | "withdraw">("deposit")
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState(0)

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault()
    await createTransaction({ title, amount, type: typeTransaction, category })
    onOpenAndCloseNewTransactionModal()
    setTitle("")
    setAmount(0)
    setTypeTransaction("deposit")
    setCategory("")
  }

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

      <Form onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
        />

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

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  )
}
