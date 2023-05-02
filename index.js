

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
    res.send('Hello world');
})


// send all data 
app.get('/allData', (req, res) => {
    res.send(allData);
});


// send single data 


app.get('/allData/:id', (req, res) => {
    const id = req.params.id;
    const singleData = allData?.find(data => data.id === parseInt(id));
    res.send(singleData);
});