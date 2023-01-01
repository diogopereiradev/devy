import React from 'react';
import {
  TitlebarContainer
} from './styles';

import { AppInfos } from './components/AppInfos';
import { Controls } from './components/Controls';

export function Titlebar(): JSX.Element {
  return(
    <TitlebarContainer data-tauri-drag-region>
      <AppInfos />
      <Controls />
    </TitlebarContainer>
  );
}