Overview

Your overall goal is to build a simple blog app (from scratch) that will display posts and let you easily create and save new posts. Basically, a simplified version of something like Tumblr.

The project will be broken up into steps. You should aim to complete each step in roughly 1 - 2 days.

Step 1

Goal

get your database and server setup
send a "Hello World" response when you visit the homepage ('localhost:3000/')
send a JSON response of at least 3 posts from your database when you visit a '/posts' page ('localhost:3000/posts').
To complete Step 1 you'll need to:

Install MongoDB, Mongoose, Express
Create your project organization/structure
Create a server.js file that:
Creates a connection to mongoose database connection
After connected to a database, uses app.listen to create a basic express server
Create a 'posts' model file that sets up the schema and model for blog posts
Setup basic routing:
Create a route that sends a response of 'Hello World' when you visit the home page ('/')
Create a route that sends a response of all of the posts in your database when you visit the posts page ('/posts')
Create a route that creates a blog post and saves it to your database when you send a post request ot your posts page ('/posts')
Helpful tools:

Postman: Send get and postrequests to your site to easily test your api
The mongo shell
Nodemon: Automatically reload your server file on changes
JSON Viewever Chrome Extension
Resources

Scotch.io Intro to Mongoose
Scotch.io Building a RESTful API using Express and Node