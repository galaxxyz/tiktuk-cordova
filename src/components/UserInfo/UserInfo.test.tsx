import { render, screen } from '@testing-library/react';
import { UserInfo } from '.';
import abbreviateNumber from '../../helpers/abbreviateNumber';

describe('UserInfo', () => {
  const info = {
    user: {
      id: 'id',
      uniqueId: 'uniqueId',
      nickname: 'nickname',
      avatarMedium: 'avatarMedium',
      signature: 'signature',
    },
    stats: {
      followerCount: 1500000,
      followingCount: 1500000,
      heart: 1500000,
      heartCount: 1500000,
      videoCount: 1500000,
    },
  };

  test('renders User information component', () => {
    const { rerender } = render(<UserInfo info={info} />);
    expect(screen.getByText(`@${info.user.uniqueId}`)).toBeInTheDocument();
    expect(screen.getByText(info.user.nickname)).toBeInTheDocument();
    expect(screen.getByTestId('signature')).toBeInTheDocument();

    info.user.signature = '';
    rerender(<UserInfo info={info} />);
    expect(screen.queryByTestId('signature')).not.toBeInTheDocument();
  });

  test('renders followerCount', () => {
    render(<UserInfo info={info} />);
    expect(
      screen.getByTestId('followerCount').children[0].getAttribute('class'),
    ).toMatch(/fa-users/);
    expect(screen.getByTestId('followerCount')).toHaveTextContent(
      abbreviateNumber(info.stats.followerCount),
    );
  });

  test('renders heartCount', () => {
    render(<UserInfo info={info} />);
    expect(
      screen.getByTestId('heartCount').children[0].getAttribute('class'),
    ).toMatch(/fa-heart/);
    expect(screen.getByTestId('heartCount')).toHaveTextContent(
      abbreviateNumber(info.stats.heartCount),
    );
  });

  test('renders videoCount', () => {
    render(<UserInfo info={info} />);
    expect(
      screen.getByTestId('videoCount').children[0].getAttribute('class'),
    ).toMatch(/fa-play/);
    expect(screen.getByTestId('videoCount')).toHaveTextContent(
      abbreviateNumber(info.stats.videoCount),
    );
  });
});
