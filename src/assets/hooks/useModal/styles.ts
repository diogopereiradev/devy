import styled from 'styled-components';

interface ModalContainerProps {
  width: number,
  height: number,
  color: string;
}

export const ModalAlignmentContainer = styled.div`
  @keyframes show {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }

  @keyframes hide {
    from {
      opacity: 1;
    } to {
      opacity: 0;
    }
  }

  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  animation: show 0.4s;
  z-index: 9999;

  &:before {
    content: '';
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #1e1e1e99;
  }
`;

export const ModalContainer = styled.div<ModalContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 5px;
  background-color: ${({ color }) => color};
`;