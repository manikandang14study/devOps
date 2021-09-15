const express = require('express');
const app = new express();
const port = process.env.PORT || 3000
app.get('/', (req, res) => {
    res.send("Welcome to docker ExpressJs");
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
process.on('uncaughtException', (err) => {
    err ? console.log(`Error: uncaughtException ${err}`) : null
});