const fs = require('fs');
const responseHandler = require('./response-handler');

const express = require('express');

const app = express();

app.get('/', responseHandler);

app.listen(3000);
