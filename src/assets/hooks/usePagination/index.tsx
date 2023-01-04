import React, { useState } from 'react';
import { calculateMaxPages } from './utils/calculateMaxPages';
import { PaginationComponent } from './components/PaginationComponent';

interface PaginationOptions {
  items: JSX.Element[],
  perPage: number,
  buttonsPerPagination: number,
  buttonColor: string,
  buttonSelectedColor: string,
  textColor: string,
  textFont: string,
  textWeight: number
  arrowsColor: string,
}

interface Pagination {
  data: JSX.Element[],
  currentPage: number,
  paginationComponent: JSX.Element
}

export function usePagination(options: PaginationOptions): Pagination  {
  const [page, setPage] = useState(1);
  const maxPages = calculateMaxPages(options.items.length, options.perPage);
  const pageItems = options.items.slice((page - 1) * options.perPage, page * options.perPage);

  const handleNextPage = () => {
    if(page == maxPages) return;
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if(page == 1) return;
    setPage(page - 1);
  };

  const goToPage = (page: number) => {
    setPage(page);
  };

  return {
    data: pageItems,
    currentPage: page,
    paginationComponent: 
    <PaginationComponent
      page={page}
      maxPages={maxPages}
      buttonsPerPagination={options.buttonsPerPagination}
      buttonColor={options.buttonColor}
      buttonSelectedColor={options.buttonSelectedColor}
      textColor={options.textColor}
      textFont={options.textFont}
      textWeight={options.textWeight}
      arrowsColor={options.arrowsColor}
      goToPage={goToPage}
      handlePrevPage={handlePrevPage}
      handleNextPage={handleNextPage}
    />
  };
}