import Modal from 'react-modal';
import entradaImg from '../../assets/entradas.svg';
import saidaImg from '../../assets/saidas.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import { useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [type, setType] = useState('')

  function handleSetTypeDeposit() {}

  return (
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <button 
      type="button" onClick={onRequestClose} 
      className="react-modal-close">
      <img src={closeImg} alt="Fechar modal"/>
      </button>

      <Container>
      <h2>Cadastrar Transação</h2>
      
      <input 
      placeholder="Título"
      />

      <input
      type="number" 
      placeholder="Valor"
      />

      <TransactionTypeContainer>
        <RadioBox
        type="button" 
        onClick={() => {setType('deposito'); }}
        isActive={type === 'deposito'}
        activeColor="green"
        >
          <img src={entradaImg} alt="Entrada"/>
          <span>Entrada</span>
        </RadioBox>

        <RadioBox
        type="button" 
        onClick={() => {setType('saque'); }}
        isActive={type === 'saque'}
        activeColor="red"
        >
          <img src={saidaImg} alt="Saída"/>
          <span>Entrada</span>
        </RadioBox>
      </TransactionTypeContainer>


        
      

      <input 
      placeholder="Categoria"
      />

       <button type="submit">
         cadastrar
       </button>
      </Container>
    </Modal>
  );
}