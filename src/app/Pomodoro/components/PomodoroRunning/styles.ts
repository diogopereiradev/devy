import styled from 'styled-components';

export const PomodoroRunningContainer = styled.div`
  @keyframes show {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 13px;
  position: relative;
  top: 30px;
  width: 90%;
  height: 47px;
  margin-left: -5%;
  animation: show 0.4s;
`;

export const PausePomodoroButton = styled.button`
  width: 80px;
  height: 35px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 1.3rem;
  color: #dddddd;
  border-radius: 4px;
  background-color: #515a8a;
  cursor: pointer;
`;

export const ResumePomodoroButton = styled.button`
  width: 80px;
  height: 35px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 1.3rem;
  color: #dddddd;
  border-radius: 4px;
  background-color: #59639c;
  cursor: pointer;
`;

export const PomodoroTimerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PomodoroTimerModeText = styled.p`
  font-family: Roboto;
  font-weight: 700;
  font-size: 1.3rem;
  color: #dddddd;
`;

export const PomodoroTimerText = styled.p`
  font-family: Roboto;
  font-weight: 700;
  font-size: 1.6rem;
  color: #969696;
`;

export const StopPomodoroButton = styled.button`
  width: 80px;
  height: 35px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 1.3rem;
  color: #dddddd;
  border-radius: 4px;
  background-color: #c95d62;
  cursor: pointer;
`;