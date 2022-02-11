import { apiGet } from './base';
import { PostProps } from '../domain/post';

export default function getUserFeed(username: string): Promise<PostProps[]> {
  return apiGet(`/user/feed/${username}`).then((resp) => {
    if (typeof resp.data === 'string' || resp.data instanceof String) {
      throw new Error(`${resp.data}`);
    }
    if (!Array.isArray(resp.data)) {
      throw new Error('Server responded with invalid data');
    }
    return resp.data;
  });
}
