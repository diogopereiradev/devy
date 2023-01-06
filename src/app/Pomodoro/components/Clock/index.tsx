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

export function Clock(): JSX.Element {
  const { t } = useTranslation();
  const secondsPointerRef = useRef<HTMLDivElement>(null);
  const minutesPointerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let secondsDegress = 90;
    let minutesDegress = 90;

    setInterval(() => {
      if(secondsPointerRef.current) {
        secondsDegress += 30;
        secondsPointerRef.current.style.transform = `rotate(${secondsDegress}deg)`;
      }
    }, 1000);

    setInterval(() => {
      if(minutesPointerRef.current) {
        minutesDegress += 30;
        minutesPointerRef.current.style.transform = `rotate(${minutesDegress}deg)`;
      }
    }, 12000);
  }, []);

  return(
    <ClockMainContainer>
      <ClockFrame>
        <ClockPointersContainer>
          <ClockMinutesPointer ref={minutesPointerRef}/>
          <ClockSecondsPointer ref={secondsPointerRef}/>
        </ClockPointersContainer>
        <ClockCardinalLines />
        <ClockExtraCardinalLines1 />
        <ClockExtraCardinalLines2 />
      </ClockFrame>
      <HowToUseTextContainer>
        <ImArrowUp2 size={19} color='#7ed2e6'/>
        <HowToUseText>{t.data['pomodoro.clock.howtouse.text']}</HowToUseText>
      </HowToUseTextContainer>
    </ClockMainContainer>
  );
}