// syntax for import Express App
const express = require("express");

//setting up Express js
const app = express();

const PORT = 3030;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello! Welcome to ExpressJS")
});

app.get('/app', (req, res) => {
    res.send("Enter Your Name:");
});

app.get('/app/data', (req, res) => {
    res.json( { message: 'Hey! from API Creation!' });
});

app.post('/app', (req, res) => {
    res.json( { message: 'Hey! Welcome to Dashboard'});
});

app.patch('/app', (req, res) => {
    res.send("Let's Update your ExpressJS Journey!")
});

app.delete('/app', (req, res) => {
    res.json( { message: 'Hey! Please Delete your Unwanted Database'});
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})