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
      <InfosTitle>{t.data['soundslist.infos.title']}</InfosTitle>
      <InfosText>{t.data['soundslist.infos.text']}</InfosText>
    </InfosContainer>
  );
}