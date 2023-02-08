import { FormEvent } from 'react';
import styled from 'styled-components';

export const CloseConfirmationModalContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  padding: 25px 25px;
`;

export const Title = styled.h2`
  font-family: Roboto;
  font-weight: 600;
  font-size: 1.7rem;
  color: #d8d8d8;
`;

export const Form = styled.form.attrs({ onSubmit: (e: FormEvent<HTMLFormElement>) => e.preventDefault() })`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  top: 30px;
  width: 100%;
  height: 100%;
`;

export const RadioInputsContainer = styled.div`
  display: flex;
  gap: 9px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 2.4rem;
`;

export const RadioInput = styled.input.attrs({ type: 'radio' })`
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #c8c8c8;
  border-radius: 4px;
  margin-top: -1px;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    transform: scale(0);
    transition: .2s;
    border-radius: 3px;
    background-color: #71cede;
  }
  &:checked:before {
    transform: scale(1);
  }
`;

export const SubmitButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  right: 30px;
  bottom: 20px;
`;

export const CancelButton = styled.button`
  width: 100px;
  height: 35px;
  font-family: Roboto;
  font-weight: 600;
  font-size: 1.3rem;
  color: #1e1e1e;
  border-radius: 4px;
  background-color: #606060;
  cursor: pointer;
  &:hover {
    background-color: #404040;
  }
`;

export const SubmitButton = styled.button`
  width: 100px;
  height: 35px;
  font-family: Roboto;
  font-weight: 600;
  font-size: 1.3rem;
  color: #1e1e1e;
  border-radius: 4px;
  background-color: #7cbf7d;
  cursor: pointer;
  &:hover {
    background-color: #6ca36d;
  }
`;