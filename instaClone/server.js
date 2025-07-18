const express = require('express');
const path = require('path');
const override = require('method-override');
const { v4: uuidv4 } = require('uuid');
const { time } = require('console');
const { type } = require('os');


const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(override('_method'));

// const postSchema = {
//   username : {
//     type: String,
//     required: true,
//   },
//   time :{
//     type: Date,
//     default: Date.now
//   },
//   imageurl: {
//     type: String,
//     required: true
//   },
//   likescount:{
//     type: Number,
//     default: 0
//   },
//   comments :{
//     type: Array,
//     default: []    
//   },
//   caption : {
//     type: String,
//     required: false
//   },
// }
let posts = [
  {
    "id": uuidv4(), 
    "profileurl": "https://placehold.co/40x40/4a4a4a/ffffff?text=P",
    "username": "traveler_explorer",
    "time": "2025-07-17T10:00:00Z",
    "postimgurl": "https://placehold.co/600x600/FF5733/ffffff?text=Mountain+View",
    "likescount": 1250,
    "comments": [
      {
        "user": "naturelover",
        "text": "Stunning view!"
      },
      {
        "user": "adventureseeker",
        "text": "Where is this?"
      }
    ],
    "caption": "Chasing sunsets and mountain dreams. ⛰️✨ #travel #mountains #sunset"
  },
  {
    "id": uuidv4(), 
    "profileurl": "https://placehold.co/40x40/4a4a4a/ffffff?text=P",
    "username": "foodie_delights",
    "time": "2025-07-17T12:30:00Z",
    "postimgurl": "https://placehold.co/600x600/33FF57/ffffff?text=Delicious+Food",
    "likescount": 890,
    "comments": [
      {
        "user": "hungryhippo",
        "text": "Looks so good! 🤤"
      }
    ],
    "caption": "Brunch goals achieved! 🍳🥑 #foodporn #brunch #healthyfood"
  },
  {
    "id": uuidv4(), 
    "profileurl": "https://placehold.co/40x40/4a4a4a/ffffff?text=P",
    "username": "artistic_soul",
    "time": "2025-07-17T15:45:00Z",
    "postimgurl": "https://placehold.co/600x600/3357FF/ffffff?text=Abstract+Art",
    "likescount": 2100,
    "comments": [],
    "caption": "Lost in the colors. 🎨 #abstractart #painting #creative"
  },
  {
    "id": uuidv4(), 
    "profileurl": "https://placehold.co/40x40/4a4a4a/ffffff?text=P",
     "username": "fitness_journey",
    "time": "2025-07-17T18:00:00Z",
    "postimgurl": "https://placehold.co/600x600/FF33A1/ffffff?text=Workout",
    "likescount": 1500,
    "comments": [
      {
        "user": "gymrat",
        "text": "Keep pushing! 💪"
      },
      {
        "user": "fitfam",
        "text": "Inspiration!"
      }
    ],
    "caption": "Sweat session complete! Feeling strong. #fitness #workout #gymlife"
  },
  {
    "id": uuidv4(), 
    "profileurl": "https://placehold.co/40x40/4a4a4a/ffffff?text=P",
    "username": "pet_lover_daily",
    "time": "2025-07-18T08:15:00Z",
    "postimgurl": "https://placehold.co/600x600/A133FF/ffffff?text=Cute+Dog",
    "likescount": 3500,
    "comments": [
      {
        "user": "dogmom",
        "text": "So adorable!"
      },
      {
        "user": "catperson",
        "text": "Even I like this dog!"
      }
    ],
    "caption": "My furry best friend. ❤️🐶 #dogsofinstagram #cutedog #petlove"
  },
  {
    "id": uuidv4(), 
    "profileurl": "https://placehold.co/40x40/4a4a4a/ffffff?text=P",
     "username": "city_scapes",
    "time": "2025-07-18T09:40:00Z",
    "postimgurl": "https://placehold.co/600x600/33FFFF/ffffff?text=City+View",
    "likescount": 980,
    "comments": [],
    "caption": "City lights and endless nights. 🌃 #citylife #nightphotography"
  },
  {
    "id": uuidv4(), 
    "profileurl": "https://placehold.co/40x40/4a4a4a/ffffff?text=P",
    "username": "bookworm_reads",
    "time": "2025-07-18T11:00:00Z",
    "postimgurl": "https://placehold.co/600x600/FF8C33/ffffff?text=Book+Stack",
    "likescount": 620,
    "comments": [
      {
        "user": "reader_gal",
        "text": "What are you reading?"
      }
    ],
    "caption": "Current reads and coffee. ☕📚 #bookstagram #reading #cozy"
  },
  {
    "id": uuidv4(), 
    "profileurl": "https://placehold.co/40x40/4a4a4a/ffffff?text=P",
     "username": "tech_gadgets",
    "time": "2025-07-18T13:20:00Z",
    "postimgurl": "https://placehold.co/600x600/33FF8C/ffffff?text=New+Gadget",
    "likescount": 1800,
    "comments": [],
    "caption": "Unboxing the latest tech! 💻📱 #tech #gadgets #innovation"
  },
  {
    "id": uuidv4(), 
    "profileurl": "https://placehold.co/40x40/4a4a4a/ffffff?text=P",
     "username": "fashion_diaries",
    "time": "2025-07-18T15:00:00Z",
    "postimgurl": "https://placehold.co/600x600/8C33FF/ffffff?text=Fashion+Outfit",
    "likescount": 2700,
    "comments": [
      {
        "user": "stylequeen",
        "text": "Love this outfit!"
      }
    ],
    "caption": "Outfit of the day. Feeling chic! ✨ #fashion #ootd #style"
  },
  {
    "id": uuidv4(), 
    "profileurl": "https://placehold.co/40x40/4a4a4a/ffffff?text=P",
    "username": "nature_photography",
    "time": "2025-07-18T16:50:00Z",
    "postimgurl": "https://placehold.co/600x600/FF3333/ffffff?text=Forest+Path",
    "likescount": 1950,
    "comments": [
      {
        "user": "wanderlust",
        "text": "So peaceful."
      }
    ],
    "caption": "Exploring the hidden gems of nature. 🌳 #nature #photography #forest"
  }
]

app.get('/', (req, res) => {
  res.render("Home.ejs", { posts });
});
app.get('/post/:id', (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  if (!post) {
    return res.status(404).send('Post not found');
  }
  res.render("Edit.ejs",{post});

});

app.post('/update-post', (req, res) => {
  const inputdata = req.body;
  const post =posts.find(p => inputdata.id == p.id);
  if (post) {
    post.postimgurl = inputdata.postimgurl;
    post.caption = inputdata.caption;
    post.time = inputdata.time;
  }
  res.redirect('/');

});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});