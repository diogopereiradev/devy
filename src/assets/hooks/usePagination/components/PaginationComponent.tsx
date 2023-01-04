import React from 'react';
import {
  SoundsPaginationContainer,
  Pagination,
  PaginationButton
} from '../styles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { getPagesButtons } from '../utils/getPagesButtons';

interface PaginationComponentProps {
  page: number,
  maxPages: number,
  buttonsPerPagination: number,
  buttonColor: string,
  buttonSelectedColor: string,
  textColor: string,
  textFont: string,
  textWeight: number
  arrowsColor: string,
  goToPage: (page: number) => void
  handlePrevPage: () => void,
  handleNextPage: () => void,
}

export function PaginationComponent(props: PaginationComponentProps): JSX.Element {
  return(
    <SoundsPaginationContainer>
      <Pagination>
        <PaginationButton 
          style={{ backgroundColor: props.buttonColor }} 
          onClick={props.handlePrevPage}
        >
          <FaChevronLeft
            size={14}
            color={props.arrowsColor}
          />
        </PaginationButton>

        {getPagesButtons({
          page: props.page,
          maxPages: props.maxPages,
          buttonsPerPagination: props.buttonsPerPagination,
          buttonColor: props.buttonColor,
          buttonSelectedColor: props.buttonSelectedColor,
          goToPage: props.goToPage
        })}

        <PaginationButton 
          style={{ backgroundColor: props.buttonColor }} 
          onClick={props.handleNextPage}
        >
          <FaChevronRight
            size={14}
            color={props.arrowsColor}
          />
        </PaginationButton>
      </Pagination>
    </SoundsPaginationContainer>
  );
}