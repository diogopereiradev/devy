import React from 'react';
import { appWindow } from '@tauri-apps/api/window';
import { type } from '@tauri-apps/api/os';
import {
  ControlsContainer,
  CloseButton,
  MinimizeButton,
  ChangeLanguageButton
} from './styles';
import { MdOutlineClose, MdMinimize } from 'react-icons/md';
import { BiWorld } from 'react-icons/bi';

import { useModal } from '../../../../assets/hooks/useModal';
import { useTranslation } from '../../../../assets/hooks/useTranslation';
import enUS from '../../../../assets/locales/enUS.locale.json';
import ptBR from '../../../../assets/locales/ptBR.locale.json';

import { CloseConfirmationModal } from '../CloseConfirmationModal';

export function Controls(): JSX.Element {
  const { t, setLocale } = useTranslation();
  const { open, close, modal } = useModal({
    width: 300,
    height: 230,
    color: '#3f4154',
    content: (
      <CloseConfirmationModal
        onConfirm={onConfirm}
        onClose={onClose}
      />
    )
  });

  function onConfirm(value: number): void {
    if(value === 0) {
      appWindow.close();
    } else if(value === 1) {
      appWindow.hide();
    }
    close();
  }

  function onClose(): void {
    close();
  }

  const handleLanguageChange = () => {
    setLocale(t.name === 'pt-BR'? enUS : ptBR);
  };

  const handleCloseButtonClick = () => {
    (async () => {
      const os = await type();

      if(os != 'Windows_NT') return appWindow.close();
      open();
    })();
  };

  return(
    <ControlsContainer>
      <ChangeLanguageButton onClick={handleLanguageChange}>
        <BiWorld size={19} color='#dddddd' />
      </ChangeLanguageButton>
      <MinimizeButton onClick={() => appWindow.minimize()}>
        <MdMinimize style={{ marginTop: '-50%' }} size={20} color='#dddddd'/>
      </MinimizeButton>
      <CloseButton onClick={() => handleCloseButtonClick()}>
        <MdOutlineClose size={19} color='#dddddd'/>
      </CloseButton>

      {modal}
    </ControlsContainer>
  );
}