const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/blog', {
  useNewUrlParser: true
});

const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/posts/',
  limits: {
    fileSize: 10000000
  }
});

const postSchema = new mongoose.Schema({
  title: String,
  author: String,
  date: String,
  content: String,
  path: String
});

const Post = mongoose.model('Post', postSchema);

app.post('/api/photos', upload.single('photo'), async (req, res) => {
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/posts/" + req.file.filename
  });
});

app.post('/api/posts', async (req, res) => {
  var dateTime = new Date();
  var dateChunks = (dateTime.toString()).split(" ");
  var date = dateChunks[1] + " " + dateChunks[2] + ", " + dateChunks[3];

  const post = new Post({
    title: req.body.title,
    author: req.body.author,
    date: date,
    content: req.body.content,
    path: req.body.path
  });
  try {
    await post.save();
    res.send(post);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/posts', async (req, res) => {
  try {
    let posts = await Post.find();
    res.send(posts);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/posts/:id', async (req, res) => {
  try {
    var post = await Post.findOne({
      _id: req.params.id
    });
    res.send(post);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/posts/:id', async (req, res) => {
  try {
    await Post.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/posts/:id', async (req, res) => {
  try {
    var dateTime = new Date();
    var dateChunks = (dateTime.toString()).split(" ");
    var date = dateChunks[1] + " " + dateChunks[2] + ", " + dateChunks[3];

    var post = await Post.findOne({
      _id: req.params.id
    });

    post.title = req.body.title;
    post.author = req.body.author;
    post.date = date;
    post.content = req.body.content;

    await post.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3001, () => console.log('Server listening on port 3001!'));
