import styled from 'styled-components';

export const ConfirmationModalContainer  = styled.div`
  width: 100%;
  height: 100%;
  padding: 18px 25px;
`;

export const Title = styled.h2`
  width: 210px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 1.5rem;
  color: #dddddd;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Description = styled.p`
  width: 200px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 1.3rem;
  color: #c8c8c8;
  overflow-wrap: break-word;
  margin-top: 10px;

  span {
    font-family: Roboto;
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 20px;
  right: 20px;
  gap: 5px;
  margin-top: 13px;
`;

export const ConfirmButton = styled.button`
  width: 100px;
  height: 35px;
  font-family: Roboto;
  font-weight: 600;
  font-size: 1.1rem;
  color: #202020;
  border-radius: 4px;
  background-color: #67c78c;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  width: 100px;
  height: 35px;
  font-family: Roboto;
  font-weight: 600;
  font-size: 1.1rem;
  color: #202020;
  border-radius: 4px;
  background-color: #7b7dad;
  cursor: pointer;
`;