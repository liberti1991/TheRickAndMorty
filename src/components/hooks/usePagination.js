import { useState } from "react";

export const usePagination = (filteredCharacters) => {
  const [pageNumber, setPageNumber] = useState(0);

  let itemsPerPage = 8;

  const pagesVisited = pageNumber * itemsPerPage;

  const pageCount = Math.ceil(filteredCharacters.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);      
  };

  return { pagesVisited, pageCount, itemsPerPage, changePage };
};
