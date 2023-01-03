import { createContext, useContext, Dispatch, SetStateAction } from 'react';

import enUS from '../../../locales/enUS.locale.json';
import ptBR from '../../../locales/ptBR.locale.json';

export type Translation = typeof enUS | typeof ptBR;

type TranslationContextProps = {
  t: Translation,
  setLocale: Dispatch<SetStateAction<Translation>>
};

export const TranslationContext = createContext<TranslationContextProps>({} as TranslationContextProps);

export const useTranslation = () => useContext(TranslationContext);