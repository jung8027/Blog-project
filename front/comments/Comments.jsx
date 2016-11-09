import React from 'react';
import Comment from './Comment.jsx';

const Posts = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Comments:</h1>
        {this.props.post.comments.map((post, indx) => <Comment key={indx} comment={post} />)}
      </div>
    );
  }
});

Posts.propTypes = {
  posts: React.PropTypes.array
}


export default Posts;
