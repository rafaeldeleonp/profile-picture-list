import './style.scss';
import React from 'react';
import UserInfo from '../UserInfo';
import ListTitle from '../ListTitle';

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
    </div>
  );
}

export default Comments;
