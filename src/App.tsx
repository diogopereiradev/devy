import React, { useEffect } from 'react';

import { Titlebar } from './components/Titlebar';
import { AppWrapper } from './components/AppWrapper';
import { SoundsList } from './app/SoundsList';
import { Pomodoro } from './app/Pomodoro';

import { useTranslation } from './assets/hooks/useTranslation';
import enUS from './assets/locales/enUS.locale.json';
import ptBR from './assets/locales/ptBR.locale.json';

export function App(): JSX.Element {
  const { t, setLocale } = useTranslation();

  // Código para re-salvar a linguagem no local storage em caso de atualização
  useEffect(() => {
    setLocale(t.name === 'pt-BR'? ptBR : enUS);
  });

  return(
    <>
      <Titlebar />
      <AppWrapper>
        <SoundsList />
        <Pomodoro />
      </AppWrapper>
    </>
  );
}