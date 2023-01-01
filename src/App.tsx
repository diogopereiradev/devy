import React from 'react';

import { GlobalStyles } from './assets/GlobalStyles';
import { Titlebar } from './components/Titlebar';

export function App(): JSX.Element {
  return(
    <>
      <GlobalStyles/>
      <Titlebar />
    </>
  );
}