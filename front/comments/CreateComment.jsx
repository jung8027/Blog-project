import React from 'react';
import $ from 'jquery';

const CreateComment = React.createClass({
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
      console.log(data);
       this.setState({
        username: '',
        text: '',
      })
      this.props.refresh();
     
    })
  },
  render: function() {
    return (
      <div>
        <h2><strong>Leave a Reply:</strong></h2>
        <input size="45" onChange={this.handleChange.bind(this, 'username')} type="text" placeholder="username" value={this.state.username}/>
        <br/>
        Text:
        <br/>
        <textarea rows="5" cols="43" onChange={this.handleChange.bind(this, 'text')} type="text" placeholder="text" value={this.state.text}/>
        <br/>
        <button onClick={this.sendCommentRequest}> Send a comment </button>
      </div>
    )
  }
})

export default CreateComment;
