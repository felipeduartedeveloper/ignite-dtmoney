import { useState } from 'react';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import { Container, Content } from './styles';

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Container>
      <Content>
      <img src={logo} alt="dt money" />
      <button type="button" onClick={handleOpenNewTransactionModal}
      >Nova Transação</button>

      <Modal isOpen={isNewTransactionModalOpen}>
        <h2>Cadastrar Transação</h2>
      </Modal>
      </Content>
    </Container>
  )
}