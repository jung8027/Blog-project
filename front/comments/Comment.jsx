import React from 'react';
import '../app.css'
import $ from 'jquery'

const Comment = React.createClass({
  handleClick: function(id){
    console.log("Comment:"+id)
    $.ajax({
      url: '/comments',
      type: 'DELETE',
      data: {
        PostId: this.props.post_id,
        CommentId: id
      }
    })
    .done((data) => {
      console.log(data);
      this.props.refresh();
    })
  },
  render: function() {
    return (
      <div style={posts}>
        <h2>{this.props.comment.username}</h2>
        <p>{this.props.comment.text}</p>
        <p>{this.props.comment.date}</p>
        <button onClick={this.handleClick.bind(this, this.props.comment._id)}>DELETE</button>
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
