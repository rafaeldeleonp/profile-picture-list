export interface BaseCommentProps {
  profileSrc: string;
  name: string;
  content: string;
}

export interface CommentProps extends BaseCommentProps {
  replies: BaseCommentProps[];
}

export interface ContentProps {
  name: string;
  content: string;
  totalReplies?: number;
  counter?: number;
  onRepliesClick?: () => void;
}

export interface RepliesState {
  clickCounter: number;
  total: number;
}
