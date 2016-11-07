
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postModel = require('./posts/posts-model');
const commentModel = require('./comments/comments-model');
const Post = mongoose.model('Post');
const Comment = mongoose.model('Comment');
const path = require('path');
const rootPath = path.join(__dirname, '..');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectId;

mongoose.connect('mongodb://localhost/blog-app');

const db = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: false }));

//Serving up bundle.js file
app.use(express.static(`${rootPath}/front/bundle`));


//API

//Get an individual post
app.get('/posts/:id', (req, res) => {
  Post.findById(req.params.id, (err, data) => {
    res.send(data);
    console.log('getting from '+req.params.id)
  })
});

//Get all blog posts
app.get('/posts', (req, res) => {
  Post.find({}, (err, data) => {
    res.send(data);
  })
});

//Edit existing post
app.post('/edit-post', (req, res) => {

// console.log('DATA FROM AJAX:', req.body);
// console.log('POST req: ready to update post');

 var obj_id = new ObjectId(req.body.id);
 Post.update( {_id: obj_id }, {title: req.body.title, pics: req.body.pics, text: req.body.text},
   (err) => {
     if (err){ 
     console.log('Error');
     return;
   }
   console.log('Edited post!')
 });
});

//Delete an existing post
app.delete('/edit-post', (req, res) => {
 var obj_id = new ObjectId(req.body.id);
 Post.remove( {_id: obj_id },
   (err) => {
     if (err){ 
     console.log('Error');
     return;
   }
   console.log('Deleted post!')
 });
});

//Make a new post
app.post('/posts', (req, res) => {
   const newPost = req.body;
 // console.log('DATA COMING FROM AJAX:', req.body);
   Post.create(newPost, (err, data) => {
     console.log('New post created!:', data);
   })
});


//Comments are currently inactive
app.get('/comments', (req, res) => {
  console.log('Getting comments!');
  Comment.find({}, (err, data) => {
    res.send(data)
  });
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  console.log('New comment', newComment);
  Comment.create(newComment);

});

//Server call
app.get('/*', (req, res) => {
  res.sendFile(`${rootPath}/front/index.html`);
});


db.on('open', () => {
  console.log('db connection opened!');
  app.listen(7777, () => {
    console.log('Listening on port 7777');
  });
})

db.on('error', () => {
  console.log('error in db connection!');
})
