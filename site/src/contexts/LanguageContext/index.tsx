import React, { createContext, useContext, ReactNode, useState } from 'react';
import { defaultLanguage } from '@/utils/languages';

interface LanguageContextType {
  lang: string;
  switchLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, switchLanguage] = useState(defaultLanguage); // default lang

  return (
    <LanguageContext.Provider value={{ lang, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
