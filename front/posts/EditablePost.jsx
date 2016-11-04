import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

const EditablePost = React.createClass({
  getInitialState() {
    return {
      title: '',
      pics: '',
      body: ''
    }
  },
  submitUpdate() {
    $.ajax({
      url: '/edit-post',
      type: 'POST',
      data: {
        title: this.state.title,
        pics: this.state.pics,
        text: this.state.body,
        id: this.props.post._id
      }
    })
  },
  handleChange(inputField, e) {
    this.setState({[inputField]: e.target.value})
  },
  render: function() {
    return (
      <div>
          <form>
          <label>Title: </label>
          <textarea onChange={this.handleChange.bind(this, 'title')} type="text" name="title">
            {this.props.post.title}
          </textarea>
          <br/>
          <label>Pictures: </label>
          <textarea onChange={this.handleChange.bind(this, 'pics')} type="text" name="pics">
            {this.props.post.pics}
          </textarea>
          <br/>     
          <label>Body: </label>
        	<textarea onChange={this.handleChange.bind(this, 'body')}>
           		{this.props.post.text}
         	</textarea>
         	 <Link to="/"><input onClick={this.submitUpdate} type="button" value="Submit" /></Link>
         </form>
      </div>
    );
  }
});

EditablePost.propTypes = {
  post: React.PropTypes.object
}


export default EditablePost;

