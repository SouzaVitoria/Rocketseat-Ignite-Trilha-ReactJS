import Modal from "react-modal"
import { Form } from "./styles";
import closeImg from "../../assets/close.svg"

interface NewTransactionModalProps {
  isOpen: boolean
  onOpenAndCloseNewTransactionModal: () => void
}

Modal.setAppElement('#root');

export default function NewTransactionModal({
  isOpen,
  onOpenAndCloseNewTransactionModal
}: NewTransactionModalProps) {
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
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  )
}
