import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navigation } from '.';

describe('Navigation', () => {
  beforeEach(() => {
    render(
      <Router>
        <Navigation />
      </Router>,
    );
  });

  test('renders Navigation component with "Trending" navlink', () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Trending/ })).toBeInTheDocument();
  });

  test('redirect to right url when clicking navlinks', () => {
    fireEvent.click(screen.getByText(/Trending/));
    expect(window.location.href).toBe('http://localhost/tiktuk/');

    fireEvent.click(screen.getByAltText(/tiktuk logo/));
    expect(window.location.href).toBe('http://localhost/tiktuk/');
  });
});
