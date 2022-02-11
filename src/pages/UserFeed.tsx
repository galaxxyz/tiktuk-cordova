import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Loader, ErrorMessage } from '@galaxxyz/my-test-component-library';
import { PostPreview, Paginator } from '../components';
import getUserFeed from '../api/getUserFeed';
import { PostProps } from '../domain/post';

export default function UserFeed({ nickname }: { nickname: string }) {
  const [feed, setFeed] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    getUserFeed(nickname)
      .then((resp) => {
        setFeed(resp);
        setLoading(false);
      })
      .catch(() => {
        setErrorMessage(
          `There was an error while loading data from the server.
           Please reload the page or visit it later.`,
        );
        setLoading(false);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = feed.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) return <Loader />;

  if (errorMessage) return <ErrorMessage text={errorMessage} />;

  return (
    <Container>
      <Row className="justify-content-center" md={7}>
        {currentPosts.map((post) => (
          <Col key={post.id} sm="auto" xs="auto">
            <PostPreview
              preview={{
                id: post.id,
                dynamicCover: post.video.dynamicCover,
                playCount: post.stats.playCount,
              }}
            />
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center">
        <Col sm="auto">
          <Paginator
            postsPerPage={postsPerPage}
            totalPosts={feed.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </Col>
      </Row>
    </Container>
  );
}
