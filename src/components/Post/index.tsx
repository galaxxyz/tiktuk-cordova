import { Container, Row, Col } from 'react-bootstrap';
import styles from './Post.module.css';
import { PostProps } from '../../domain/post';
import { PostAuthor } from './PostAuthor';
import { PostStats } from './PostStats';

export function Post({ post }: { post: PostProps }) {
  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col sm="auto" xs={12} className="text-center">
          <video
            className={styles.video}
            height={post.video.height * 0.4}
            width={post.video.width * 0.4}
            controls
            loop
            autoPlay
            muted
          >
            <source
              data-testid="videoSource"
              src={post.video.playAddr}
              type="Video/mp4"
            />
          </video>
        </Col>
        <Col sm={4} xs={12} className="py-3">
          <PostAuthor author={post.author} />
          <p>{post.desc}</p>
          <PostStats stats={post.stats} />
        </Col>
      </Row>
    </Container>
  );
}
