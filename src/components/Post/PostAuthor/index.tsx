import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PostAuthorProps } from '../../../domain/post';
import styles from './PostAuthor.module.css';

export function PostAuthor({ author }: { author: PostAuthorProps }) {
  return (
    <Container className="px-0 pb-3">
      <Link className={styles.authorLink} to={`/${author.uniqueId}`}>
        <Row>
          <Col xs="auto">
            <Image
              src={author.avatarThumb}
              width="50"
              height="50"
              roundedCircle
            />
          </Col>
          <Col className="px-0">
            <p className={styles.authorName}>{author.uniqueId}</p>
            <p className={styles.authorNickName}>{author.nickname}</p>
          </Col>
        </Row>
      </Link>
    </Container>
  );
}
