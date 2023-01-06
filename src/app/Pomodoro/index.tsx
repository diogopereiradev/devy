import React from 'react';
import {
  PomodoroContainer
} from './styles';

import { Infos } from './components/Infos';
import { Clock } from './components/Clock';

export function Pomodoro(): JSX.Element {
  return(
    <PomodoroContainer>
      <Infos />
      <Clock />
    </PomodoroContainer>
  );
}