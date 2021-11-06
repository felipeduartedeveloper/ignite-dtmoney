import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './services/api';

interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

/* interface TransactionInput {
  title: string;
  amount: number;
  type: string;
  category: string;
} */
//type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

interface  TransactionProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransaction] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransaction(response.data.transactions))
  }, [])

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )

}