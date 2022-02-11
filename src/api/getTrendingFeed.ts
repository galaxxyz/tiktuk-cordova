import { apiGet } from './base';
import { PostProps } from '../domain/post';

export default function getTrendingFeed(): Promise<PostProps[]> {
  return apiGet('/trending/feed').then((resp) => {
    if (typeof resp.data === 'string' || resp.data instanceof String) {
      throw new Error(`${resp.data}`);
    }
    if (!Array.isArray(resp.data)) {
      throw new Error('Server responded with invalid data');
    }
    return resp.data;
  });
}
