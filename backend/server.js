const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postModel = require('./posts/posts-model')
const Post = mongoose.model('Post')

mongoose.connect('mongodb://localhost/blog-database');

const db = mongoose.connection;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/posts',(req,res)=>{
	res.send('hey from the posts page')
})

db.on('open', () => {
	console.log('db connection opened');
	app.listen(3000, function () {
	  console.log('Example app listening on port 3000!');
	  Post.create({title: 'test post 1'}, (err,data)=>{
	  	if(err) console.log('Error with database');
	  	else console.log('Post created!')
	  })
	  //finds all posts and logs to console
	  Post.find({},(err,data)=>{
	  	console.log('database found!', data)
	  })
	  //Find all posts that match specific title
      Post.find({title: 'find this title'}, (err, data) => {
        console.log('Database data found!', data);
      })
	});
})

db.on('error', ()=>{
	console.log('error in db connection!')
})