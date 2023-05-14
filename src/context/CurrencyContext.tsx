import { createContext, useState } from "react";
import { currencies } from "/constants";

export interface Currency {
  label: string;
  value: number;
  img: string;
}

interface ICurrencyContext {
  activeCurrency: Currency;
  handleCurrencyChange: (index: number) => void;
}

export const CurrencyContext = createContext<ICurrencyContext>(
  {} as ICurrencyContext
);

export const CurrencyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeCurrency, setActiveCurrency] = useState<Currency>(currencies[0]);

  const handleCurrencyChange = (index: number) => {
    setActiveCurrency(currencies[index]);
  };

  const actions = {
    handleCurrencyChange,
  };

  const state = {
    activeCurrency,
  };

  const context = {
    ...state,
    ...actions,
  };

  return (
    <CurrencyContext.Provider value={context}>
      {children}
    </CurrencyContext.Provider>
  );
};
