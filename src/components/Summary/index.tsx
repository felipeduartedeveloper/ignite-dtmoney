import React, { useContext } from 'react';
import entradasImg from '../../assets/entradas.svg';
import saidasImg from '../../assets/saidas.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  console.log(transactions)
  
  return (
    <Container>
 
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradasImg} alt=""></img>
        </header>
        <strong>R$1000</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={saidasImg} alt=""></img>
        </header>
        <strong>- R$500</strong>
      </div>

      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt=""></img>
        </header>
        <strong>R$500</strong>
      </div>
    </Container>
  )
}