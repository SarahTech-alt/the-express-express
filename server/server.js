// bring express into your project
// you will need to `npm init` and `npm install express` first

const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.static('server/public'));
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});

app.use(express.urlencoded({ extended: true}));

// create your express app

// This is your array of trains
const trains = [
    { name: 'Thomas', color: 'Blue' },
    { name: 'Gordon', color: 'Blue' },
    { name: 'Henry', color: 'Green' },
    { name: 'James', color: 'Red' }
];

// -------- BASE -----//

// Create your `/train` route here
// when a user visits localhost:5000/train
// this route should return the array of trains

app.get('/trains', (req, res) => {
    console.log('request for trains was made');
    res.send(trains);
});


// Create your `/first-train` route here
// when a user visits localhost:5000/first-train
// this route should return the first train in the array

app.get('/first-train', (req,res) =>{
    console.log('request was made for first train');
    res.send(trains[0]);
    console.log('first train was sent');
});

// Create your `/last-train` route here
// when a user visits localhost:5000/last-train
// this route should return the last train in the array

app.get('/last-train', (req,res) => {
    console.log('request was made for last train');
    res.send(trains[trains.length-1]);
    console.log('last train was sent');
});

// -------- STRETCH -----//

// Create your `/count` route here
// when a user visits localhost:5000/count
// this route should return the number of trains in the array
// NOTE: express doesn't like it when you return numbers
// instead, return an object like { totalCount: 4 }

app.get('/count', (req, res) => {
    console.log('Train count requested');
    res.send(`The number of trains: ${trains.length}.`)
    console.log('Train count was sent');
});

// Create your `/random` route here
// when a user visits localhost:5000/random
// this route should return a single train at random

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

app.get('/random', (req,res) => {
    console.log('Radom route requested');
    res.send(`Your random train is: ${JSON.stringify(trains[randomNumber(0, trains.length-1)])}`)
    
});
// -------- BASE -----//

// Don't forget to start your app by running `.listen()`