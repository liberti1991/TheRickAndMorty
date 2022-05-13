import styled from "styled-components";
import ReactPaginate from "react-paginate";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const FooterPagination = ({ pageCount, changePage }) => {
  return (
    <Footer>
      <ReactPaginate
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        previousLabel={<BsArrowLeftCircleFill />}
        nextLabel={<BsArrowRightCircleFill />}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"containerClassName"}
        previousLinkClassName={"previousLinkClassName"}
        nextLinkClassName={"nextLinkClassName"}
        disabledClassName={"disabledClassName"}
        activeClassName={"activeClassName"}
      />
    </Footer>
  );
};

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 10px 0 30px;
  .containerClassName {
    display: flex;
    align-items: center;
    font-size: 18px;
    cursor: pointer;
    font-weight: 600;
    gap: 20px;
    list-style-type: none;
  }
  
  .previousLinkClassName,
  .nextLinkClassName {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: grey;
    cursor: pointer;
    svg {
      width: 25px;
      height: 25px;
    }
  }

  .disabledClassName {
    display: none;
  }

  .activeClassName {
    padding: 5px 10px;
    background-color: orange;
    border-radius: 5px;
    color: black;
    :hover {
      transform: scale(1.05);
    }
  }
`;