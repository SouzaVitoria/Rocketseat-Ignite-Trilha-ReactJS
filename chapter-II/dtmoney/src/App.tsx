import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";
import NewTransactionModal from "./components/NewTransactionModal/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  const handleOpenAndCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen)
  }

  return (
    <>
      <Header onOpenAndCloseNewTransactionModal={handleOpenAndCloseNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onOpenAndCloseNewTransactionModal={handleOpenAndCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
