import React, { useEffect, useState } from 'react';
import {
  PomodoroContainer,
  FormsContainer
} from './styles';

import { Infos } from './components/Infos';
import { ClockPage } from './forms/ClockPage';

export function Pomodoro(): JSX.Element {
  const [pomodoroCurrentForm, setPomodoroForm] = useState<JSX.Element>(<></>);

  useEffect(() => {
    setPomodoroForm(<ClockPage/>);
  }, []);

  return(
    <PomodoroContainer>
      <Infos />
      <FormsContainer>
        {pomodoroCurrentForm}
      </FormsContainer>
    </PomodoroContainer>
  );
}