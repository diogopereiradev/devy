import React, { useState, useCallback, useRef } from 'react';
import {
  ModalAlignmentContainer,
  ModalContainer
} from './styles';
import { MdOutlineClose } from 'react-icons/md';

interface ModalParams {
  width: number,
  height: number,
  color: string,
  content: JSX.Element;
}

interface ModalData {
  modal: JSX.Element,
  open: () => void,
  close: () => void,
  toggle: () => void;
}

export function useModal(options: ModalParams): ModalData {
  const [isOpen, setIsOpen] = useState(false);
  const mainModalContainerRef = useRef<HTMLDivElement>(null);
  const {
    width,
    height,
    color,
    content
  } = options;

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if(mainModalContainerRef.current) 
      mainModalContainerRef.current.style.animation = 'hide 0.4s';
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  }, [isOpen]);

  const handleToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return {
    modal: (
      <>
        {isOpen && (
          <ModalAlignmentContainer ref={mainModalContainerRef}>
            <ModalContainer
              width={width}
              height={height}
              color={color}
            >
              <MdOutlineClose
                onClick={() => handleClose()}
                style={{ 
                  position: 'absolute', 
                  right: '20px', 
                  top: '15px', 
                  cursor: 'pointer' 
                }}
                size={23}
                color='#dddddd'
              />
              {content}
            </ModalContainer>
          </ModalAlignmentContainer>
        )}
      </>
    ),
    open: handleOpen,
    close: handleClose,
    toggle: handleToggle
  };
}