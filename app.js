const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

module.exports = app;
