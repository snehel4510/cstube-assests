const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const app = express()

// connect to mongodb database
const dbURI = "mongodb://localhost:27017/minorproject";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000, () => {
            console.log("connected to db and listening to port 3000");
    }))  // listen for requests after the connection is established
    .catch(err => console.log(err))

// using 3rd party middleware
app.use(morgan('dev'));

// middleware to parse the request body
app.use(express.urlencoded({ extended: true }));


const dataSchema = new mongoose.Schema({});
const category = mongoose.model('model', dataSchema, 'category');
const playlist = mongoose.model('model', dataSchema, 'playlist');


const getdata = async () => {
    const categories = await category.find()
    // console.log(Object.values(categories[0]));
    // console.log(Object.keys(categories[0]));
    const data = categories[0]._doc.topics[0]; 
    console.log(data);
    const playlists = await playlist.find();
    console.log(Object.values(playlists));
}

app.get('/', (req, res) => {
    category.find()
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err);
    })
});

getdata();