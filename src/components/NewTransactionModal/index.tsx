import Modal from 'react-modal';
import entradaImg from '../../assets/entradas.svg';
import saidaImg from '../../assets/saidas.svg';
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
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
        <button>
          <img src={entradaImg} alt="Entrada"/>
          <span>Entrada</span>
        </button>

        <button>
          <img src={saidaImg} alt="Saída"/>
          <span>Entrada</span>
        </button>
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