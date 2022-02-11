export interface UserProps {
  user: {
    id: string;
    uniqueId: string;
    nickname: string;
    avatarMedium: string;
    signature: string;
  };
  stats: {
    followerCount: number;
    followingCount: number;
    heart: number;
    heartCount: number;
    videoCount: number;
  };
}
