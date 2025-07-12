const express = require('express');
const methodoverride = require("method-override");
const app = express();
const path = require('path');
const {v4: uuidv4} = require('uuid');

app.use(methodoverride("_method"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  

let posts =[

    { id: uuidv4(),
     username : "ram",
    content : "All work Done for today"
    },
    {
        id: uuidv4(),
        username :"zatu",
        content : "only elvish bhay"
    }
]

app.get('/posts', (req, res) => {
    res.render("index.ejs",{posts});
});

app.post("/posts", (req, res) => {
    const {username ,content} = req.body;
    const id = uuidv4();
    posts.push({id,username, content});
    res.redirect("/posts");
});

app.get("/posts/new",(req, res) => {
    res.render("new.ejs");
});

app.get("/posts/:id", (req, res) => {
    const {id} = req.params;  
    const post = posts.find(p => p.id === id);
    if (!post) {    
        return res.status(404).send('Post not found');
    }   
    res.render("show.ejs",{post});
});

app.get("/posts/:id/edit",(req,res) =>{
    const id = req.params.id;
    const post = posts.find(p => p.id ===id);
    res.render("edit.ejs", {post});
});

app.patch("/posts/:id/edit", (req,res) =>{
    const id = req.params.id;
    const post = posts.find(p => p.id === id);
    post.content = req.body.content;
    res.redirect("/posts");
});

app.delete("/posts/:id", (req,res) =>{
    const id = req.params.id;
    posts=posts.filter(p => p.id !== id);
    res.redirect("/posts");
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});