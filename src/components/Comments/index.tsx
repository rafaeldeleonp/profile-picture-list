import './style.scss';
import React, { useState, useEffect } from 'react';
import SVG from 'react-inlinesvg';
import LoadMoreSvg from '../../resources/svg/load-more.svg';
import UserInfo from '../UserInfo';
import Comment from './Comment';
import { CommentsProps, CommentProps } from './comments-definitions';

const COMMENTS_LIMIT = 10;

function Comments({ data }: CommentsProps) {
  const [comments, setComments] = useState<CommentProps[]>([]);

  useEffect(() => {
    setComments(data.slice(0, COMMENTS_LIMIT));
  }, [data]);

  const loadMoreComments = () => {
    const endIndex =
      data.length === comments.length
        ? data.length
        : comments.length + COMMENTS_LIMIT;

    setComments(comments.concat(data.slice(comments.length, endIndex)));
  };

  return (
    <div className="comments">
      <UserInfo
        name="rafael de leon"
        username="@rafaeldeleonp"
        posts={50}
        followers={125}
        description="This is the description of the photo. Photo description pushes content below."
      />
      <div className="comments-container">
        {comments.map((comment, index) => (
          <Comment
            key={index}
            profileSrc={comment.profileSrc}
            name={comment.name}
            content={comment.content}
            replies={comment.replies}
          />
        ))}
      </div>
      {data.length !== comments.length && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={loadMoreComments}>
            <SVG className="load-more-icon" src={LoadMoreSvg} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Comments;
