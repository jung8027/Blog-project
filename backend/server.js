const express = require('express');
const app = express();
const mongoose = require('mongoose');

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
	});
})
