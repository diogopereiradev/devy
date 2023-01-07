import React from 'react';
import {
  PomodoroRunningContainer,
  PausePomodoroButton,
  ResumePomodoroButton,
  PomodoroTimerTextContainer,
  PomodoroTimerModeText,
  PomodoroTimerText,
  StopPomodoroButton
} from './styles';

import { useTranslation } from '../../../../assets/hooks/useTranslation';
import { usePomodoro } from '../../../../assets/hooks/usePomodoro';
import { usePomodoroTimer } from '../../../../assets/hooks/usePomodoroTimer';

export function PomodoroRunning(): JSX.Element {
  const { t } = useTranslation();
  const { 
    setIsPomodoroRunning, 
    isPomodoroPaused, 
    setIsPomodoroPaused
  } = usePomodoro();
  const { time, mode } = usePomodoroTimer(1500, 300);

  function toHHMMSS(seconds: number) {
    const date = new Date(0);
    date.setSeconds(seconds);
    const timeString = date.toISOString().substring(11, 19);
    return timeString;
  }

  return(
    <PomodoroRunningContainer>
      {!isPomodoroPaused && (
        <PausePomodoroButton onClick={() => setIsPomodoroPaused(true)}>
          {t.data['pomodoro.running.clock.pausebutton.text']}
        </PausePomodoroButton>
      )}
      {isPomodoroPaused && (
        <ResumePomodoroButton onClick={() => setIsPomodoroPaused(false)}>
          {t.data['pomodoro.running.clock.resumebutton.text']}
        </ResumePomodoroButton>
      )}
      <PomodoroTimerTextContainer>
        <PomodoroTimerModeText>
          {mode === 'study'? 
            t.data['pomodoro.start.clock.notification.body.study'] : 
            t.data['pomodoro.start.clock.notification.body.rest']}
        </PomodoroTimerModeText>
        <PomodoroTimerText>{toHHMMSS(time)}</PomodoroTimerText>
      </PomodoroTimerTextContainer>
      <StopPomodoroButton onClick={() => setIsPomodoroRunning(false)}>
        {t.data['pomodoro.running.clock.stopbutton.text']}
      </StopPomodoroButton>
    </PomodoroRunningContainer>
  );
}