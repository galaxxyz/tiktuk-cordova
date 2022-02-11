import { fireEvent, render, screen } from '@testing-library/react';
import { Paginator } from '.';

describe('Paginator', () => {
  const postsPerPage = 4;
  const totalPosts = 10;
  let currentPage = 1;
  const paginate = (n: number) => {
    currentPage = n;
  };

  test('renders Paginator component', () => {
    render(
      <Paginator
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        currentPage={currentPage}
        paginate={paginate}
      />,
    );

    const numberOfPages = Math.ceil(totalPosts / postsPerPage);
    for (let i = 1; i <= numberOfPages; i++) {
      expect(screen.getByText(i)).toBeInTheDocument();
    }
  });

  test('changes curent page', () => {
    const { rerender } = render(
      <Paginator
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        currentPage={currentPage}
        paginate={paginate}
      />,
    );
    expect(
      screen.getByText(`${currentPage}`).closest('li')?.getAttribute('class'),
    ).toMatch(/active/);
    screen.debug();

    fireEvent.click(screen.getByText(/2/));
    rerender(
      <Paginator
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        currentPage={currentPage}
        paginate={paginate}
      />,
    );
    expect(
      screen.getByText(`${currentPage}`).closest('li')?.getAttribute('class'),
    ).toMatch(/active/);
    screen.debug();

    screen.debug();
  });
});
