import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Loader, ErrorMessage } from '@galaxxyz/my-test-component-library';
import getTrendingFeed from '../api/getTrendingFeed';
import posts from '../assets/trending-feed.json';
import { PostProps } from '../domain/post';
import { Post } from '../components';

export default function TrendingFeed() {
  const [trendingPosts, setTrendingPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (process.env.REACT_APP_MODE === 'DEV') {
      setTrendingPosts(posts);
      setLoading(false);
    } else {
      getTrendingFeed()
        .then((resp) => {
          setTrendingPosts(resp);
          setLoading(false);
        })
        .catch(() => {
          setErrorMessage(
            'There was an error while loading data from the server. Please reload the page or visit it later.',
          );
          setLoading(false);
        });
    }
  }, []);

  if (loading) return <Loader />;

  if (errorMessage) return <ErrorMessage text={errorMessage} />;

  return (
    <Container>
      {trendingPosts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </Container>
  );
}
