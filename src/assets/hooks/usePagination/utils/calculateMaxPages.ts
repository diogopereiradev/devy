export function calculateMaxPages(dataLength: number, dataPerPage: number): number {
  const result = Math.ceil(dataLength / dataPerPage);
  return result == 0? 1 : result;
}