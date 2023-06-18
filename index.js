const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefInfo = require('./data/chefInfo.json');

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Master chef!");
});

app.get("/chefInfo", (req, res) => {
    res.send(chefInfo);
});

app.get("/chefInfo/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const chefInformation = chefInfo.find(chef => chef._id === id);
    res.send(chefInformation);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});