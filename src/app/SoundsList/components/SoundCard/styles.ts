import styled from 'styled-components';

export const SoundCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 115px;
  height: 125px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  height: 85px;
  transition: .3s;
  border-radius: 4px;
  background-color: #5B5F89;
  cursor: pointer;
`;

export const SoundCardVolumeControlContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
`;

export const SoundCardVolumeControl = styled.input.attrs({ type: 'range', min: 0, max: 100 })`
  width: 80px;
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    height: 6px;
    border-radius: 50px;
    background-color: #C8C8C8;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    position: relative;
    top: -6px;
    border-radius: 50px;
    background-color: #c8c8c8;
  }
`;