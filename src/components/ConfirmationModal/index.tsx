import React from 'react';
import {
  ConfirmationModalContainer,
  Title,
  Description,
  ButtonsContainer,
  ConfirmButton,
  CloseButton
} from './styles';

interface ConfirmationModalProps {
  title?: string,
  description?: JSX.Element | string,
  confirmButtonText?: string,
  closeButtonText?: string,
  onConfirm?: () => void,
  onClose?: () => void
}

export function ConfirmationModal(props: ConfirmationModalProps): JSX.Element {
  return(
    <ConfirmationModalContainer>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <ButtonsContainer>
        <ConfirmButton onClick={() => props.onConfirm?.()}>{props.confirmButtonText}</ConfirmButton>
        <CloseButton onClick={() => props.onClose?.()}>{props.closeButtonText}</CloseButton>
      </ButtonsContainer>
    </ConfirmationModalContainer>
  );
}