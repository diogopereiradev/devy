import { useState, useEffect } from 'react';
import { appWindow } from '@tauri-apps/api/window';

import { useTranslation } from '../useTranslation';
import { usePomodoro } from '../usePomodoro/utils/context';
import { sendSystemNotification } from './utils/sendSystemNotification';

export function usePomodoroTimer(studyTime: number, restTime: number) {
  const { t } = useTranslation();
  const { isPomodoroPaused } = usePomodoro();
  const [currentPomodoroData, setCurrentPomodoroData] = useState<{
    time: number,
    mode: 'study' | 'rest'
  }>({
    time: studyTime,
    mode: 'study'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPomodoroData((prevState) => {
        if (prevState.time <= 0) {
          const bodyMessageTranslation = t.data['pomodoro.start.clock.notification.body'];
          const studyTranslation = t.data['pomodoro.start.clock.notification.body.study'];
          const restTranslation = t.data['pomodoro.start.clock.notification.body.rest'];
          const body = `${bodyMessageTranslation}: ${prevState.mode === 'study'? restTranslation : studyTranslation}`;
          appWindow.show();
          appWindow.setFocus();
          sendSystemNotification('Devy', body);
          return {
            time: prevState.mode === 'study' ? restTime : studyTime,
            mode: prevState.mode === 'study' ? 'rest' : 'study'
          };
        } else {
          return {
            ...prevState,
            time: prevState.time - 1
          };
        }
      });
    }, 1000);

    if(isPomodoroPaused) clearInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, [studyTime, restTime, isPomodoroPaused]);

  return currentPomodoroData;
}