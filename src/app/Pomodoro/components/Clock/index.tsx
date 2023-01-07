import React, { useEffect, useRef } from 'react';
import {
  ClockMainContainer,
  ClockFrame,
  ClockPointersContainer,
  ClockMinutesPointer,
  ClockSecondsPointer,
  ClockCardinalLines,
  ClockExtraCardinalLines1,
  ClockExtraCardinalLines2,
  HowToUseTextContainer,
  HowToUseText
} from './styles';
import { ImArrowUp2 } from 'react-icons/im';

import { useTranslation } from '../../../../assets/hooks/useTranslation';
import { useModal } from '../../../../assets/hooks/useModal';

import { PomodoroRunning } from '../PomodoroRunning';
import { ConfirmationModal } from '../../../../components/ConfirmationModal';
import { usePomodoro } from '../../../../assets/hooks/usePomodoro';

export function Clock(): JSX.Element {
  const { t } = useTranslation();
  const { 
    isPomodoroRunning, 
    setIsPomodoroRunning, 
    isPomodoroPaused, 
    setIsPomodoroPaused 
  } = usePomodoro();
  const secondsPointerRef = useRef<HTMLDivElement>(null);
  const minutesPointerRef = useRef<HTMLDivElement>(null);
  const confirmationModal = useModal({
    width: 300,
    height: 165,
    color: '#52516e',
    content: 
      <ConfirmationModal
        title={t.data['pomodoro.start.clock.modal.title']}
        description={
          <span>
            {t.data['pomodoro.start.clock.modal.description.studytime.text']}: 25 minutes
            <br />
            <br />
            {t.data['pomodoro.start.clock.modal.description.resttime.text']}: 5 minutes
          </span>
        }
        confirmButtonText={t.data['pomodoro.start.clock.modal.confirmbutton.text']}
        closeButtonText={t.data['pomodoro.start.clock.modal.closebutton.text']}
        onConfirm={handleOnConfirm}
        onClose={handleOnClose}
      />
  });

  useEffect(() => {
    if(isPomodoroRunning && secondsPointerRef.current && minutesPointerRef.current) {
      secondsPointerRef.current.classList.add('animateSeconds');
      minutesPointerRef.current.classList.add('animateMinutes');
    } else if(!isPomodoroRunning && secondsPointerRef.current && minutesPointerRef.current) {
      secondsPointerRef.current.classList.remove('animateSeconds');
      minutesPointerRef.current.classList.remove('animateMinutes');
    } 
    
    if(isPomodoroPaused && secondsPointerRef.current && minutesPointerRef.current) {
      secondsPointerRef.current.classList.remove('animateSeconds');
      minutesPointerRef.current.classList.remove('animateMinutes');
    }
  }, [isPomodoroRunning, isPomodoroPaused, secondsPointerRef.current, minutesPointerRef.current]);

  function handleOnConfirm() {
    setIsPomodoroRunning(true);
    confirmationModal.close();
  }

  function handleOnClose() {
    confirmationModal.close();
  }

  const handleStartConfirmation = () => {
    if(isPomodoroRunning) return;
    setIsPomodoroPaused(false);
    confirmationModal.open();
  };

  return(
    <ClockMainContainer>
      <ClockFrame onClick={() => handleStartConfirmation()}>
        <ClockPointersContainer>
          <ClockMinutesPointer ref={minutesPointerRef}/>
          <ClockSecondsPointer ref={secondsPointerRef}/>
        </ClockPointersContainer>
        <ClockCardinalLines />
        <ClockExtraCardinalLines1 />
        <ClockExtraCardinalLines2 />
      </ClockFrame>
      {!isPomodoroRunning && (
        <HowToUseTextContainer>
          <ImArrowUp2 size={19} color='#7ed2e6'/>
          <HowToUseText>{t.data['pomodoro.clock.howtouse.text']}</HowToUseText>
        </HowToUseTextContainer>
      )}

      {isPomodoroRunning && <PomodoroRunning />}

      {confirmationModal.modal}
    </ClockMainContainer>
  );
}