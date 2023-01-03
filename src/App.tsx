import React from 'react';

import { Titlebar } from './components/Titlebar';
import { SoundsList } from './app/SoundsList';

export function App(): JSX.Element {

  return(
    <>
      <Titlebar />
      <SoundsList />
    </>
  );
}