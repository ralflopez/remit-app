const express = require('express');
const router = require('./routes');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
;}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('server running'));