import './style.scss';
import React, { useState } from 'react';
import SVG from 'react-inlinesvg';
import LoadMoreSvg from '../../resources/svg/load-more.svg';
import UserInfo from '../UserInfo';
import Comment from './Comment';
import { CommentProps } from './comments-definitions';

const COMMENTS_LIMIT = 10;

const COMMENTS = [
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: '1 - this is a long comment. Here you can see it is long',
    replies: [
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: '1 - this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: '2 - this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: '3 - this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: '4 - this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: '5 - this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: '6 - this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: '7 - this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: '8 - this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: '9 - this is a long reply. Here you can see it is long',
      },
    ],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: '2 -  this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: '3 - this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: '4 - this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: '5 - this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: '6 - this is a long comment. Here you can see it is long',
    replies: [
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: '1 - this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: '2 - this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: '3 - this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: '4 - this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: '5 - this is a long reply. Here you can see it is long',
      },
    ],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: '7 - this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: '8 - this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: 'this is a long comment. Here you can see it is long',
    replies: [
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: '1 - this is a long reply. Here you can see it is long',
      },
    ],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: '9 - this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: '10 - this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: '11 - this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: '12 - this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: '13 - this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: '14 - this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: '15 - this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: '16 - this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: '17 - this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: '18 - this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: '19 - this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: '20 - this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: '21 - this is a long comment. Here you can see it is long',
    replies: [],
  },
];

function Comments() {
  const [comments, setComments] = useState<CommentProps[]>(
    COMMENTS.slice(0, COMMENTS_LIMIT),
  );

  const loadMoreComments = () => {
    const endIndex =
      COMMENTS.length === comments.length
        ? COMMENTS.length
        : comments.length + COMMENTS_LIMIT;

    setComments(comments.concat(COMMENTS.slice(comments.length, endIndex)));
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
      {comments.map(comment => (
        <Comment
          profileSrc={comment.profileSrc}
          name={comment.name}
          content={comment.content}
          replies={comment.replies}
        />
      ))}
      {COMMENTS.length !== comments.length && (
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
