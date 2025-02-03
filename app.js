import { responseHandler } from './response-handler.js';
import express from 'express';

const app = express();

app.get('/', responseHandler);

app.listen(3000);
