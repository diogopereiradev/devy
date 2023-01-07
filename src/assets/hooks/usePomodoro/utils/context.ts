import React, { createContext, useContext } from 'react';

interface PomodoroContextProps { 
  isPomodoroRunning: boolean, 
  setIsPomodoroRunning: React.Dispatch<React.SetStateAction<boolean>>,
  isPomodoroPaused: boolean, 
  setIsPomodoroPaused: React.Dispatch<React.SetStateAction<boolean>>
}

export const PomodoroContext = createContext<PomodoroContextProps>({} as PomodoroContextProps);

export const usePomodoro = () => useContext(PomodoroContext);