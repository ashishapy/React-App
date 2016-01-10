import express from 'express';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import {MongoClient} from 'mongodb';

let app = express();

// app.get('/', (req, res) => res.send('Hello express!'));

app.use(express.static('public'));

let db;
MongoClient.connect(process.env.MONGO_URL, (err, database) => {
  if (err) throw err;

  db = database;
  app.use('/graphql', GraphQLHTTP({
    schema: schema(db),
    graphiql: true
  }));

  app.listen('3333', () => console.log("listenning on port 3333"));
});