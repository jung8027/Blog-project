import React from 'react';
import $ from 'jquery';
import Post from '../post/Post.jsx'
import EditablePost from '../posts/EditablePost.jsx'
import Comment from '../comments/Comment.jsx'

const PostPage = React.createClass({
  getInitialState() {
    return {post: null}
  },
  // componentWillMount(){
  //   console.log('postpage info')
  // },
  componentDidMount() {
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
    return this.state.post ? (
      <div style={postsStyle}>
        <h1>Post:</h1>
        <Post post={this.state.post} />
        <Comment post={this.state.post} />
      </div>
    ) : null;
  }
});
//need to add component between line 28 and 29 to display comments


const postsStyle = {
    backgroundColor: 'pink',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%'
}

export default PostPage;
