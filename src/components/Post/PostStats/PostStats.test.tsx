import { render, screen } from '@testing-library/react';
import { PostStats } from '.';
import abbreviateNumber from '../../../helpers/abbreviateNumber';

describe('PostStats', () => {
  const stats = {
    diggCount: 10000000000,
    shareCount: 110000000000,
    commentCount: 12000000000,
    playCount: 13000000000,
  };

  beforeEach(() => {
    render(<PostStats stats={stats} />);
  });

  test('renders diggCount', () => {
    expect(
      screen.getByTestId('diggCount').children[0].getAttribute('class'),
    ).toMatch(/fa-heart/);
    expect(screen.getByTestId('diggCount')).toHaveTextContent(
      abbreviateNumber(stats.diggCount),
    );
  });

  test('renders commentCount', () => {
    expect(
      screen.getByTestId('commentCount').children[0].getAttribute('class'),
    ).toMatch(/fa-comments/);
    expect(screen.getByTestId('commentCount')).toHaveTextContent(
      abbreviateNumber(stats.commentCount),
    );
  });

  test('renders playCount', () => {
    expect(
      screen.getByTestId('playCount').children[0].getAttribute('class'),
    ).toMatch(/fa-eye/);
    expect(screen.getByTestId('playCount')).toHaveTextContent(
      abbreviateNumber(stats.playCount),
    );
  });
});
