import React, { useState } from 'react';
import { PomodoroContext } from './context';

export function PomodoroProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [isPomodoroRunning, setIsPomodoroRunning] = useState(false);
  const [isPomodoroPaused, setIsPomodoroPaused] = useState(false);

  return(
    <PomodoroContext.Provider 
      value={
        { 
          isPomodoroRunning, 
          setIsPomodoroRunning, 
          isPomodoroPaused, 
          setIsPomodoroPaused
        }
      }>
      {children}
    </PomodoroContext.Provider>
  );
}