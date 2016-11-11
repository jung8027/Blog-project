import React from 'react';
import $ from 'jquery';
import Post from '../post/Post.jsx'
import EditablePost from '../posts/EditablePost.jsx'
import CreateComment from '../comments/CreateComment.jsx'
import Comments from '../comments/Comments.jsx'

const PostPage = React.createClass({
  getInitialState() {
    return {post: null}
  },
  componentDidMount() {
    this.fetchPostDetails();
  },
  fetchPostDetails: function(){
    $.ajax({
      url: `/posts/${this.props.params.id}`,
      type: 'GET'
    })
    .done((data) => {
      console.log('AJAX data', data);
      this.setState({post: data});
    })
  },
  render: function() {
    return (
      <div>
        {this.state.post ? (
          <div style={postsStyle}>
            <h1>Post:</h1>
            <Post post={this.state.post} />
          </div>
        ) : null}
        {this.state.post ? (
          <div style={postsStyle}>
            <Comments post={this.state.post} refresh={this.fetchPostDetails}/>
          </div>
        ) : null}        
        {this.state.post ? (
          <div style={postsStyle}>
            <CreateComment post={this.state.post} refresh={this.fetchPostDetails}/>
          </div>
        ) : null}
      </div>
      )
  }
});

const postsStyle = {
    backgroundColor: 'pink',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: 'auto',
    padding: '50px'
}

export default PostPage;
