const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
const allCard = require('./data/allCard.json')
const foodData = require("./data/foodData.json")


app.use(cors())
app.get('/', (req, res) => {
    res.send('simply recipes server runing')
});

app.get('/viewRecipy/:id', (req, res) =>{
    const id = req.params.id;
    const matchData = allCard.find(match => match.id ===  parseInt(id));
    res.send(matchData)
})

app.get('/allCard', (req, res) => {
    res.send(allCard)
});

app.get('/foodData', (req, res) => {
    res.send(foodData)
});

app.listen(port , ()=>{
    console.log(`server side runing : ${port}`);
})