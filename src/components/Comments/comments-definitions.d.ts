export interface BaseCommentProps {
  profile: string;
  name: string;
  content: string;
}

export interface CommentProps extends BaseCommentProps {
  replies: BaseCommentProps[];
}

export interface CommentsProps {
  data: CommentProps[];
}

export interface ContentProps {
  name: string;
  content: string;
  loadingReplies?: boolean;
  totalReplies?: number;
  counter?: number;
  loadMoreReplies?: () => void;
}

export interface RepliesState {
  replies: BaseCommentProps[];
  clickCounter: number;
  total: number;
  loading: boolean;
}
