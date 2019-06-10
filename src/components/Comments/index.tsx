import './style.scss';
import React from 'react';
import UserInfo from '../UserInfo';
import Comment from './Comment';

const COMMENTS = [
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: 'this is a long comment. Here you can see it is long',
    replies: [
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: 'this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: 'this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: 'this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: 'this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: 'this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: 'this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: 'this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: 'this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: 'this is a long reply. Here you can see it is long',
      },
    ],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: 'this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: 'this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: 'this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: 'this is a long comment. Here you can see it is long',
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
        content: 'this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: 'this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: 'this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: 'this is a long reply. Here you can see it is long',
      },
      {
        profileSrc: '/images/profile.png',
        name: 'rafael de leon',
        content: 'this is a long reply. Here you can see it is long',
      },
    ],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: 'this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: 'this is a long comment. Here you can see it is long',
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
        content: 'this is a long reply. Here you can see it is long',
      },
    ],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: 'this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: 'this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: 'this is a long comment. Here you can see it is long',
    replies: [],
  },
  {
    profileSrc: '/images/profile.png',
    name: 'rafael de leon',
    content: 'this is a long comment. Here you can see it is long',
    replies: [],
  },
];

function Comments() {
  return (
    <div className="comments">
      <UserInfo
        name="rafael de leon"
        username="@rafaeldeleonp"
        posts={50}
        followers={125}
        description="This is the description of the photo. Photo description pushes content below."
      />
      {COMMENTS.map(comment => (
        <Comment
          profileSrc={comment.profileSrc}
          name={comment.name}
          content={comment.content}
          replies={comment.replies}
        />
      ))}
    </div>
  );
}

export default Comments;
