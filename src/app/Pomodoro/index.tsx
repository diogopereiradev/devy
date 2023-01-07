import React from 'react';
import {
  PomodoroContainer
} from './styles';

import { PomodoroProvider } from '../../assets/hooks/usePomodoro';
import { Infos } from './components/Infos';
import { Clock } from './components/Clock';

export function Pomodoro(): JSX.Element {
  return(
    <PomodoroProvider>
      <PomodoroContainer>
        <Infos />
        <Clock/>
      </PomodoroContainer>
    </PomodoroProvider>
  );
}