import styled from 'styled-components';

export const ClockMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65%;
`;

export const ClockFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 200px;
  height: 200px;
  margin-left: -20px;
  border: 7px solid #444561;
  box-shadow: 
    -4px -4px 10px #3c3d5e,
    inset 4px 4px 3px #26263d,
    inset -4px -4px 10px #3c3d5e,
    4px 4px 3px #26263d;
  border-radius: 50%;
  cursor: pointer;
`;

export const ClockPointersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #363849;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #4e4f73;
    z-index: 1;
  }
`;

export const ClockMinutesPointer = styled.div`
  // This animation is used in custom class on GlobalStyles.ts
  @keyframes minutesPointerRotate {
    from {
      transform: rotate(90deg);
    } to {
      transform: rotate(450deg);
    }
  }

  width: 35%;
  right: 50%;
  height: 6px;
  background: #987dbd;
  position: absolute;
  top: 50%;
  border-radius: 6px;
  transform-origin: 100%;
  transform: rotate(90deg);
`;

export const ClockSecondsPointer = styled.div`
  // This animation is used in custom class on GlobalStyles.ts
  @keyframes secondsPointerRotate {
    from {
      transform: rotate(90deg);
    } to {
      transform: rotate(450deg);
    }
  }

  width: 43%;
  right: 49.4%;
  height: 3px;
  background-color: #c47676;
  position: absolute;
  top: 50%;
  border-radius: 6px;
  transform-origin: 100%;
  transform: rotate(90deg);
  z-index: -1;
`;

export const ClockCardinalLines = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 190px;
  height: 190px;
  border-radius: 50%;

  &:before {
    content: '';
    position: absolute;
    width: 82%;
    height: 5px;
    border-radius: 6px;
    background-color: #87d3e0;
  }

  &:after {
    content: '';
    position: absolute;
    width: 82%;
    height: 5px;
    border-radius: 6px;
    background-color: #87d3e0;
    transform: rotate(90deg);
  }
`;

export const ClockExtraCardinalLines1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 190px;
  height: 190px;
  border-radius: 50%;

  &:before {
    content: '';
    position: absolute;
    width: 82%;
    height: 5px;
    border-radius: 6px;
    background-color: #656694;
    transform: rotate(30deg);
  }

  &:after {
    content: '';
    position: absolute;
    width: 82%;
    height: 5px;
    border-radius: 6px;
    background-color: #656694;
    transform: rotate(60deg);
  }
`;

export const ClockExtraCardinalLines2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 190px;
  height: 190px;
  border-radius: 50%;

  &:before {
    content: '';
    position: absolute;
    width: 82%;
    height: 5px;
    border-radius: 6px;
    background-color: #656694;
    transform: rotate(120deg);
  }

  &:after {
    content: '';
    position: absolute;
    width: 82%;
    height: 5px;
    border-radius: 6px;
    background-color: #656694;
    transform: rotate(150deg);
  }
`;

export const HowToUseTextContainer = styled.div`
  @keyframes show {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;
  position: relative;
  top: 30px;
  width: 90%;
  margin-left: -5%;
  animation: show 0.4s;
`;

export const HowToUseText = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 1.3rem;
  color: #7ed2e6;
`;