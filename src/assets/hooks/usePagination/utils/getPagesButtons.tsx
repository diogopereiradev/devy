import React from 'react';
import {
  PaginationButton
} from '../styles';

interface GetPagesButtonsOptions {
  page: number,
  maxPages: number,
  buttonsPerPagination: number,
  buttonColor: string,
  buttonSelectedColor: string,
  goToPage: (page: number) => void
}

export function getPagesButtons(options: GetPagesButtonsOptions): JSX.Element[] {
  const { 
    page, 
    maxPages,
    buttonsPerPagination, 
    buttonColor, 
    buttonSelectedColor, 
    goToPage 
  } = options;
  const result: JSX.Element[] = [];

  let start = page - 1;
  let end = page + 1;

  if (page === 1) {
    end++;
  } else if (page === maxPages) {
    start--;
  }

  for(let i = start; i <= end; i++) {
    if (i < 1 || i > maxPages) continue;
    result.push(
      <PaginationButton 
        key={Math.random()} 
        onClick={() => goToPage(i)} 
        style={
          { backgroundColor: i === page? 
            buttonSelectedColor : 
            buttonColor 
          }}
      >
        {i}
      </PaginationButton>);
  }

  if (maxPages > buttonsPerPagination && page < maxPages - 1) {
    result.push(<PaginationButton key={Math.random()} style={{ backgroundColor: options.buttonColor }}>...</PaginationButton>);
    result.push(<PaginationButton key={maxPages} onClick={() => goToPage(maxPages)} style={{ backgroundColor: options.buttonColor }}>{maxPages}</PaginationButton>);
  }
  return result;
}