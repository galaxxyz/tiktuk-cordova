import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import styles from './PostPreview.module.css';
import { PostPreviewProps } from '../../domain/post';
import abbreviateNumber from '../../helpers/abbreviateNumber';

export function PostPreview({ preview }: { preview: PostPreviewProps }) {
  return (
    <Container className="my-3 text-center">
      <img className={styles.video} alt="" src={preview.dynamicCover} />
      <div data-testid="previewPlayCount">
        <FontAwesomeIcon
          icon={faEye as IconProp}
          size="xs"
          className={styles.iconPlayCount}
        />
        <p className={styles.iconPlayCount}>
          {` ${abbreviateNumber(preview.playCount)}`}
        </p>
      </div>
    </Container>
  );
}
