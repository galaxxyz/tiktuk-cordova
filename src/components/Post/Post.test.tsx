import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mocked } from 'jest-mock';
import { Post } from '.';
import { PostAuthor } from './PostAuthor';
import { PostStats } from './PostStats';

jest.mock('./PostAuthor');
mocked(PostAuthor).mockImplementation(() => <div>mocked PostAuthor</div>);

jest.mock('./PostStats');
mocked(PostStats).mockImplementation(() => <div>mocked PostStats</div>);

describe('Post', () => {
  const post = {
    id: 'string',
    desc: 'string',
    video: {
      height: 960,
      width: 540,
      playAddr: 'string',
      dynamicCover: 'string',
    },
    author: {
      id: 'string',
      uniqueId: 'string',
      nickname: 'string',
      avatarThumb: 'string',
    },
    stats: {
      diggCount: 10000000000,
      shareCount: 110000000000,
      commentCount: 12000000000,
      playCount: 13000000000,
    },
  };

  // https://stackoverflow.com/questions/62732346/test-exception-unstable-flushdiscreteupdates
  Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
    set: jest.fn(),
  });

  render(
    <Router>
      <Post post={post} />
    </Router>,
  );

  test('renders Post component', () => {
    expect(screen.getByTestId('videoSource')).toHaveAttribute(
      'src',
      post.video.playAddr,
    );
    expect(screen.getByText(post.desc)).toBeInTheDocument();
    expect(screen.getByText('mocked PostAuthor')).toBeInTheDocument();
    expect(screen.getByText('mocked PostStats')).toBeInTheDocument();
  });
});
