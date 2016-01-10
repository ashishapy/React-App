import express from 'express';

import {MongoClient} from 'mongodb';

let app = express();

// app.get('/', (req, res) => res.send('Hello express!'));

app.use(express.static('public'));

let db;
MongoClient.connect(process.env.MONGO_URL, (err, database) => {
  if(err) throw err;
  
  db = database;
  
  app.listen('3333', () => console.log("listenning on port 3333"));
});

app.get('/data/links', (req, res) => {
  db.collection('links').find({}).toArray((err, links) => {
    if(err) throw err;
    
    res.json(links);
  });
});