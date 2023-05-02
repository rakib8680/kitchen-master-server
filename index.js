

const allData = require('./data/data.json')
const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors())

// made port 
app.listen(5000, () => {
    console.log('Example app listening on port 5000!');
});

app.get('/', (req, res) => {
    res.send(console.log('Hello world'));
})


// send all data 
app.get('/allData', (req, res) => {
res.send(allData);
})