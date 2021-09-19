const express = require('express');
const redis = require('redis');
const app = express();
const port = process.env.PORT || 8000

const client = redis.createClient({
    host: "redis-server", port: 6379
});

client.set('visits', 0);

app.get('/', (req, res) => {
    // process.exit(0);
    client.get('visits', (err, val) => {
        console.log(`Visits count: ${val}`);
        res.send(`Visits count: ${val}`);
        client.set('visits', parseInt(val) + 1)
    })
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

process.on('uncaughtException', (err) => {
    if (err) {
        console.log(err);
        process.exit(0);
    }
})