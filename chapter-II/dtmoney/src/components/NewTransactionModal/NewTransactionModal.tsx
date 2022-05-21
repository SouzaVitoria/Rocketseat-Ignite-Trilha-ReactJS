import Modal from "react-modal"

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
    >
      <h2>Cadastrar Transação</h2>
    </Modal>
  )
}
