'use client'
import React, { createContext, ReactNode, useState, useEffect } from 'react';

// Define o tipo do contexto
type NavigationContextType = {
  activePage: string;
  navigateTo: (page: string) => void;
};

// Cria o contexto com o tipo definido
export const NavigationContext = createContext<NavigationContextType>({
  activePage: '',
  navigateTo: () => {}
});

// Componente de contexto que irá prover a função de navegação para os componentes filhos
const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activePage, setActivePage] = useState('Home');

  useEffect(() => {
    if(window.location.href.includes("partner")) {
      setActivePage("partner")
    } else if(window.location.href.includes("howItWorks")) {
      setActivePage("howItWorks")
    } else {
      setActivePage("home")
    }
  },[])

  const navigateTo = (page: string) => {
    setActivePage(page);
  };

  // Defina o tipo explicitamente ao fornecer o valor do contexto
  const contextValue: NavigationContextType = {
    activePage,
    navigateTo
  }

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider;
