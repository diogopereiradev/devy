import React from 'react';
import { 
  SoundsListContainer,
  SoundsCardsContainer
} from './styles';
import { FaCloudRain } from 'react-icons/fa';

import { Infos } from './components/Infos';
import { SoundCard } from './components/SoundCard';

export function SoundsList(): JSX.Element {
  return(
    <SoundsListContainer>
      <Infos />
      <SoundsCardsContainer>
        <SoundCard icon={FaCloudRain} sound='/sounds/campfire.ogg'/>
        <SoundCard icon={FaCloudRain} sound='/sounds/campfire.ogg'/>
        <SoundCard icon={FaCloudRain} sound='/sounds/campfire.ogg'/>
        <SoundCard icon={FaCloudRain} sound='/sounds/campfire.ogg'/>
        <SoundCard icon={FaCloudRain} sound='/sounds/campfire.ogg'/>
        <SoundCard icon={FaCloudRain} sound='/sounds/campfire.ogg'/>
      </SoundsCardsContainer>
    </SoundsListContainer>
  );
}