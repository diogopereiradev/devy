import React from 'react';
import { 
  SoundsListContainer,
  SoundsCardsContainer
} from './styles';

import { usePagination } from '../../assets/hooks/usePagination';
import { sounds } from './sounds';

import { Infos } from './components/Infos';
import { useTranslation } from '../../assets/hooks/useTranslation';

export function SoundsList(): JSX.Element {
  const { t } = useTranslation();
  const { paginationComponent, data } = usePagination({
    items: sounds(t),
    perPage: 6,
    buttonsPerPagination: 3,
    buttonColor: '#4f5070',
    buttonSelectedColor: '#1e1f2b',
    arrowsColor: '#dddddd',
    textColor: '#dddddd',
    textFont: 'Roboto',
    textWeight: 700
  });

  return(
    <SoundsListContainer>
      <Infos />
      <SoundsCardsContainer>
        {data.map(elem => elem)}
      </SoundsCardsContainer>
      {paginationComponent}
    </SoundsListContainer>
  );
}