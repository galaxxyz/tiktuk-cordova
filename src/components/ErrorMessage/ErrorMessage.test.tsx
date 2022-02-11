import { render, screen } from '@testing-library/react';
import { ErrorMessage } from '.';

describe('ErrorMessage', () => {
  test('renders ErrorMessage component', () => {
    const message = 'Some error happened :(';

    render(<ErrorMessage text={message} />);

    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
