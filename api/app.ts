import { AGENCY_URL } from './constants';
import setup from './translations/setup';

const express = require('express');
const mongoose = require('mongoose');
const agencyRoutes = require('./routes/agency');

const app = express();
mongoose
  .connect('mongodb://localhost:27017/codedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(setup.connexion_success))
  .catch(() => console.log(setup.connexio_failed));

app.use((req: any, res: any, next: any) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use(express.json());

app.use(AGENCY_URL, agencyRoutes);

module.exports = app;
