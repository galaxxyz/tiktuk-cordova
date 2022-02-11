import { apiGet } from './base';
import { UserProps } from '../domain/user';

export default function getUserInfo(username: string): Promise<UserProps> {
  return apiGet(`/user/info/${username}`).then((resp) => {
    if (typeof resp.data === 'string' || resp.data instanceof String) {
      throw new Error(`${resp.data}`);
    }
    return resp.data;
  });
}
