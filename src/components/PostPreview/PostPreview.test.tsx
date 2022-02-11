import { render, screen } from '@testing-library/react';
import { PostPreview } from '.';
import abbreviateNumber from '../../helpers/abbreviateNumber';

describe('PostPreviw', () => {
  test('renders PostPreview component', () => {
    const preview = {
      id: 'string',
      dynamicCover: 'string',
      playCount: 12345678,
    };

    render(<PostPreview preview={preview} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(
      screen.getByTestId('previewPlayCount').children[0].getAttribute('class'),
    ).toMatch(/fa-eye/);
    expect(screen.getByTestId('previewPlayCount')).toHaveTextContent(
      abbreviateNumber(preview.playCount),
    );
  });
});
