import React from 'react';
import { appWindow } from '@tauri-apps/api/window';
import {
  ControlsContainer,
  CloseButton,
  MinimizeButton,
  ChangeLanguageButton
} from './styles';
import { MdOutlineClose, MdMinimize } from 'react-icons/md';
import { BiWorld } from 'react-icons/bi';

import { useTranslation } from '../../../../assets/hooks/useTranslation';
import enUS from '../../../../assets/locales/enUS.locale.json';
import ptBR from '../../../../assets/locales/ptBR.locale.json';

export function Controls(): JSX.Element {
  const { t, setLocale } = useTranslation();

  const handleLanguageChange = () => {
    setLocale(t.name === 'pt-BR'? enUS : ptBR);
  };

  return(
    <ControlsContainer>
      <ChangeLanguageButton onClick={handleLanguageChange}>
        <BiWorld size={19} color='#dddddd' />
      </ChangeLanguageButton>
      <MinimizeButton onClick={() => appWindow.minimize()}>
        <MdMinimize style={{ marginTop: '-50%' }} size={20} color='#dddddd'/>
      </MinimizeButton>
      <CloseButton onClick={() => appWindow.hide()}>
        <MdOutlineClose size={19} color='#dddddd'/>
      </CloseButton>
    </ControlsContainer>
  );
}