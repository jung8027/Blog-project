import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import '../app.css'

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
        <input onChange={this.handleChange.bind(this, 'title')} type="text" name="title" className="inpox"/>
        <br/>
        <br/>
        <label>Picture Link: </label>
        <br/>
        <input onChange={this.handleChange.bind(this, 'pics')} type="text" name="pics" className="inpox"/>
        <br/>
        <br/>        
        <label>Text: </label>
        <br/>
        <input onChange={this.handleChange.bind(this, 'body')} type="body" name="body" className="inpox"/>
        <br/>
        <br/>
        <Link to="/"><input onClick={this.submitNewPost} type="button" value="Submit" /></Link>
      </form>
    )
  }
})

export default CreatePost;
