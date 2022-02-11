import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PostAuthor } from '.';

describe('PostAuthor', () => {
  const author = {
    id: 'id',
    uniqueId: 'uniqueId',
    nickname: 'nickname',
    avatarThumb: 'avatarThumb',
  };

  beforeEach(() => {
    render(
      <Router>
        <PostAuthor author={author} />
      </Router>,
    );
  });

  test('renders PostAuthor component', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(author.uniqueId)).toBeInTheDocument();
    expect(screen.getByText(author.nickname)).toBeInTheDocument();
  });

  test('redirect to the userpage when clicking on the component', () => {
    fireEvent.click(screen.getByRole('link'));
    expect(window.location.href).toBe(
      `http://localhost/tiktuk/${author.uniqueId}`,
    );
  });
});
