import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as users from './users';

console.log(users);

const app = express();

const usersRouter = express.Router('/api/users');

usersRouter
.post('/api/users/register', users.createAccount)

app
  .use(cors()) // connexion front back
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use('/public', express.static(`${__dirname}/../public`))
  .use(usersRouter)

app.listen(8080, () => {
    console.log('Example app listening on port 8080!');
  });
