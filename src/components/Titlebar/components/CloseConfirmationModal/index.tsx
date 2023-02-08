import React, { useRef } from 'react';
import {
  CloseConfirmationModalContainer,
  Title,
  Form,
  RadioInputsContainer,
  RadioInput,
  SubmitButtonsContainer,
  CancelButton,
  SubmitButton
} from './styles';
import { useTranslation } from '../../../../assets/hooks/useTranslation';

export function CloseConfirmationModal({ onConfirm, onClose }: { onConfirm: (value: number) => void, onClose: () => void }): JSX.Element {
  const { t } = useTranslation();
  const closeAppRef = useRef<HTMLInputElement>(null);
  const systemTrayRef = useRef<HTMLInputElement>(null);

  const handleConfirm = () => {
    if(closeAppRef.current && closeAppRef.current.checked) {
      onConfirm(0);
    } else if(systemTrayRef.current && systemTrayRef.current.checked) {
      onConfirm(1);
    }
  };

  return(
    <CloseConfirmationModalContainer>
      <Title>{t.data['titlebar.close.confirmationmodal.title']}</Title>
      <Form>
        <RadioInputsContainer>
          <RadioInput ref={closeAppRef} id='closeapp' name='confirmation_input' required/>
          <label style={{ cursor: 'pointer' }} htmlFor='closeapp'>{t.data['titlebar.close.confirmationmodal.closeapp']}</label>
        </RadioInputsContainer>
        <RadioInputsContainer>
          <RadioInput ref={systemTrayRef} id='systemtray' name='confirmation_input' required/>
          <label style={{ cursor: 'pointer' }} htmlFor='systemtray'>{t.data['titlebar.close.confirmationmodal.form.systemtray']}</label>
        </RadioInputsContainer>
      </Form>
      <SubmitButtonsContainer>
        <CancelButton onClick={() => onClose()}>{t.data['titlebar.close.confirmationmodal.form.submit.button.cancel']}</CancelButton>
        <SubmitButton onClick={handleConfirm}>{t.data['titlebar.close.confirmationmodal.form.submit.button.confirm']}</SubmitButton>
      </SubmitButtonsContainer>
    </CloseConfirmationModalContainer>
  );
}