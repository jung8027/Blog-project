import React from 'react';
import '../app.css'

const Comment = React.createClass({
  render: function() {
    return (
      <div style={posts}>
        <h2>{this.props.comment.username}</h2>
        <p>{this.props.comment.text}</p>
        <p>{this.props.comment.date}</p>
      </div>
    );
  }
});

const posts = {
    backgroundColor: 'white',
    display: 'inline-flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '15px',
    margin: "10px",
    textalign: "right",
}

Comment.propTypes = {
  comment: React.PropTypes.object
}


export default Comment;
