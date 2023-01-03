import React, { useEffect, useState } from 'react';
import { TranslationContext, Translation } from './context';

import enUS from '../../../locales/enUS.locale.json';

export function TranslationProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [t, setLocale] = useState<Translation>(() => {
    const storageLocale = window.localStorage.getItem('locale');
    
    if(!storageLocale) window.localStorage.setItem('locale', JSON.stringify(enUS));
    return JSON.parse(storageLocale || '{}');
  });

  useEffect(() => {
    window.localStorage.setItem('locale', JSON.stringify(t));
  }, [t]);

  return(
    <TranslationContext.Provider value={{ t, setLocale }}>
      {children}
    </TranslationContext.Provider>
  );
}