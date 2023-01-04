import React from 'react';

import { Titlebar } from './components/Titlebar';
import { AppWrapper } from './components/AppWrapper';
import { SoundsList } from './app/SoundsList';
import { Pomodoro } from './app/Pomodoro';

export function App(): JSX.Element {

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