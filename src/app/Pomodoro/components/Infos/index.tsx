import React from 'react';
import {
  InfosContainer,
  InfosTitle,
  InfosText
} from './styles';
import { useTranslation } from '../../../../assets/hooks/useTranslation';

export function Infos(): JSX.Element {
  const { t } = useTranslation();

  return(
    <InfosContainer>
      <InfosTitle>{t.data['pomodoro.infos.title']}</InfosTitle>
      <InfosText>{t.data['pomodoro.infos.text']}</InfosText>
    </InfosContainer>
  );
}