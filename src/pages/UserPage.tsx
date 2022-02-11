import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader, ErrorMessage } from '@galaxxyz/my-test-component-library';
import info from '../assets/user-info.json';
import getUserInfo from '../api/getUserInfo';
import { UserProps } from '../domain/user';
import { UserInfo } from '../components';
import UserFeed from './UserFeed';

const initialInfoState: UserProps = {
  user: {
    id: '00000000000000',
    uniqueId: 'username',
    nickname: 'User Name',
    avatarMedium: '',
    signature: '',
  },
  stats: {
    followerCount: 0,
    followingCount: 0,
    heart: 0,
    heartCount: 0,
    videoCount: 0,
  },
};

export default function UserPage() {
  const { nickname } = useParams() as { nickname: string };
  const [userInfo, setUserInfo] = useState<UserProps>(initialInfoState);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (process.env.REACT_APP_MODE === 'DEV') {
      setUserInfo(info);
      setLoading(false);
    } else {
      getUserInfo(nickname)
        .then((resp) => {
          setUserInfo(resp);
          setLoading(false);
        })
        .catch(() => {
          setErrorMessage(
            `There was an error while loading data from the server.
           Please reload the page or visit it later.`,
          );
          setLoading(false);
        });
    }
  }, []);

  if (loading) return <Loader />;

  if (errorMessage) return <ErrorMessage text={errorMessage} />;

  return (
    <>
      <UserInfo info={userInfo} />
      <UserFeed nickname={nickname} />
    </>
  );
}
