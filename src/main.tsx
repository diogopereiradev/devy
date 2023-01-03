import React from'react';
import { createRoot } from 'react-dom/client';
import { appWindow } from '@tauri-apps/api/window';

import { TranslationProvider } from './assets/hooks/useTranslation';
import { GlobalStyles } from './assets/GlobalStyles';
import { App } from './App';

window.onload = () => {
  const root = document.querySelector('#root');
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  createRoot(root!).render(
    <React.StrictMode>
      <GlobalStyles />
      <TranslationProvider>
        <App />
      </TranslationProvider>
    </React.StrictMode>
  );

  /*
    Esse pedaço de código serve para resolver um bug do tauri em que
    a tela fica branca por alguns segundos após a janela abrir, e para
    esse pedaço de código funcionar no tauri.conf.json a janela tem que
    estar com a propriedade "visible": false
  */
  setTimeout(() => {
    appWindow.show();
  }, 1500);
};