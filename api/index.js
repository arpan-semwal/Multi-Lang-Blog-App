const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const multer = require("multer");
const uploadMiddleware = multer({dest:'uploads/'});
const fs = require('fs');
const Post = require('./models/Post');



const app = express();


app.use(cors());
app.use(express.json());
app.use('/uploads' , express.static(__dirname + '/uploads'));

const URL = "mongodb+srv://arpansemwal8:arpan@cluster0.r4g3in8.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URL);



app.get('/' , (req,res) => {
    res.json('text ok');
    
});

app.post('/post' , uploadMiddleware.single('file'), async(req , res) => { // first save file to uploads
  const {originalname , path} = req.file;
  const parts =   originalname.split('.'); // spliting the file name so it readable
  const ext = parts[parts.length - 1];
  const newPath = path+'.'+ext
  fs.renameSync(path , newPath);

  const {title , summary , content , language} = req.body;
  const postDoc = await Post.create({
    title,
    summary,
    content,
    language:language.toLowerCase(),
    cover:newPath,
  })
res.json(postDoc);
});


app.get("/post", async (req, res) => {
  const { language } = req.query;
  const query = language ? { language } : {};
  res.json(
    await Post.find()
      .sort({ createdAt: -1 })
      .limit(20)
  );
});


app.get('/post/:id', async (req, res) => {
  const { id } = req.params;
  const { language } = req.query;

  const post = await Post.findById(id).exec();
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  if (language && post.language !== language) {
    return res.status(404).json({ message: 'Post not available in selected language' });
  }

  res.json(post);
});






app.listen(4000);
