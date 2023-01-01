import React from 'react';
import { appWindow } from '@tauri-apps/api/window';
import {
  ControlsContainer,
  CloseButton,
  MinimizeButton,
} from './styles';
import { MdOutlineClose, MdMinimize } from 'react-icons/md';

export function Controls(): JSX.Element {
  return(
    <ControlsContainer>
      <MinimizeButton onClick={() => appWindow.minimize()}>
        <MdMinimize style={{ marginTop: '-50%' }} size={20} color='#dddddd'/>
      </MinimizeButton>
      <CloseButton onClick={() => appWindow.hide()}>
        <MdOutlineClose size={19} color='#dddddd'/>
      </CloseButton>
    </ControlsContainer>
  );
}