let currentPage = 1;

export const setCurrentPage = (newPage) => {
  currentPage = newPage;
};

export const getCurrentPage = () => {
  return currentPage;
};