import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

const EditablePost = React.createClass({
  getInitialState() {
    return {
      title: '',
      pics: '',
      text: ''
    }
  },
  componentWillMount(){
    this.setState({
      title: this.props.post.title,
      pics: this.props.post.pics,
      text: this.props.post.text
    })
  },
  submitUpdate() {
    $.ajax({
      url: '/edit-post',
      type: 'POST',
      data: {
        title: this.state.title,
        pics: this.state.pics,
        text: this.state.text,
        id: this.props.post._id
      }
    })
  },
  deletePost(){
    $.ajax({
      url: '/edit-post',
      type: 'DELETE',
      data: {
        id: this.props.post._id
      }
    });
    console.log('trying to delete post ',this.props.post._id)
  },
  handleChange(inputField, e) {
    this.setState({[inputField]: e.target.value})
  },
  render: function() {
    return (
      <div>
          <form>
          <label>Title: </label>
          <br/>
          <textarea onChange={this.handleChange.bind(this, 'title')} type="text" name="title">
            {this.props.post.title}
          </textarea>
          <br/>
          <label>Picture Link: </label>
          <br/>
          <textarea onChange={this.handleChange.bind(this, 'pics')} type="text" name="pics">
            {this.props.post.pics}
          </textarea>
          <br/>     
          <label>Text: </label>
          <br/>
        	<textarea onChange={this.handleChange.bind(this, 'text')}>
           		{this.props.post.text}
         	</textarea>
          <br/>
          <Link to="/"><input type="button" value="Cancel"/></Link>
         	 <Link to="/"><input onClick={this.submitUpdate} type="button" value="Submit" /></Link>
           <Link to="/"><input onClick={this.deletePost} type="button" value="DELETE"/></Link>
         </form>
      </div>
    );
  }
});

EditablePost.propTypes = {
  post: React.PropTypes.object
}


export default EditablePost;

