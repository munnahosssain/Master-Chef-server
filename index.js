const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefInfo = require('./data/chefInfo.json');

app.use(cors());

app.get("/", (req, res) => {
    res.send("Master chef!");
});

app.get("/chefInfo", (req, res) => {
    res.send(chefInfo);
});

app.get("/chefInfo/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    const chefInformation = chefInfo.filter(chef => chef._id === id);
    console.log(chefInformation);
    res.send(chefInformation);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});