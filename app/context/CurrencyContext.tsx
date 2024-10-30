import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

interface CurrencyContextType {
  baseCurrency: string;
  targetCurrency: string;
  convertedAmount: number | null;
  amount: string;
  setAmount: (value: string) => void;
  setBaseCurrency: (currency: string) => void;
  setTargetCurrency: (currency: string) => void;
  convertCurrency: () => Promise<void>;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const BASE_URL = 'https://api.frankfurter.app';

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [baseCurrency, setBaseCurrency] = useState<string>('USD');
  const [targetCurrency, setTargetCurrency] = useState<string>('INR');
  const [amount, setAmount] = useState<string>('1');
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  const convertCurrency = async () => {
    if (!amount || !baseCurrency || !targetCurrency) return;
    try {
      const response = await axios.get(`${BASE_URL}/latest?amount=${amount}&from=${baseCurrency}&to=${targetCurrency}`);
      setConvertedAmount(response.data.rates[targetCurrency]);
    } catch (error) {
      console.error('Failed to convert currency:', error);
      setConvertedAmount(null);
    }
  };

  return (
    <CurrencyContext.Provider
      value={{
        baseCurrency,
        targetCurrency,
        convertedAmount,
        amount,
        setAmount,
        setBaseCurrency,
        setTargetCurrency,
        convertCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
