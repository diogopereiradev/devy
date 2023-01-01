import styled from 'styled-components';

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 23px;
  transition: .3s;
  border-radius: 3px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #cf574e;
  }
  &:active {
    background-color: #a3443c;
  }
`;

export const MinimizeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 23px;
  transition: .3s;
  border-radius: 3px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #7273b0;
  }
  &:active {
    background-color: #65669c;
  }
`;