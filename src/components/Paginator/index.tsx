import { Pagination, PageItem } from 'react-bootstrap';

interface PagiProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

export function Paginator({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: PagiProps) {
  const pageNumbers = Array.from(
    {
      length: Math.ceil(totalPosts / postsPerPage),
    },
    (_, i) => i + 1,
  );

  return (
    <Pagination>
      {pageNumbers.map((number) => (
        <PageItem
          key={number}
          active={number === currentPage}
          onClick={() => paginate(number)}
        >
          {number}
        </PageItem>
      ))}
    </Pagination>
  );
}
