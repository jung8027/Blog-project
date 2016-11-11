import React from 'react';
import Comment from './Comment.jsx';

const Comments = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Comments:</h1>
        {this.props.post.comments.map((post, indx) =>
        	 <Comment key={indx} 
        	 		  comment={post}
        	 		  post_id={this.props.post._id} 
        	 		  refresh={this.props.refresh} />
        )}
      </div>
    );
  }
});

Comments.propTypes = {
  comments: React.PropTypes.array
}


export default Comments;
