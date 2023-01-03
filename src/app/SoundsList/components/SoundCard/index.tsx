import React, { useState, useEffect, useRef } from 'react';
import {
  IconContainer,
  SoundCardContainer,
  SoundCardVolumeControlContainer,
  SoundCardVolumeControl
} from './styles';
import { IconType } from 'react-icons';

interface SoundCardProps {
  icon: IconType,
  sound: string
}

export function SoundCard(props: SoundCardProps): JSX.Element {
  const [cardIsActive, setCardIsActive] = useState(false);
  const [soundVolume, setSoundVolume] = useState(100);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if(audioRef.current)
      audioRef.current.volume = soundVolume / 100;
  }, [soundVolume, audioRef.current]);

  return(
    <SoundCardContainer>
      <IconContainer
        title="aaaa"
        onClick={() => setCardIsActive(!cardIsActive)} 
        style={{ backgroundColor: cardIsActive? '#7D85D1' : '#5B5F89' }}
      >
        <props.icon
          size={35}
          color={cardIsActive? '#475186' : '#9CACFF'}
        />
      </IconContainer>
      {cardIsActive && (
        <SoundCardVolumeControlContainer>
          <SoundCardVolumeControl 
            onChange={(e) => setSoundVolume(Number(e.currentTarget.value))}
            value={soundVolume}
          />
        </SoundCardVolumeControlContainer>
      )}
      {cardIsActive && (
        <audio
          ref={audioRef}
          autoPlay 
          loop
        >
          <source src={props.sound} type='audio/ogg'/>
        </audio>
      )}
    </SoundCardContainer>
  );
}