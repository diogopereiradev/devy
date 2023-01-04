import React from 'react';
import {
  ClockPageContainer
} from './styles';

import { Clock } from './components/Clock';

export function ClockPage(): JSX.Element {
  return(
    <ClockPageContainer>
      <Clock />
    </ClockPageContainer>
  );
}