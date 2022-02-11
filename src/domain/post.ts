export interface PostProps {
  id: string;
  desc: string;
  video: {
    height: number;
    width: number;
    playAddr: string;
    dynamicCover: string;
  };
  author: PostAuthorProps;
  stats: PostStatsProps;
}

export interface PostAuthorProps {
  id: string;
  uniqueId: string;
  nickname: string;
  avatarThumb: string;
}

export interface PostStatsProps {
  diggCount: number;
  shareCount: number;
  commentCount: number;
  playCount: number;
}

export interface PostPreviewProps {
  id: string;
  dynamicCover: string;
  playCount: number;
}
