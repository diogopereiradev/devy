import styled from 'styled-components';

export const SoundsPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Pagination = styled.div`
  display: flex;
  gap: 5px;
  padding-right: 4px;
`;

export const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 1.3rem;
  color: #dddddd;
  border-radius: 4px;
  background-color: #505073;
  cursor: pointer;

  &:hover {
    background-color: #464666;
  }
`;