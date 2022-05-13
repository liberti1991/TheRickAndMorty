import { useState } from "react";

export const usePagination = (filteredCharacters, amountOfItemsPerPage) => {
  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = amountOfItemsPerPage;

  const pagesVisited = pageNumber * itemsPerPage;

  const pageCount = Math.ceil(filteredCharacters.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return { pagesVisited, pageCount, itemsPerPage, changePage };
};
