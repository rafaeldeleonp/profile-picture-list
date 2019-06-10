import './style.scss';
import React from 'react';
import UserInfo from '../UserInfo';
import ListTitle from '../ListTitle';
import Comment from './Comment';

function Comments() {
  return (
    <div className="comments">
      <UserInfo
        name="rafael de leon"
        username="@rafaeldleonp"
        posts={50}
        followers={125}
        description="This is the description of the photo. Photo description pushes content below."
      />
      <ListTitle title="comments" />
      <Comment
        profileSrc="/images/profile.png"
        name="rafael de leon"
        content="this is a long comment. Here you can see it is long"
      />
      <Comment
        profileSrc="/images/profile.png"
        name="rafael de leon"
        content="this is a long comment. Here you can see it is long"
      />
      <Comment
        profileSrc="/images/profile.png"
        name="rafael de leon"
        content="this is a long comment. Here you can see it is long"
      />
      <Comment
        profileSrc="/images/profile.png"
        name="rafael de leon"
        content="this is a long comment. Here you can see it is long"
      />
      <Comment
        profileSrc="/images/profile.png"
        name="rafael de leon"
        content="this is a long comment. Here you can see it is long"
      />
      <Comment
        profileSrc="/images/profile.png"
        name="rafael de leon"
        content="this is a long comment. Here you can see it is long"
      />
      <Comment
        profileSrc="/images/profile.png"
        name="rafael de leon"
        content="this is a long comment. Here you can see it is long"
      />
      <Comment
        profileSrc="/images/profile.png"
        name="rafael de leon"
        content="this is a long comment. Here you can see it is long"
      />
      <Comment
        profileSrc="/images/profile.png"
        name="rafael de leon"
        content="this is a long comment. Here you can see it is long"
      />
    </div>
  );
}

export default Comments;
