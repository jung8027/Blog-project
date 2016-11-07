import React from 'react';
import {Link} from 'react-router';
import '../app.css'

const Post = React.createClass({
  render: function() {
    return (
      <div style={posts}>
        <Link to={`/post/${this.props.post._id}`}><h2>{this.props.post.title}</h2></Link>
        <Link to={`/post/${this.props.post._id}`}><img src={this.props.post.pics}/></Link>
        <p>{this.props.post.text}</p>
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

Post.propTypes = {
  post: React.PropTypes.object
}


export default Post;
