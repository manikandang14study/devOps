const express = require('express');
const app = new express();
const port = process.env.PORT
app.get('/', (req, res) => {
    res.send("WElcome");
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});