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
  loadMoreReplies?: () => void;
}

export interface RepliesState {
  replies: BaseCommentProps[];
  clickCounter: number;
  total: number;
}

export interface CommentsState {
  comments: CommentProps[];
  clickCounter: number;
  total: number;
}
