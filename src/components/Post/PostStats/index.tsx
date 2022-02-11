import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faComments, faEye } from '@fortawesome/free-solid-svg-icons';
import { PostStatsProps } from '../../../domain/post';
import abbreviateNumber from '../../../helpers/abbreviateNumber';

export function PostStats({ stats }: { stats: PostStatsProps }) {
  return (
    <Container>
      <Row>
        <Col className="text-center" data-testid="diggCount">
          <FontAwesomeIcon icon={faHeart as IconProp} size="lg" />
          <p>{abbreviateNumber(stats.diggCount)}</p>
        </Col>
        <Col className="text-center" data-testid="commentCount">
          <FontAwesomeIcon icon={faComments as IconProp} size="lg" />
          <p>{abbreviateNumber(stats.commentCount)}</p>
        </Col>
        <Col className="text-center" data-testid="playCount">
          <FontAwesomeIcon icon={faEye as IconProp} size="lg" />
          <p>{abbreviateNumber(stats.playCount)}</p>
        </Col>
      </Row>
    </Container>
  );
}
