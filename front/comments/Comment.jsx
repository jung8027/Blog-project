import React from 'react';
import $ from 'jquery';

const Comment = React.createClass({
  getInitialState(){
    return{
      username: '',
      text: '',
    }
  },
  handleChange(inputField, e) {
    this.setState({[inputField]: e.target.value})
    console.log(this.state);
  },
  sendCommentRequest() {
    const date = Date.call();
    $.ajax({
      url: '/comments',
      type: 'POST',
      data: {
        username: this.state.username,
        text: this.state.text,
        date: date,
        id: this.props.post._id
      }
    })
    .done((data) => {
      console.log('Comment created!', data);
    })
  },
  render: function() {
    return (
      <div>
        <h2><strong>Leave a Reply:</strong></h2>
        <input size="45" onChange={this.handleChange.bind(this, 'username')} type="text" placeholder="username"/>
        <br/>
        Text:
        <br/>
        <textarea rows="5" cols="43" onChange={this.handleChange.bind(this, 'text')} type="text" placeholder="text"/>
        <br/>
        <button onClick={this.sendCommentRequest}> Send a comment </button>
      </div>
    )
  }
})

export default Comment;
