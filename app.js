const express = require('express');
const app = new express();
const port = process.env.PORT || 3000
app.get('/', (req, res) => {
    res.send("WElcome to dicker ExpressJs");
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});