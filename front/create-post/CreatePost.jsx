import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

const CreatePost = React.createClass({
  getInitialState() {
    return {
      title: '',
      pics: '',
      body: ''
    }
  },
  handleChange(inputField, e) {
    console.log(e);
    this.setState({[inputField]: e.target.value})
    console.log(this.state);
  },
  submitNewPost() {
    $.ajax({
      url: '/posts',
      type: 'POST',
      data: {
        title: this.state.title,
        pics: this.state.pics,
        text: this.state.body
      }
    })
    .done((data) => {
      console.log('AJAX data');
      console.log('AJAX state', this.state);
    })
  },
  render(){
    return (
      <form>
        <h1>Submit a post:</h1>
        <label>Title: </label>
        <br/>
        <input onChange={this.handleChange.bind(this, 'title')} type="text" name="title" />
        <br/>
        <br/>
        <label>Picture Link: </label>
        <br/>
        <input onChange={this.handleChange.bind(this, 'pics')} type="text" name="pics" />
        <br/>
        <br/>        
        <label>Text: </label>
        <br/>
        <input onChange={this.handleChange.bind(this, 'body')} type="body" name="body" />
        <br/>
        <br/>
        <Link to="/"><input onClick={this.submitNewPost} type="button" value="Submit" /></Link>
      </form>
    )
  }
})

export default CreatePost;
