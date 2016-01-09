import express from 'express';

var app = express();

// app.get('/', (req, res) => res.send('Hello express!'));

app.use(express.static('public'));

app.listen('3333');